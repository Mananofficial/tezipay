import React, { useEffect, useState } from "react";
import { usePages } from "../../hooks/usePages";
import { toast, Toaster } from "react-hot-toast";

const AboutFeatures = () => {
    const { pageData, loading, handleChangePageData } = usePages("about");

    const [leftFeatures, setLeftFeatures] = useState([
        {
            title: "",
            description: "",
        },
    ]);

    const [rightFeatures, setRightFeatures] = useState([
        {
            title: "",
            description: "",
        },
        {
            title: "",
            description: "",
        },
    ]);

    useEffect(() => {
        if (pageData?.leftFeatures?.length) {
            setLeftFeatures(pageData.leftFeatures);
        }

        if (pageData?.rightFeatures?.length) {
            setRightFeatures(pageData.rightFeatures);
        }
    }, [pageData]);

    const updateLeftFeature = (index, field, value) => {
        setLeftFeatures((prev) =>
            prev.map((feature, i) =>
                i === index
                    ? {
                        ...feature,
                        [field]: value,
                    }
                    : feature
            )
        );
    };

    const updateRightFeature = (index, field, value) => {
        setRightFeatures((prev) =>
            prev.map((feature, i) =>
                i === index
                    ? {
                        ...feature,
                        [field]: value,
                    }
                    : feature
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleChangePageData("about", {
            leftFeatures,
            rightFeatures,
        });

        if (result.success) {
            toast.success("Features updated successfully!");
        } else {
            toast.error("An error occurred while updating the features.");
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />

            <main className="py-10 md:py-14">
                <div className="w-full max-w-5xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold">
                            Features Section
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage the features displayed on the About page.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {leftFeatures.map((feature, index) => (
                                <div
                                    key={`left-${index}`}
                                    className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-semibold">
                                            Left Feature {index + 1}
                                        </h2>

                                        <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                                            {index + 1}
                                        </span>
                                    </div>

                                    <div className="space-y-5">
                                        <div>
                                            <label className="block font-medium mb-2">
                                                Title
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Enter feature title"
                                                value={feature.title || ""}
                                                onChange={(e) =>
                                                    updateLeftFeature(
                                                        index,
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-medium mb-2">
                                                Description
                                            </label>

                                            <textarea
                                                rows={5}
                                                placeholder="Enter feature description"
                                                value={feature.description || ""}
                                                onChange={(e) =>
                                                    updateLeftFeature(
                                                        index,
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {rightFeatures.map((feature, index) => (
                                <div
                                    key={`right-${index}`}
                                    className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-semibold">
                                            Right Feature {index + 1}
                                        </h2>

                                        <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                                            {index + 1}
                                        </span>
                                    </div>

                                    <div className="space-y-5">
                                        <div>
                                            <label className="block font-medium mb-2">
                                                Title
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Enter feature title"
                                                value={feature.title || ""}
                                                onChange={(e) =>
                                                    updateRightFeature(
                                                        index,
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-medium mb-2">
                                                Description
                                            </label>

                                            <textarea
                                                rows={5}
                                                placeholder="Enter feature description"
                                                value={feature.description || ""}
                                                onChange={(e) =>
                                                    updateRightFeature(
                                                        index,
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
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
    );
};

export default AboutFeatures;