import React, { useState, useEffect } from "react";
import { useHomepage } from "../../hooks/useHomepage";
import { useAdminCustom } from "../../hooks/useAdminCustom";
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
      toast.error(response.errors?.[0]?.message || response.message || "Failed to update colors.");
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
      <div className="p-8">
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

                <div style={{ position: 'relative' }}>
                  <label
                    htmlFor={field.name}
                    className="cursor-pointer block"
                  >
                    <div
                      className="w-full h-16 rounded-lg border shadow-inner"
                      style={{ backgroundColor: colors[field.name] }}
                    />
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
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '1px',
                      opacity: 0,
                      cursor: 'pointer',
                      border: 'none',
                      padding: 0,
                    }}
                  />
                </div>

                <input
                  type="text"
                  minLength={7}
                  maxLength={7}
                  pattern="^#[0-9A-Fa-f]{6}$"
                  title="Hex color code must start with # followed by 6 hex characters (e.g., #ffffff)"
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

    </>
  );
};

export default Colors;