import React, { useState, useEffect, useRef } from 'react'
import { useHomepage } from '../..//hooks/useHomepage'
import { useAdminCustom } from '../../hooks/useAdminCustom'
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const Footer = () => {
  const { homepageData, loading: homepageLoading } = useHomepage();
  const { loading: updateLoading, handleUpdate, handleImageUpload } = useAdminCustom();
  const fileInputRef = useRef(null);

  const [footer, setFooter] = useState({
    logo: "",
    address: "",
    logoBelowText: "",
    facebookLink: "",
    twitterLink: "",
    youtubeLink: "",
    instagramLink: ""
  })

  useEffect(() => {
    if (homepageData?.footer) {
      setFooter(homepageData.footer)
    }
  }, [homepageData])

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const result = await handleImageUpload(file);

    if (result.success) {
      setFooter(prev => ({
        ...prev,
        logo: result.url
      }));
    } else {
      toast.error(result.error?.response?.data?.error || result.error?.message || 'Only JPEG, PNG, and SVG images are allowed.');
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Save Changes?",
      text: "Do you want to save the updated footer?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Save",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#6b7280",
    });

    if (!result.isConfirmed) return;

    const response = await handleUpdate({ footer });

    if (response.success) {
      toast.success("Footer updated successfully!");
    } else {
      toast.error(response.errors?.[0]?.message || response.message || "Failed to update footer.");
    }
  }

  if (homepageLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div><Toaster
        position="bottom-right"
        reverseOrder={false}
      /></div>
      <div className="p-8">
        <main className="p-8">
          <div className="max-w-5xl">

                <h1 className="text-4xl font-bold mb-8">
                  Footer
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="bg-black/5 rounded-xl shadow p-6">

                    <h2 className="text-lg font-semibold mb-5">
                      Footer Logo
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-6">

                      {footer.logo ? (
                        <img
                          src={footer.logo}
                          alt="Footer Logo"
                          className="w-40 h-40 rounded-lg border object-contain bg-white"
                        />
                      ) : (
                        <div className="w-40 h-40 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                          No Logo
                        </div>
                      )}

                      <div>

                        <button
                          type="button"
                          onClick={() => fileInputRef.current.click()}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                        >
                          Upload Logo
                        </button>

                        <p className="text-sm text-gray-500 mt-3">
                          PNG, SVG or JPG recommended.
                        </p>

                      </div>

                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/svg+xml,.jpg,.jpeg,.png,.svg"
                      className="hidden"
                      onChange={handleFileChange}
                    />

                  </div>

                  <div className="bg-black/5 rounded-xl shadow p-6">

                    <h2 className="text-lg font-semibold mb-5">
                      Footer Content
                    </h2>

                    <div className="space-y-5">

                      <div>

                        <label className="block font-medium mb-2">
                          Address
                        </label>

                        <textarea
                          rows={3}
                          value={footer.address}
                          onChange={(e) =>
                            setFooter({
                              ...footer,
                              address: e.target.value,
                            })
                          }
                          className="w-full border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                        />

                      </div>

                      <div>

                        <label className="block font-medium mb-2">
                          Logo Description
                        </label>

                        <textarea
                          rows={3}
                          value={footer.logoBelowText}
                          onChange={(e) =>
                            setFooter({
                              ...footer,
                              logoBelowText: e.target.value,
                            })
                          }
                          className="w-full border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                        />

                      </div>

                    </div>

                  </div>

                  <div className="bg-black/5 rounded-xl shadow p-6">

                    <h2 className="text-lg font-semibold mb-5">
                      Social Media Links
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">

                      <div>
                        <label className="block font-medium mb-2">
                          Facebook
                        </label>

                        <input
                          type="text"
                          value={footer.facebookLink}
                          onChange={(e) =>
                            setFooter({
                              ...footer,
                              facebookLink: e.target.value,
                            })
                          }
                          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block font-medium mb-2">
                          Twitter / X
                        </label>

                        <input
                          type="text"
                          value={footer.twitterLink}
                          onChange={(e) =>
                            setFooter({
                              ...footer,
                              twitterLink: e.target.value,
                            })
                          }
                          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block font-medium mb-2">
                          YouTube
                        </label>

                        <input
                          type="text"
                          value={footer.youtubeLink}
                          onChange={(e) =>
                            setFooter({
                              ...footer,
                              youtubeLink: e.target.value,
                            })
                          }
                          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block font-medium mb-2">
                          Instagram
                        </label>

                        <input
                          type="text"
                          value={footer.instagramLink}
                          onChange={(e) =>
                            setFooter({
                              ...footer,
                              instagramLink: e.target.value,
                            })
                          }
                          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                    </div>

                  </div>

                  <div className="flex justify-end">

                    <button
                      type="submit"
                      disabled={updateLoading}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition disabled:opacity-50"
                    >
                      {updateLoading
                        ? "Saving..."
                        : "Save Changes"}
                    </button>

                  </div>

                </form>

          </div>
        </main>
      </div>
    </>
  )
}

export default Footer