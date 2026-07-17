import React, { useEffect, useRef, useState } from "react";
import { usePages } from "../../hooks/usePages";
import { useAdminCustom } from "../../hooks/useAdminCustom";
import { toast, Toaster } from "react-hot-toast";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

const AboutHeroSection = () => {
    const fileInputRef = useRef(null);

    const {
        pageData,
        loading,
        handleChangePageData
    } = usePages("about");

    const {
        loading: imageLoading,
        handleImageUpload
    } = useAdminCustom();

    const [heroData, setHeroData] = useState({
        heading: "",
        backgroundImage: "",
    });

    useEffect(() => {
        if (pageData?.hero) {
            setHeroData({
                heading: pageData.hero.heading || "",
                backgroundImage: pageData.hero.backgroundImage || "",
            });
        }
    }, [pageData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleChangePageData("about", {
            hero: heroData,
        });

        if (result.success) {
            toast.success("Hero section updated successfully!");
        } else {
            toast.error("An error occurred while updating the hero section.");
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const result = await handleImageUpload(file);

        if (result.success) {
            setHeroData((prev) => ({
                ...prev,
                backgroundImage: result.url,
            }));

            toast.success("Hero image uploaded successfully!");
        } else {
            toast.error("Only JPEG, PNG, and SVG images are allowed.");
        }

        e.target.value = "";
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
                            Manage the hero content displayed on the About page.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                Hero Content
                            </h2>

                            <div>
                                <label
                                    htmlFor="heading"
                                    className="block font-medium mb-2"
                                >
                                    Heading
                                </label>

                                <input
                                    type="text"
                                    id="heading"
                                    placeholder="Enter hero heading"
                                    value={heroData.heading}
                                    onChange={(e) =>
                                        setHeroData((prev) => ({
                                            ...prev,
                                            heading: e.target.value,
                                        }))
                                    }
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                Hero Background Image
                            </h2>

                            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                                <div className="w-full md:w-auto">
                                    {heroData.backgroundImage ? (
                                        <img
                                            src={resolveImageUrl(
                                                heroData.backgroundImage
                                            )}
                                            alt="Hero Background"
                                            className="w-full md:w-64 h-52 rounded-2xl border border-gray-200 object-cover bg-gray-100"
                                        />
                                    ) : (
                                        <div className="w-full md:w-64 h-52 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                                            <span className="text-sm text-gray-400">
                                                No image uploaded
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col items-start">
                                    <button
                                        type="button"
                                        disabled={imageLoading}
                                        onClick={() =>
                                            fileInputRef.current?.click()
                                        }
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {imageLoading
                                            ? "Uploading..."
                                            : heroData.backgroundImage
                                                ? "Change Background Image"
                                                : "Upload Background Image"}
                                    </button>

                                    <p className="text-sm text-gray-500 mt-4">
                                        Upload a JPEG, PNG, or SVG image.
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Use a high-resolution landscape image for best results.
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
                                disabled={loading || imageLoading}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading
                                    ? "Saving..."
                                    : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default AboutHeroSection;