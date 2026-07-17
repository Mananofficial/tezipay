import SummernoteEditor from '../../components/SummernoteEditor';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react'
import { usePages } from '../../hooks/usePages';
import { toast, Toaster } from 'react-hot-toast';
import { useAdminCustom } from '../../hooks/useAdminCustom';

const BookkeepingCardSection = () => {
    const { pageData, loading, handleChangePageData } = usePages("book-keeping");
    const [sectionData, setSectionData] = useState({
        title: "",
        description: "",
        cards: [
            {
                number: "",
                title: "",
                description: "",
                active: "",
            }
        ]
    })

    useEffect(() => {
        if (pageData?.sections[0]) {
            setSectionData(pageData.sections[0]);
        }
    }, [pageData]);

    const addCard = () => {
        setSectionData((prev) => ({
            ...prev,
            cards: [
                ...prev.cards,
                {
                    number: "",
                    title: "",
                    description: "",
                    active: true,
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


        const result = await handleChangePageData("book-keeping", { sections: [sectionData] });

        if (result.success) {
            toast.success("Card section updated successfully!");
        }
        else {
            toast.error('An error occurred while updating the card section.');
        }
    }

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            <main className='py-10 md:py-14 px-4 md:px-6 bg-(--primaryBackground) min-h-screen'>
                <div className="w-full max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold">Card Section</h1>
                        <p className="text-gray-500 mt-2">
                            Manage the Smart POS cards displayed on the website.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                Section Details
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-medium mb-2">
                                        Title
                                    </label>

                                    <SummernoteEditor 
                                        placeholder="Enter section title"
                                        value={sectionData.title}
                                        onChange={(val) => setSectionData({
                                                ...sectionData,
                                                title: val,
                                            })
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
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
                                        onChange={(val) => setSectionData({
                                                ...sectionData,
                                                description: val,
                                            })
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                                     />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-semibold">
                                        Cards
                                    </h2>

                                    <p className="text-gray-500 text-sm mt-1">
                                        {sectionData.cards.length} Cards
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={addCard}
                                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl transition font-medium"
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
                                        <div className="flex items-center justify-between mb-6">

                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                                                    {index + 1}
                                                </div>

                                                <h3 className="text-lg font-semibold">
                                                    Card {index + 1}
                                                </h3>
                                            </div>

                                            {sectionData.cards.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeCard(index)}
                                                    className="px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                                                >
                                                    Delete
                                                </button>
                                            )}

                                        </div>

                                        <div className="space-y-5">
                                            <div>
                                                <label className="block font-medium mb-2">
                                                    Number
                                                </label>

                                                <SummernoteEditor 
                                                    value={card.number}
                                                    onChange={(val) => {
                                                        const cards = [...sectionData.cards];
                                                        cards[index].number = val;

                                                        setSectionData({
                                                            ...sectionData,
                                                            cards,
                                                        });
                                                    }}
                                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                                                 />
                                            </div>

                                            <div>
                                                <label className="block font-medium mb-2">
                                                    Title
                                                </label>

                                                <SummernoteEditor 
                                                    value={card.title}
                                                    onChange={(val) => {
                                                        const cards = [...sectionData.cards];
                                                        cards[index].title = val;

                                                        setSectionData({
                                                            ...sectionData,
                                                            cards,
                                                        });
                                                    }}
                                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                                                 />
                                            </div>

                                            <div>
                                                <label className="block font-medium mb-2">
                                                    Description
                                                </label>

                                                <SummernoteEditor 
                                                    rows={4}
                                                    value={card.description}
                                                    onChange={(val) => {
                                                        const cards = [...sectionData.cards];
                                                        cards[index].description = val;

                                                        setSectionData({
                                                            ...sectionData,
                                                            cards,
                                                        });
                                                    }}
                                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                                                 />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
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

export default BookkeepingCardSection