import SummernoteEditor from '../../components/SummernoteEditor';
import React, { useState, useEffect, useRef } from 'react'
import { useHomepage } from '../..//hooks/useHomepage'
import { useAdminCustom } from '../../hooks/useAdminCustom'
import { resolveImageUrl } from '../../utils/resolveImageUrl'
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const HeroSection = () => {
  const { homepageData, loading: homepageLoading } = useHomepage();
  const { loading: updateLoading, handleUpdate, handleImageUpload } = useAdminCustom();
  const fileInputRef = useRef(null);

  const [heroSection, setHeroSection] = useState({
    heading: "",
    subheading: "",
    leftButton: {
      text: "",
      url: ""
    },
    rightButton: {
      text: "",
      url: ""
    },
    rightImage: ""
  })

  useEffect(() => {
    if (homepageData?.heroSection) {
      setHeroSection({
        ...homepageData.heroSection,
        rightImage: resolveImageUrl(homepageData.heroSection.rightImage)
      })
    }
  }, [homepageData])

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const result = await handleImageUpload(file);

    if (result.success) {
      setHeroSection(prev => ({
        ...prev,
        rightImage: result.url
      }));
    } else {
      toast.error(result.error?.response?.data?.error || result.error?.message || 'Only JPEG, PNG, and SVG images are allowed.');
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Save Changes?",
      text: "Do you want to save the updated hero section?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Save",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#6b7280",
    });

    if (!result.isConfirmed) return;

    const response = await handleUpdate({ heroSection });

    if (response.success) {
      toast.success("Hero Section updated successfully!");
    } else {
      toast.error(response.errors?.[0]?.message || response.message || "Failed to update Hero Section.");
    }
  }

  if (homepageLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="p-8">
        <main>
          <div className="flex flex-col w-full justify-start items-start gap-6">
            <h1 className="text-4xl font-bold">Hero Section</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full justify-start items-start mt-4 max-w-5xl">
              <div className="bg-black/5 rounded-xl shadow p-6 w-full">
                <h2 className="text-lg font-semibold mb-5"> Hero Content </h2>
                <div className="space-y-5">
                  <div>
                    <label className="font-medium"> Heading </label>
                    <SummernoteEditor
                      rows={3}
                      value={heroSection.heading}
                      onChange={(val) => setHeroSection({ ...heroSection, heading: val })}
                      className="mt-2 w-full border rounded-lg p-3"
                    />
                  </div>

                  <div>
                    <label className="font-medium">
                      Subheading
                    </label>

                    <SummernoteEditor
                      rows={5}
                      value={heroSection.subheading}
                      onChange={(val) => setHeroSection({ ...heroSection, subheading: val })}
                      className="mt-2 w-full border rounded-lg p-3"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6 w-full">
                <div className="bg-black/5 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-5">
                    Left Button
                  </h2>

                  <div className="space-y-4">
                    <input
                      className="w-full border rounded-lg p-3"
                      placeholder="Button Text"
                      minLength={1}
                      maxLength={100}
                      value={heroSection.leftButton.text}
                      onChange={(e) =>
                        setHeroSection({
                          ...heroSection,
                          leftButton: {
                            ...heroSection.leftButton,
                            text: e.target.value
                          }
                        })
                      }
                      required
                    />

                    <input
                      className="w-full border rounded-lg p-3"
                      placeholder="Button URL"
                      minLength={1}
                      maxLength={255}
                      value={heroSection.leftButton.url}
                      onChange={(e) =>
                        setHeroSection({
                          ...heroSection,
                          leftButton: {
                            ...heroSection.leftButton,
                            url: e.target.value
                          }
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="bg-black/5 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-5">
                    Right Button
                  </h2>
                  <div className="space-y-4">
                    <input
                      className="w-full border rounded-lg p-3"
                      placeholder="Button Text"
                      minLength={1}
                      maxLength={100}
                      value={heroSection.rightButton.text}
                      onChange={(e) =>
                        setHeroSection({
                          ...heroSection,
                          rightButton: {
                            ...heroSection.rightButton,
                            text: e.target.value
                          }
                        })
                      }
                      required
                    />
                    <input
                      className="w-full border rounded-lg p-3"
                      placeholder="Button URL"
                      minLength={1}
                      maxLength={255}
                      value={heroSection.rightButton.url}
                      onChange={(e) =>
                        setHeroSection({
                          ...heroSection,
                          rightButton: {
                            ...heroSection.rightButton,
                            url: e.target.value
                          }
                        })
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-black/5 rounded-xl shadow p-6 mt-6 w-full">
                <h2 className="text-lg font-semibold mb-5">
                  Hero Image
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={resolveImageUrl(heroSection.rightImage)}
                    alt=""
                    className="w-52 h-52 rounded-lg border object-cover bg-white"
                  />

                  <div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                    >
                      Upload Hero Image
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

              <div className="flex justify-end mt-8 w-full">
                <button
                  disabled={updateLoading}
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
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

export default HeroSection
