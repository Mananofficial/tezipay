import SummernoteEditor from '../../components/SummernoteEditor';
import Swal from 'sweetalert2';
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

        
        if (!sectionData.title || sectionData.title.replace(/<[^>]*>/g, '').trim() === '') {
            toast.error("Title is required.");
            return;
        }
        if (sectionData.description !== undefined && (!sectionData.description || sectionData.description.replace(/<[^>]*>/g, '').trim() === '')) {
            toast.error("Description is required.");
            return;
        }
        if (sectionData.subtitle !== undefined && (!sectionData.subtitle || sectionData.subtitle.replace(/<[^>]*>/g, '').trim() === '')) {
            toast.error("Subtitle is required.");
            return;
        }
        if (sectionData.cards) {
            for (let i = 0; i < sectionData.cards.length; i++) {
                const card = sectionData.cards[i];
                if (!card.number || card.number.replace(/<[^>]*>/g, '').trim() === '') {
                    toast.error(`Card ${i + 1} Number is required.`);
                    return;
                }
                if (!card.title || card.title.replace(/<[^>]*>/g, '').trim() === '') {
                    toast.error(`Card ${i + 1} Title is required.`);
                    return;
                }
                if (!card.description || card.description.replace(/<[^>]*>/g, '').trim() === '') {
                    toast.error(`Card ${i + 1} Description is required.`);
                    return;
                }
            }
        }

        
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

                                    <SummernoteEditor 
                                        id="title"
                                        placeholder="Enter card section title"
                                        value={sectionData.title}
                                        onChange={(val) => setSectionData((prev) => ({
                                                ...prev,
                                                title: val,
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

                                    <SummernoteEditor 
                                        id="description"
                                        rows={6}
                                        placeholder="Enter card section description"
                                        value={sectionData.description}
                                        onChange={(val) => setSectionData((prev) => ({
                                                ...prev,
                                                description: val,
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