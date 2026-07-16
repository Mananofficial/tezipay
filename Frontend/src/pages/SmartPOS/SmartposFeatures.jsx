import React, { useState, useEffect } from 'react'
import { usePages } from '../../hooks/usePages';
import { toast, Toaster } from 'react-hot-toast';
import { useAdminCustom } from '../../hooks/useAdminCustom';

const SmartposFeatures = () => {
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

    const addLeftFeature = () => {
        setLeftFeatures((prev) => [
            ...prev,
            {
                title: "",
                description: "",
            },
        ]);
    };

    const removeLeftFeature = (index) => {
        if (leftFeatures.length === 1) {
            toast.error("At least one left feature is required.");
            return;
        }

        setLeftFeatures((prev) => prev.filter((_, i) => i !== index));
    };

    const addRightFeature = () => {
        setRightFeatures((prev) => [
            ...prev,
            {
                title: "",
                description: "",
            },
        ]);
    };

    const removeRightFeature = (index) => {
        if (rightFeatures.length === 1) {
            toast.error("At least one right feature is required.");
            return;
        }

        setRightFeatures((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleChangePageData("smart-pos", { leftFeatures: leftFeatures });

        const response = await handleChangePageData("smart-pos", { rightFeatures: rightFeatures });

        const titleResponse = await handleChangePageData("smart-pos", title);

        if (titleResponse.success && result.success && response.success) {
            toast.success("All features updated successfully!");
        }
        else {
            toast.error('An error occurred while updating the features.');
        }
    }

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            <main className="py-10 md:py-14">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold">
                            Features Section
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage the features displayed on the Smart POS page.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                            <h2 className="text-xl font-semibold mb-6">
                                Section Title
                            </h2>

                            <input
                                type="text"
                                placeholder="Enter section title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                            />
                        </div>

                        <div className="grid xl:grid-cols-2 gap-8">

                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold">
                                            Left Features
                                        </h2>

                                        <p className="text-sm text-gray-500 mt-1">
                                            {leftFeatures.length} Features
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={addLeftFeature}
                                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition"
                                    >
                                        + Add Feature
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {leftFeatures.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl border border-gray-200 p-5 bg-gray-50"
                                        >
                                            <div className="flex items-center justify-between mb-4">

                                                <div className="flex items-center gap-3">
                                                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                                                        {index + 1}
                                                    </span>

                                                    <h3 className="font-semibold">
                                                        Feature {index + 1}
                                                    </h3>
                                                </div>

                                                {leftFeatures.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeLeftFeature(index)}
                                                        className="px-3 py-1.5 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                                                    >
                                                        Delete
                                                    </button>
                                                )}

                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block font-medium mb-2">
                                                        Title
                                                    </label>

                                                    <input
                                                        type="text"
                                                        value={feature.title}
                                                        onChange={(e) => {
                                                            const newFeatures = [...leftFeatures];
                                                            newFeatures[index].title = e.target.value;
                                                            setLeftFeatures(newFeatures);
                                                        }}
                                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block font-medium mb-2">
                                                        Description
                                                    </label>

                                                    <textarea
                                                        rows={4}
                                                        value={feature.description}
                                                        onChange={(e) => {
                                                            const newFeatures = [...leftFeatures];
                                                            newFeatures[index].description = e.target.value;
                                                            setLeftFeatures(newFeatures);
                                                        }}
                                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold">
                                            Right Features
                                        </h2>

                                        <p className="text-sm text-gray-500 mt-1">
                                            {rightFeatures.length} Features
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={addRightFeature}
                                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition"
                                    >
                                        + Add Feature
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {rightFeatures.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl border border-gray-200 p-5 bg-gray-50"
                                        >
                                            <div className="flex items-center justify-between mb-4">

                                                <div className="flex items-center gap-3">
                                                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                                                        {index + 1}
                                                    </span>

                                                    <h3 className="font-semibold">
                                                        Feature {index + 1}
                                                    </h3>
                                                </div>

                                                {rightFeatures.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeRightFeature(index)}
                                                        className="px-3 py-1.5 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                                                    >
                                                        Delete
                                                    </button>
                                                )}

                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block font-medium mb-2">
                                                        Title
                                                    </label>

                                                    <input
                                                        type="text"
                                                        value={feature.title}
                                                        onChange={(e) => {
                                                            const newFeatures = [...rightFeatures];
                                                            newFeatures[index].title = e.target.value;
                                                            setRightFeatures(newFeatures);
                                                        }}
                                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block font-medium mb-2">
                                                        Description
                                                    </label>

                                                    <textarea
                                                        rows={4}
                                                        value={feature.description}
                                                        onChange={(e) => {
                                                            const newFeatures = [...rightFeatures];
                                                            newFeatures[index].description = e.target.value;
                                                            setRightFeatures(newFeatures);
                                                        }}
                                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
    )
}

export default SmartposFeatures