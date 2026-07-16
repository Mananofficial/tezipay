import React, { useState, useEffect, useRef } from 'react'
import { usePages } from '../../hooks/usePages';
import { useAdminCustom } from '../../hooks/useAdminCustom';
import { toast, Toaster } from 'react-hot-toast';
import { resolveImageUrl } from '../../utils/resolveImageUrl';

const SmartposHeroSection = () => {
    const fileInputRef = useRef(null);
    const { pageData, loading, handleChangePageData } = usePages("smart-pos");
    const { loading: imageLoading, handleImageUpload } = useAdminCustom();
    const [heroData, setHeroData] = useState({
        heading: "",
        subheading: "",
        description: "",
        image: "",
    })
    useEffect(() => {
        if (pageData?.hero) {
            setHeroData(pageData.hero);
        }
    }, [pageData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleChangePageData("smart-pos", { hero: heroData });

        if (result.success) {
            toast.success("Hero section updated successfully!");
        }
        else {
            toast.error('An error occurred while updating the hero section.');
        }
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const result = await handleImageUpload(file);

        if (result.success) {
            setHeroData(prev => ({
                ...prev,
                image: result.url
            }));
        } else {
            toast.error('Only JPEG, PNG, and SVG images are allowed.');
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <main className="py-10 md:py-14">
                <div className="w-full max-w-5xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold">
                            Hero Section
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage the hero content displayed on the Smart POS page.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                Hero Content
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-medium mb-2">
                                        Heading
                                    </label>

                                    <input
                                        type="text"
                                        value={heroData.heading}
                                        onChange={(e) =>
                                            setHeroData({
                                                ...heroData,
                                                heading: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium mb-2">
                                        Subheading
                                    </label>

                                    <input
                                        type="text"
                                        value={heroData.subheading}
                                        onChange={(e) =>
                                            setHeroData({
                                                ...heroData,
                                                subheading: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium mb-2">
                                        Description
                                    </label>

                                    <textarea
                                        rows={6}
                                        value={heroData.description}
                                        onChange={(e) =>
                                            setHeroData({
                                                ...heroData,
                                                description: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                Hero Image
                            </h2>

                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                <img
                                    src={resolveImageUrl(heroData?.image)}
                                    alt="Hero"
                                    className="w-56 h-56 rounded-2xl border border-gray-200 object-cover bg-gray-100"
                                />

                                <div className="flex flex-col items-start">
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current.click()}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
                                    >
                                        Upload Hero Image
                                    </button>

                                    <p className="text-sm text-gray-500 mt-4">
                                        Recommended size: <strong>800 × 800 px</strong>
                                    </p>

                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/jpeg,image/png,image/svg+xml,.jpg,.jpeg,.png,.svg"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default SmartposHeroSection