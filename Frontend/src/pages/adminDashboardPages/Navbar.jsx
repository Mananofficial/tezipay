import React, { useState, useEffect, useRef } from 'react'
import { useHomepage } from '../..//hooks/useHomepage'
import { useAdminCustom } from '../../hooks/useAdminCustom'
import { resolveImageUrl } from '../../utils/resolveImageUrl'
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const Navbar = () => {
  const { homepageData, loading: homepageLoading } = useHomepage();
  const { loading: updateLoading, handleUpdate, handleImageUpload } = useAdminCustom();
  const fileInputRef = useRef(null);
  const faviconInputRef = useRef(null);

  const [navbar, setNavbar] = useState({
    logo: '',
    navbarLinks: [
      {
        text: '',
        url: ''
      }
    ],
  });
  const [favicon, setFavicon] = useState('');

  useEffect(() => {
    if (homepageData?.navbar) {
      setNavbar({
        ...homepageData.navbar,
        logo: resolveImageUrl(homepageData.navbar.logo)
      });
    }
    if (homepageData?.favicon) {
      setFavicon(resolveImageUrl(homepageData.favicon));
    }
  }, [homepageData]);

  const addNavLink = () => {
    setNavbar((prev) => ({
      ...prev,
      navbarLinks: [...prev.navbarLinks, { text: '', url: '' }]
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const result = await handleImageUpload(file);

    if (result.success) {
      setNavbar((prev) => ({
        ...prev,
        logo: result.url
      }));
    } else {
      toast.error(result.error?.response?.data?.error || result.error?.message || 'Only JPEG, PNG, and SVG images are allowed.');
    }
  };

  const handleFaviconFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const result = await handleImageUpload(file);

    if (result.success) {
      setFavicon(result.url);
      toast.success("Favicon uploaded successfully!");
    } else {
      toast.error(result.error?.response?.data?.error || result.error?.message || 'Only JPEG, PNG, SVG and ICO images are allowed.');
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Save Changes?",
      text: "Do you want to save the updated navbar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Save",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#6b7280",
    });

    if (!result.isConfirmed) return;

    const response = await handleUpdate({ navbar, favicon });

    if (response.success) {
      toast.success("Navbar updated successfully!");
    } else {
      toast.error(response.errors?.[0]?.message || response.message || "Failed to update navbar.");
    }
  }

  if (homepageLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="p-8">
        <main>
          <div className="flex flex-col justify-start items-start gap-6">
            <h1 className="text-4xl font-bold">Navbar</h1>

            <form onSubmit={handleSubmit} className="max-w-4xl flex flex-col gap-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="bg-black/6 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-5">
                    Website Logo
                  </h2>

                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                      src={resolveImageUrl(navbar.logo)}
                      alt="Logo"
                      className="w-36 h-36 object-contain rounded-lg border bg-gray-50"
                    />

                    <div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                      >
                        Upload New Logo
                      </button>

                      <p className="text-gray-500 text-sm mt-3">
                        PNG, SVG or JPG recommended.
                      </p>
                    </div>
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/svg+xml,.jpg,.jpeg,.png,.svg" className="hidden" onChange={handleFileChange} />
                </div>

                <div className="bg-black/6 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-5">
                    Website Favicon
                  </h2>

                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    {favicon ? (
                      <img
                        src={resolveImageUrl(favicon)}
                        alt="Favicon"
                        className="w-20 h-20 object-contain rounded-lg border bg-gray-50"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                        No Favicon
                      </div>
                    )}

                    <div>
                      <button
                        type="button"
                        onClick={() => faviconInputRef.current.click()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                      >
                        Upload New Favicon
                      </button>

                      <p className="text-gray-500 text-sm mt-3">
                        ICO, PNG, SVG or JPG recommended.
                      </p>
                    </div>
                  </div>
                  <input ref={faviconInputRef} type="file" accept="image/x-icon,image/vnd.microsoft.icon,image/jpeg,image/png,image/svg+xml,.ico,.jpg,.jpeg,.png,.svg" className="hidden" onChange={handleFaviconFileChange} />
                </div>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {navbar.navbarLinks.map((link, index) => (
                  <div key={index} className="bg-black/6 rounded-xl shadow-md p-5">
                    <h3 className="font-semibold text-lg mb-5">
                      Navigation Item {index + 1}
                    </h3>
                    <div className="flex gap-4 justify-start items-center mb-4">
                      <input
                        className="border p-2 rounded-lg w-full"
                        type="text"
                        name={`navLink${index + 1}`}
                        id={`navLink${index + 1}`}
                        placeholder={`Nav Link ${index + 1}`}
                        value={link.text}
                        onChange={(e) => {
                          const newLinks = [...navbar.navbarLinks];
                          newLinks[index].text = e.target.value;
                          setNavbar({ ...navbar, navbarLinks: newLinks });
                        }}
                      />

                      <input
                        className="border p-2 rounded-lg w-full"
                        type="text"
                        name={`navLink${index + 1}Url`}
                        id={`navLink${index + 1}Url`}
                        placeholder="URL"
                        value={link.url}
                        onChange={(e) => {
                          const newLinks = [...navbar.navbarLinks];
                          newLinks[index].url = e.target.value;
                          setNavbar({ ...navbar, navbarLinks: newLinks });
                        }}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={async () => {
                        const result = await Swal.fire({
                          title: "Remove Link?",
                          text: "Are you sure you want to remove this navbar link?",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonText: "Yes, Remove",
                          cancelButtonText: "Cancel",
                          confirmButtonColor: "#ef4444",
                          cancelButtonColor: "#6b7280",
                          reverseButtons: true,
                          focusCancel: true,
                        });

                        if (!result.isConfirmed) return;

                        const newLinks = [...navbar.navbarLinks];
                        newLinks.splice(index, 1);
                        setNavbar({
                          ...navbar,
                          navbarLinks: newLinks,
                        });

                        toast.success("Navbar link removed!");
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  onClick={addNavLink}
                  type="button"
                  className="scale-95 bg-(--primary) text-white rounded-lg hover:bg-(--secondary)"
                >
                  Add Nav Item
                </button>
              </ul>

              <div className="md:col-span-2 flex justify-end">
                <button type="submit" disabled={updateLoading} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition disabled:opacity-50">
                  {updateLoading ? "Updating..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default Navbar
