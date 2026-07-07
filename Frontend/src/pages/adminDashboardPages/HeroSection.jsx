import React, { useState, useEffect, useRef } from 'react'
import { useHomepage } from '../..//hooks/useHomepage'
import { useAdminCustom } from '../../hooks/useAdminCustom'
import Sidebar from '../../components/Sidebar'
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
      setHeroSection(homepageData.heroSection)
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
      toast.error("Failed to update Hero Section.");
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
      <div className="h-full montserrat-font">
        <div className="grid grid-cols-[250px_1fr]">
          <aside className="bg-black/90 shadow-lg text-white h-screen p-4 flex flex-col gap-4 sticky top-0 left-0 z-50">
            <h1 className='text-2xl font-bold '>Admin Dashboard</h1>
            <Sidebar />
          </aside>
          <div className="flex-1 p-8">
            <main>
              <div className="flex flex-col w-full justify-start items-start gap-6">
                <h1 className="text-4xl font-bold">Hero Section</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full justify-start items-start mt-4 max-w-5xl">
                  <div className="bg-black/5 rounded-xl shadow p-6 w-full">

                    <h2 className="text-lg font-semibold mb-5"> Hero Content </h2>
                    <div className="space-y-5">
                      <div>
                        <label className="font-medium"> Heading </label>

                        <textarea rows={3} value={heroSection.heading} onChange={(e) => setHeroSection({ ...heroSection, heading: e.target.value })} className="mt-2 w-full border rounded-lg p-3 resize-none" />
                      </div>

                      <div>
                        <label className="font-medium">
                          Subheading
                        </label>

                        <textarea rows={5} value={heroSection.subheading} onChange={(e) => setHeroSection({ ...heroSection, subheading: e.target.value })} className="mt-2 w-full border rounded-lg p-3 resize-none" />
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
                        />

                        <input
                          className="w-full border rounded-lg p-3"
                          placeholder="Button URL"
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
                        />
                        <input
                          className="w-full border rounded-lg p-3"
                          placeholder="Button URL"
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
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/5 rounded-xl shadow p-6 mt-6">

                    <h2 className="text-lg font-semibold mb-5">
                      Hero Image
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-6">

                      <img
                        src={heroSection.rightImage}
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
        </div>
      </div>

    </>
  )
}

export default HeroSection