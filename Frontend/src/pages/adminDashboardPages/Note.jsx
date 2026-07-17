import SummernoteEditor from '../../components/SummernoteEditor';
import React, { useState, useEffect } from "react";
import { useHomepage } from "../../hooks/useHomepage";
import { useAdminCustom } from "../../hooks/useAdminCustom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

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

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Save Changes?",
      text: "Do you want to save the updated note?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Save",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#6b7280",
    });

    if (!result.isConfirmed) return;

    const response = await handleUpdate({ note });

    if (response.success) {
      toast.success("Note updated successfully!");
    } else {
      toast.error(response.errors?.[0]?.message || response.message || "Failed to update note.");
    }
  }

  if (homepageLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div><Toaster
        position="bottom-right"
        reverseOrder={false}
      /></div>
      <div className="p-8">
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

                        <SummernoteEditor
                          id="note"
                          rows={6}
                          placeholder="Enter your note..."
                          value={note.note}
                          onChange={(val) =>
                            setNote({
                              ...note,
                              note: val,
                            })
                          }
                          className="w-full border rounded-lg p-4"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact"
                          className="block font-medium mb-2"
                        >
                          Contact Information
                        </label>

                        <SummernoteEditor
                          id="contact"
                          rows={3}
                          placeholder="Email, phone number, address..."
                          value={note.contact}
                          onChange={(val) =>
                            setNote({
                              ...note,
                              contact: val,
                            })
                          }
                          className="w-full border rounded-lg p-4"
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
      </div>
    </>
  );
};

export default Note;