import React, { useState, useEffect, useRef } from 'react'
import { usePages } from '../../hooks/usePages';
import { useAdminCustom } from '../../hooks/useAdminCustom';
import { toast, Toaster } from 'react-hot-toast';

const SmartposCta = () => {
    const fileInputRef = useRef(null);
    const { pageData, loading, handleChangePageData } = usePages("smart-pos");
    const { loading: imageLoading, handleImageUpload } = useAdminCustom();
    const [ctaData, setCtaData] = useState({
        heading: "",
        description: "",
    })
    useEffect(() => {
        if (pageData?.cta) {
            setCtaData(pageData.cta);
        }
    }, [pageData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const result = await handleChangePageData("smart-pos", { cta: ctaData });
        
        if (result.success) {
            toast.success("CTA section updated successfully!");
        }
        else {
            toast.error('An error occurred while updating the CTA section.');
        }
    }

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <main className='flex items-center justify-center h-screen bg-(--primaryBackground)'>
                <h1 className="text-3xl font-bold">Hero Section</h1>
                <form onSubmit={handleSubmit} action="">
                    <input
                        type="text"
                        placeholder="Heading"
                        value={ctaData.heading}
                        onChange={(e) => setCtaData({ ...ctaData, heading: e.target.value })}
                    />
                    <textarea
                        placeholder="Description"
                        value={ctaData.description}
                        onChange={(e) => setCtaData({ ...ctaData, description: e.target.value })}
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">
                        {loading ? "Updating..." : "Update CTA Section"}
                    </button>
                </form>
            </main>
        </>
    )
}

export default SmartposCta