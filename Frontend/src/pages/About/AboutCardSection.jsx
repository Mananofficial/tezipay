import React, { useState, useEffect } from "react";
import { usePages } from "../../hooks/usePages";
import { toast, Toaster } from "react-hot-toast";

const AboutCardSection = () => {
    const { pageData, loading, handleChangePageData } = usePages("about");

    const [sectionData, setSectionData] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        if (pageData?.sections?.[0]) {
            setSectionData({
                title: pageData.sections[0].title || "",
                description: pageData.sections[0].description || "",
            });
        }
    }, [pageData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleChangePageData("about", {
            sections: [sectionData],
        });

        if (result.success) {
            toast.success("Card section updated successfully!");
        } else {
            toast.error("An error occurred while updating the card section.");
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />

            <main className="py-10 md:py-14">
                <div className="w-full max-w-5xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold">
                            Card Section
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage the card section content displayed on the About page.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                Card Content
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block font-medium mb-2"
                                    >
                                        Title
                                    </label>

                                    <input
                                        type="text"
                                        id="title"
                                        placeholder="Enter card section title"
                                        value={sectionData.title}
                                        onChange={(e) =>
                                            setSectionData((prev) => ({
                                                ...prev,
                                                title: e.target.value,
                                            }))
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block font-medium mb-2"
                                    >
                                        Description
                                    </label>

                                    <textarea
                                        id="description"
                                        rows={6}
                                        placeholder="Enter card section description"
                                        value={sectionData.description}
                                        onChange={(e) =>
                                            setSectionData((prev) => ({
                                                ...prev,
                                                description: e.target.value,
                                            }))
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
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
    );
};

export default AboutCardSection;