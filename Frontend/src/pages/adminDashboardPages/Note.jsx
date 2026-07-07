import React, { useState, useEffect } from "react";
import { useHomepage } from "../../hooks/useHomepage";
import { useAdminCustom } from "../../hooks/useAdminCustom";

const Note = () => {
  const { homepageData, loading: homepageLoading } = useHomepage();
  const { loading: updateLoading, handleUpdate } = useAdminCustom();

  const [note, setNote] = useState({
    note: "",
    contact: "",
  });

  useEffect(() => {
    if (homepageData?.note) {
      setNote(homepageData.note);
    }
  }, [homepageData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleUpdate({ note });

    if (result.success) {
      alert("Note updated successfully!");
    } else {
      alert("Failed to update Note.");
    }
  };

  if (homepageLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <main className="p-8">
      <div className="max-w-5xl">

        <h1 className="text-4xl font-bold mb-8">
          Note
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="bg-black/5 rounded-xl shadow p-6">

            <h2 className="text-lg font-semibold mb-6">
              Note Content
            </h2>

            <div className="space-y-6">

              <div>
                <label
                  htmlFor="note"
                  className="block font-medium mb-2"
                >
                  Note
                </label>

                <textarea
                  id="note"
                  rows={6}
                  placeholder="Enter your note..."
                  value={note.note}
                  onChange={(e) =>
                    setNote({
                      ...note,
                      note: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg p-4 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block font-medium mb-2"
                >
                  Contact Information
                </label>

                <textarea
                  id="contact"
                  rows={3}
                  placeholder="Email, phone number, address..."
                  value={note.contact}
                  onChange={(e) =>
                    setNote({
                      ...note,
                      contact: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg p-4 resize-none outline-none focus:ring-2 focus:ring-blue-500"
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

      </div>
    </main>
  );
};

export default Note;