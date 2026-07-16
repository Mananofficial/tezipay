import React, { useState, useEffect } from 'react'
import { usePages } from '../../hooks/usePages';
import { toast, Toaster } from 'react-hot-toast';
import { useAdminCustom } from '../../hooks/useAdminCustom';

const SmartposFeartures = () => {
    const { pageData, loading, handleChangePageData } = usePages("smart-pos");

    const [title, setTitle] = useState("");

    const [leftFeatures, setLeftFeatures] = useState([
        {
            title: "",
            description: "",
        }
    ])
    const [rightFeatures, setRightFeatures] = useState([
        {
            title: "",
            description: "",
        }
    ])

    useEffect(() => {
        if (pageData?.leftFeatures) {
            setLeftFeatures(pageData.leftFeatures);
        }
        if (pageData?.rightFeatures) {
            setRightFeatures(pageData.rightFeatures);
        }
        if (pageData?.title) {
            setTitle(pageData?.title);
        }
    }, [pageData]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleChangePageData("smart-pos", {leftFeatures: leftFeatures});

        if (result.success) {
            toast.success("Left features updated successfully!");
        }
        else {
            toast.error('An error occurred while updating the left features.');
        }

        const response = await handleChangePageData("smart-pos", {rightFeatures: rightFeatures});

        if (response.success) {
            toast.success("Right features updated successfully!");
        }
        else {
            toast.error('An error occurred while updating the right features.');
        }

        const titleResponse = await handleChangePageData("smart-pos", title);

        if (titleResponse.success) {
            toast.success("Title updated successfully!");
        }
        else {
            toast.error('An error occurred while updating the title.');
        }
    }

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <main className='flex items-center justify-center h-screen bg-(--primaryBackground)'>
                <h1 className="text-3xl font-bold">Features</h1>
                <form onSubmit={handleSubmit} action="">
                    <h2 className="text-2xl font-bold">Title</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <h2 className="text-2xl font-bold">Left Features</h2>
                    {leftFeatures.map((feature, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder="Title"
                                value={feature.title}
                                onChange={(e) => {
                                    const newFeatures = [...leftFeatures];
                                    newFeatures[index].title = e.target.value;
                                    setLeftFeatures(newFeatures);
                                }}
                            />
                            <textarea
                                placeholder="Description"
                                value={feature.description}
                                onChange={(e) => {
                                    const newFeatures = [...leftFeatures];
                                    newFeatures[index].description = e.target.value;
                                    setLeftFeatures(newFeatures);
                                }}
                            />
                        </div>
                    ))}
                    <h2 className="text-2xl font-bold">Right Features</h2>
                    {rightFeatures.map((feature, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder="Title"
                                value={feature.title}
                                onChange={(e) => {
                                    const newFeatures = [...rightFeatures];
                                    newFeatures[index].title = e.target.value;
                                    setRightFeatures(newFeatures);
                                }}
                            />
                            <textarea
                                placeholder="Description"
                                value={feature.description}
                                onChange={(e) => {
                                    const newFeatures = [...rightFeatures];
                                    newFeatures[index].description = e.target.value;
                                    setRightFeatures(newFeatures);
                                }}
                            />
                        </div>
                    ))}
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        {loading ? "Updating..." : "Update Features"}
                    </button>
                </form>
            </main>
        </>
    )
}

export default SmartposFeartures