import React, { useState, useEffect, useRef } from 'react'
import { usePages } from '../../hooks/usePages';
import { useAdminCustom } from '../../hooks/useAdminCustom';
import { resolveImageUrl } from '../../utils/resolveImageUrl';

const SmartposHeroSection = () => {
    const fileInputRef = useRef(null);
    const { pageData, loading, handleChangePageData } = usePages("smart-pos");
    const { loading: imageLoading, handleImageUpload } = useAdminCustom();
    const [heroData, setHeroData] = useState({
        heading: "",
        subheading: "",
        description: "",
        image: "",
    })
    useEffect(() => {
        if (pageData?.hero) {
            setHeroData(pageData.hero);
        }
    }, [pageData]);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const result = await handleImageUpload(file);

        if (result.success) {
            setHeroData(prev => ({
                ...prev,
                image: result.url
            }));
        } else {
            toast.error(result.error?.response?.data?.error || result.error?.message || 'Only JPEG, PNG, and SVG images are allowed.');
        }
    };

    return (
        <main className='flex items-center justify-center h-screen bg-(--primaryBackground)'>
            <h1 className="text-3xl font-bold">Hero Section</h1>
            <form action="">
                <input
                    type="text"
                    value={heroData.heading}
                    onChange={(e) => setHeroData({ ...heroData, heading: e.target.value })}
                />
                <input
                    type="text"
                    value={heroData.subheading}
                    onChange={(e) => setHeroData({ ...heroData, subheading: e.target.value })}
                />
                <textarea
                    value={heroData.description}
                    onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                />
                <div className="bg-black/5 rounded-xl shadow p-6 mt-6 w-full">
                    <h2 className="text-lg font-semibold mb-5">
                        Hero Image
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            src={resolveImageUrl(heroData?.image)}
                            alt=""
                            className="w-52 h-52 rounded-lg border object-cover bg-white"
                        />

                        <div>
                            <button
                                type="button"
                                onClick={() => fileInputRef.current.click()}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                            >
                                Upload Hero Image
                            </button>

                            <p className="text-sm text-gray-500 mt-3">
                                Recommended size: 800 × 800 px
                            </p>
                        </div>
                    </div>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/svg+xml,.jpg,.jpeg,.png,.svg"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
            </form>
        </main>
    )
}

export default SmartposHeroSection