import React, { useEffect, useState } from "react";
import { usePages } from "../../hooks/usePages";
import { toast, Toaster } from "react-hot-toast";

const WhyCta = () => {
    const { pageData, loading, handleChangePageData } = usePages("why-to-join");

    const [ctaData, setCtaData] = useState({
        heading: "",
        description: "",
    });

    useEffect(() => {
        if (pageData?.cta) {
            setCtaData({
                heading: pageData.cta.heading || "",
                description: pageData.cta.description || "",
            });
        }
    }, [pageData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleChangePageData("why-to-join", {
            cta: ctaData,
        });

        if (result.success) {
            toast.success("CTA section updated successfully!");
        } else {
            toast.error(
                "An error occurred while updating the CTA section."
            );
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />

            <main className="py-10 md:py-14">
                <div className="w-full max-w-5xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold">
                            CTA Section
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage the call-to-action content displayed on the Why To Join page.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                CTA Content
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="cta-heading"
                                        className="block font-medium mb-2"
                                    >
                                        Heading
                                    </label>

                                    <input
                                        id="cta-heading"
                                        type="text"
                                        placeholder="Enter CTA heading"
                                        value={ctaData.heading}
                                        onChange={(e) =>
                                            setCtaData((prev) => ({
                                                ...prev,
                                                heading: e.target.value,
                                            }))
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="cta-description"
                                        className="block font-medium mb-2"
                                    >
                                        Description
                                    </label>

                                    <textarea
                                        id="cta-description"
                                        rows={6}
                                        placeholder="Enter CTA description"
                                        value={ctaData.description}
                                        onChange={(e) =>
                                            setCtaData((prev) => ({
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

export default WhyCta;