import React, { useState, useEffect, useRef } from 'react'
import { useHomepage } from '../..//hooks/useHomepage'
import { useAdminCustom } from '../../hooks/useAdminCustom'
import { resolveImageUrl } from '../../utils/resolveImageUrl'
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const Blueprint = () => {
  const { homepageData, loading: homepageLoading } = useHomepage();
  const { loading: updateLoading, handleUpdate, handleImageUpload } = useAdminCustom();
  const fileInputRef = useRef(null);

  const [blueprint, setBlueprint] = useState({
    header: "",
    title: "",
    description: "",
    points: [],
    image: "",
  })

  useEffect(() => {
    if (homepageData?.blueprint) {
      setBlueprint({
        ...homepageData.blueprint,
        image: resolveImageUrl(homepageData.blueprint.image)
      })
    }
  }, [homepageData])

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const result = await handleImageUpload(file);

    if (result.success) {
      setBlueprint(prev => ({
        ...prev,
        image: result.url
      }));
    } else {
      toast.error(result.error?.response?.data?.error || result.error?.message || 'Only JPEG, PNG, and SVG images are allowed.');
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Save Changes?",
      text: "Do you want to save the updated blueprint?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Save",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#6b7280",
    });

    if (!result.isConfirmed) return;

    const response = await handleUpdate({ blueprint });

    if (response.success) {
      toast.success("Blueprint updated successfully!");
    } else {
      toast.error(response.errors?.[0]?.message || response.message || "Failed to update blueprint.");
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
              Blueprint
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="bg-black/5 rounded-xl shadow p-6">

                <h2 className="text-lg font-semibold mb-5">
                  Blueprint Content
                </h2>

                <div className="space-y-5">

                  <div>
                    <label className="block font-medium mb-2">
                      Header
                    </label>

                    <input
                      type="text"
                      value={blueprint.header}
                      onChange={(e) =>
                        setBlueprint({
                          ...blueprint,
                          header: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Section Header"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">
                      Title
                    </label>

                    <textarea
                      rows={3}
                      value={blueprint.title}
                      onChange={(e) =>
                        setBlueprint({
                          ...blueprint,
                          title: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Blueprint Title"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">
                      Description
                    </label>

                    <textarea
                      rows={5}
                      value={blueprint.description}
                      onChange={(e) =>
                        setBlueprint({
                          ...blueprint,
                          description: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Blueprint Description"
                    />
                  </div>

                </div>

              </div>

              <div className="bg-black/5 rounded-xl shadow p-6 w-fit">

                <h2 className="text-lg font-semibold mb-5">
                  Blueprint Image
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-6">

                  {blueprint.image ? (
                    <img
                      src={resolveImageUrl(blueprint.image)}
                      alt="Blueprint"
                      className="w-52 h-52 rounded-lg border object-cover bg-white"
                    />
                  ) : (
                    <div className="w-52 h-52 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}

                  <div>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                    >
                      Upload Blueprint Image
                    </button>

                    <p className="text-sm text-gray-500 mt-3">
                      Recommended size: 800 × 800 px
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


              <div className="flex justify-end">

                <button
                  type="submit"
                  disabled={updateLoading}
                  className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50"
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

export default Blueprint