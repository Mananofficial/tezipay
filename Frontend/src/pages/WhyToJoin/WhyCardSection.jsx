import SummernoteEditor from '../../components/SummernoteEditor';
import Swal from 'sweetalert2';
import React, { useEffect, useState } from "react";
import { usePages } from "../../hooks/usePages";
import { toast, Toaster } from "react-hot-toast";

const WhyCardSection = () => {
    const { pageData, loading, handleChangePageData } = usePages("why-to-join");

    const [sectionData, setSectionData] = useState({
        title: "",
        subtitle: "",
        description: "",
        cards: [
            {
                title: "",
                description: "",
            },
        ],
    });

    useEffect(() => {
        if (pageData?.sections?.[0]) {
            setSectionData({
                title: pageData.sections[0].title || "",
                subtitle: pageData.sections[0].subtitle || "",
                description: pageData.sections[0].description || "",
                cards: pageData.sections[0].cards?.length
                    ? pageData.sections[0].cards
                    : [
                        {
                            title: "",
                            description: "",
                        },
                    ],
            });
        }
    }, [pageData]);

    const addCard = () => {
        setSectionData((prev) => ({
            ...prev,
            cards: [
                ...prev.cards,
                {
                    title: "",
                    description: "",
                },
            ],
        }));
    };

    const removeCard = async (index) => {
        if (sectionData.cards.length === 1) {
            toast.error("At least one card is required.");
            return;
        }

        const confirmDelete = await Swal.fire({
            title: "Delete Card?",
            text: "Are you sure you want to delete this card?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "Cancel",
            reverseButtons: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
        });
        if (!confirmDelete.isConfirmed) return;


        setSectionData((prev) => ({
            ...prev,
            cards: prev.cards.filter((_, i) => i !== index),
        }));
    };

    const updateCard = (index, field, value) => {
        setSectionData((prev) => ({
            ...prev,
            cards: prev.cards.map((card, i) =>
                i === index
                    ? {
                        ...card,
                        [field]: value,
                    }
                    : card
            ),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
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


        const result = await handleChangePageData("why-to-join", {
            sections: [sectionData],
        });

        if (result.success) {
            toast.success("Card section updated successfully!");
        } else {
            toast.error(
                "An error occurred while updating the card section."
            );
        }
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />

            <main className="py-10 md:py-14">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold">
                            Card Section
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage the card section displayed on the Why To Join page.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                Section Content
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-medium mb-2">
                                        Title
                                    </label>

                                    <SummernoteEditor 
                                        placeholder="Enter section title"
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
                                    <label className="block font-medium mb-2">
                                        Subtitle
                                    </label>

                                    <SummernoteEditor 
                                        placeholder="Enter section subtitle"
                                        value={sectionData.subtitle}
                                        onChange={(val) => setSectionData((prev) => ({
                                                ...prev,
                                                subtitle: val,
                                            }))
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
                                        placeholder="Enter section description"
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

                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-2xl font-semibold">
                                        Cards
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {sectionData.cards.length}{" "}
                                        {sectionData.cards.length === 1
                                            ? "Card"
                                            : "Cards"}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={addCard}
                                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-medium transition"
                                >
                                    + Add Card
                                </button>
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                {sectionData.cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6"
                                    >
                                        <div className="flex items-center justify-between gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                                                    {index + 1}
                                                </div>

                                                <h3 className="text-lg font-semibold">
                                                    Card {index + 1}
                                                </h3>
                                            </div>

                                            {sectionData.cards.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeCard(index)
                                                    }
                                                    className="px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white font-medium transition"
                                                >
                                                    Delete
                                                </button>
                                            )}
                                        </div>

                                        <div className="space-y-5">
                                            <div>
                                                <label className="block font-medium mb-2">
                                                    Card Title
                                                </label>

                                                <SummernoteEditor 
                                                    placeholder="Enter card title"
                                                    value={card.title || ""}
                                                    onChange={(val) => updateCard(
                                                            index,
                                                            "title", val)
                                                    }
                                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                 />
                                            </div>

                                            <div>
                                                <label className="block font-medium mb-2">
                                                    Card Description
                                                </label>

                                                <SummernoteEditor 
                                                    rows={5}
                                                    placeholder="Enter card description"
                                                    value={card.description || ""}
                                                    onChange={(val) => updateCard(
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

export default WhyCardSection;