import SummernoteEditor from '../../components/SummernoteEditor';
import Swal from 'sweetalert2';
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

        // Validation
        for (let i = 0; i < leftFeatures.length; i++) {
            const feature = leftFeatures[i];
            if (!feature.title || feature.title.replace(/<[^>]*>/g, '').trim() === '') {
                toast.error(`Left Feature ${i + 1} Title is required.`);
                return;
            }
            if (feature.description !== undefined && (!feature.description || feature.description.replace(/<[^>]*>/g, '').trim() === '')) {
                toast.error(`Left Feature ${i + 1} Description is required.`);
                return;
            }
        }

        for (let i = 0; i < rightFeatures.length; i++) {
            const feature = rightFeatures[i];
            if (!feature.title || feature.title.replace(/<[^>]*>/g, '').trim() === '') {
                toast.error(`Right Feature ${i + 1} Title is required.`);
                return;
            }
            if (feature.description !== undefined && (!feature.description || feature.description.replace(/<[^>]*>/g, '').trim() === '')) {
                toast.error(`Right Feature ${i + 1} Description is required.`);
                return;
            }
        }

        // Save Confirmation
        const confirmSave = await Swal.fire({
            title: "Save Changes?",
            text: "Do you want to save the changes?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, Save",
            cancelButtonText: "Cancel",
            reverseButtons: true,
            confirmButtonColor: "#2563eb",
            cancelButtonColor: "#6b7280",
        });
        if (!confirmSave.isConfirmed) return;


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

                                            <SummernoteEditor
                                                placeholder="Enter feature title"
                                                value={feature.title || ""}
                                                onChange={(val) => updateLeftFeature(
                                                    index,
                                                    "title", val)
                                                }
                                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-medium mb-2">
                                                Description
                                            </label>

                                            <SummernoteEditor
                                                rows={5}
                                                placeholder="Enter feature description"
                                                value={feature.description || ""}
                                                onChange={(val) => updateLeftFeature(
                                                    index,
                                                    "description", val)
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

                                            <SummernoteEditor
                                                placeholder="Enter feature title"
                                                value={feature.title || ""}
                                                onChange={(val) => updateRightFeature(
                                                    index,
                                                    "title", val)
                                                }
                                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-medium mb-2">
                                                Description
                                            </label>

                                            <SummernoteEditor
                                                rows={5}
                                                placeholder="Enter feature description"
                                                value={feature.description || ""}
                                                onChange={(val) => updateRightFeature(
                                                    index,
                                                    "description", val)
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