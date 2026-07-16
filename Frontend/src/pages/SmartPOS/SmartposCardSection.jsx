import React, { useState, useEffect } from 'react'
import { usePages } from '../../hooks/usePages';
import { toast, Toaster } from 'react-hot-toast';
import { useAdminCustom } from '../../hooks/useAdminCustom';

const SmartposCardSection = () => {
    const { pageData, loading, handleChangePageData } = usePages("smart-pos");
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


    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleChangePageData("smart-pos", {sections: [sectionData]});

        if (result.success) {
            toast.success("Card section updated successfully!");
        }
        else {
            toast.error('An error occurred while updating the card section.');
        }
    }

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <main className='flex items-center justify-center h-screen bg-(--primaryBackground)'>
                <h1 className="text-3xl font-bold">Card Section</h1>
                <form onSubmit={handleSubmit} action="">
                    <input
                        type="text"
                        placeholder="Title"
                        value={sectionData.title}
                        onChange={(e) => setSectionData({ ...sectionData, title: e.target.value })}
                    />

                    <textarea
                        placeholder="Description"
                        value={sectionData.description}
                        onChange={(e) => setSectionData({ ...sectionData, description: e.target.value })}
                    />

                    {sectionData?.cards.map((card, index) => (
                        <div key={index} className="card">
                            <input
                                type="text"
                                placeholder="Card Number"
                                value={card.number}
                                onChange={(e) => {
                                    const newCards = [...sectionData.cards];
                                    newCards[index].number = e.target.value;
                                    setSectionData({ ...sectionData, cards: newCards });
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Card Title"
                                value={card.title}
                                onChange={(e) => {
                                    const newCards = [...sectionData.cards];
                                    newCards[index].title = e.target.value;
                                    setSectionData({ ...sectionData, cards: newCards });
                                }}
                            />
                            <textarea
                                placeholder="Card Description"
                                value={card.description}
                                onChange={(e) => {
                                    const newCards = [...sectionData.cards];
                                    newCards[index].description = e.target.value;
                                    setSectionData({ ...sectionData, cards: newCards });
                                }}
                            />
                        </div>
                    ))}
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        {loading ? "Updating..." : "Update Card Section"}
                    </button>
                </form>
            </main>
        </>
    )
}

export default SmartposCardSection