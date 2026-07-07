import React, { useState, useEffect } from "react";
import { useHomepage } from "../../hooks/useHomepage";
import { useAdminCustom } from "../../hooks/useAdminCustom";
import Sidebar from "../../components/Sidebar"
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const Colors = () => {
  const { loading: homepageLoading, homepageData } = useHomepage();
  const { loading: updateLoading, handleUpdate } = useAdminCustom();

  const [colors, setColors] = useState({
    primary: "",
    secondary: "",
    primaryBackground: "",
    secondaryBackground: "",
    primaryForeground: "",
    secondaryForeground: "",
  });

  useEffect(() => {
    if (homepageData?.colors) {
      setColors(homepageData.colors);
    }
  }, [homepageData]);

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Save Changes?",
      text: "Do you want to save the updated colors?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Save",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#6b7280",
    });

    if (!result.isConfirmed) return;

    const response = await handleUpdate({ colors });

    if (response.success) {
      toast.success("Colors updated successfully!");
    } else {
      toast.error("Failed to update colors.");
    }
  }

  if (homepageLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-(--primaryBackground)">
        <div className="rounded-full h-20 w-20 bg-(--primary) animate-ping"></div>
      </div>
    );
  }

  const fields = [
    { name: "primary", label: "Primary Color" },
    { name: "secondary", label: "Secondary Color" },
    { name: "primaryBackground", label: "Primary Background Color" },
    { name: "secondaryBackground", label: "Secondary Background Color" },
    { name: "primaryForeground", label: "Primary Foreground Color" },
    { name: "secondaryForeground", label: "Secondary Foreground Color" },
  ];

  return (
    <>
      <div><Toaster
        position="bottom-right"
        reverseOrder={false}
      /></div>
      <div className="h-full montserrat-font">
        <div className="grid grid-cols-[250px_1fr]">
          <aside className="bg-black/90 shadow-lg text-white h-screen p-4 flex flex-col gap-4 sticky top-0 left-0 z-50">
            <h1 className='text-2xl font-bold '>Admin Dashboard</h1>
            <Sidebar />
          </aside>
          <div className="flex-1 p-8">
            <main className="p-8">
              <h1 className="text-2xl font-bold mb-8 lg:text-4xl">
                Colors
              </h1>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-4xl">
                {fields.map((field) => (
                  <div key={field.name} className="rounded-xl shadow-md bg-black/6 p-5">
                    <label htmlFor={field.name} className="block text-lg font-semibold text-gray-700 mb-4">
                      {field.label}
                    </label>

                    <input
                      id={field.name}
                      type="color"
                      value={colors[field.name]}
                      onChange={(e) =>
                        setColors({
                          ...colors,
                          [field.name]: e.target.value,
                        })
                      }
                      className="hidden"
                    />

                    <label htmlFor={field.name} className="cursor-pointer block">
                      <div className="w-full h-16 rounded-lg border shadow-inner" style={{ backgroundColor: colors[field.name] }} />
                    </label>

                    <input
                      type="text"
                      value={colors[field.name]}
                      onChange={(e) =>
                        setColors({
                          ...colors,
                          [field.name]: e.target.value,
                        })
                      }
                      className="mt-4 w-full border rounded-lg px-3 py-2"
                      required
                    />
                  </div>
                ))}

                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" disabled={updateLoading} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition disabled:opacity-50">
                    {updateLoading ? "Updating..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>

    </>
  );
};

export default Colors;