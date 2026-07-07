import React, { useState, useEffect } from "react";
import { useHomepage } from "../../hooks/useHomepage";
import { useAdminCustom } from "../../hooks/useAdminCustom";

const HeroBelow = () => {
  const { homepageData, loading: homepageLoading } = useHomepage();
  const { loading: updateLoading, handleUpdate } = useAdminCustom();

  const [heroBelowSection, setHeroBelowSection] = useState({
    title: "",
    subtitle: "",
  });

  useEffect(() => {
    if (homepageData?.heroBelowSection) {
      setHeroBelowSection(homepageData.heroBelowSection);
    }
  }, [homepageData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleUpdate({ heroBelowSection });

    if (result.success) {
      alert("Hero Below Section updated successfully!");
    } else {
      alert("Failed to update Hero Below Section.");
    }
  };

  if (homepageLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-(--primaryBackground)">
        <div className="rounded-full h-20 w-20 bg-(--primary) animate-ping"></div>
      </div>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Hero Below Section
      </h1>

      <form onSubmit={handleSubmit} className="max-w-5xl space-y-6" >
        <div className="bg-black/5 rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-6">
            Section Content
          </h2>

          <div className="space-y-6">

            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium mb-2"
              >
                Title
              </label>

              <textarea
                id="title"
                rows={3}
                placeholder="Enter section title..."
                value={heroBelowSection.title}
                onChange={(e) =>
                  setHeroBelowSection({
                    ...heroBelowSection,
                    title: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="subtitle"
                className="block text-lg font-medium mb-2"
              >
                Subtitle
              </label>

              <textarea
                id="subtitle"
                rows={5}
                placeholder="Enter section subtitle..."
                value={heroBelowSection.subtitle}
                onChange={(e) =>
                  setHeroBelowSection({
                    ...heroBelowSection,
                    subtitle: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={updateLoading}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {updateLoading
              ? "Saving..."
              : "Save Changes"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default HeroBelow;