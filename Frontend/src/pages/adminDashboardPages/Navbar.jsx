import React, { useState, useEffect, useRef } from 'react'
import { useHomepage } from '../..//hooks/useHomepage'
import { useAdminCustom } from '../../hooks/useAdminCustom'
import { resolveImageUrl } from '../../utils/resolveImageUrl'
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const AdminNavbar = () => {
  const { homepageData, loading: homepageLoading } = useHomepage();
  const { loading: updateLoading, handleUpdate, handleImageUpload } = useAdminCustom();
  const fileInputRef = useRef(null);
  const faviconInputRef = useRef(null);

  const [navbar, setNavbar] = useState({
    logo: '',
    navDropdown: [],
    navbarLinks: [{ text: '', url: '' }],
  });
  const [favicon, setFavicon] = useState('');

  useEffect(() => {
    if (homepageData?.navbar) {
      setNavbar({
        ...homepageData.navbar,
        logo: resolveImageUrl(homepageData.navbar.logo),
        navDropdown: homepageData.navbar.navDropdown || [],
        navbarLinks: homepageData.navbar.navbarLinks || [],
      });
    }
    if (homepageData?.favicon) {
      setFavicon(resolveImageUrl(homepageData.favicon));
    }
  }, [homepageData]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const result = await handleImageUpload(file);
    if (result.success) {
      setNavbar(prev => ({ ...prev, logo: result.url }));
    } else {
      toast.error(result.error?.response?.data?.error || result.error?.message || 'Only JPEG, PNG, and SVG images are allowed.');
    }
  };

  const handleFaviconFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const result = await handleImageUpload(file);
    if (result.success) {
      setFavicon(result.url);
      toast.success("Favicon uploaded successfully!");
    } else {
      toast.error(result.error?.response?.data?.error || result.error?.message || 'Only JPEG, PNG, SVG and ICO images are allowed.');
    }
  };

  const addNavLink = () => {
    setNavbar(prev => ({ ...prev, navbarLinks: [...prev.navbarLinks, { text: '', url: '' }] }));
  };

  const removeNavLink = async (index) => {
    const result = await Swal.fire({
      title: "Remove Link?",
      text: "Are you sure you want to remove this navbar link?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Remove",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
      focusCancel: true,
    });
    if (!result.isConfirmed) return;
    const newLinks = navbar.navbarLinks.filter((_, i) => i !== index);
    setNavbar(prev => ({ ...prev, navbarLinks: newLinks }));
    toast.success("Navbar link removed!");
  };

  const addDropdownGroup = () => {
    setNavbar(prev => ({
      ...prev,
      navDropdown: [...prev.navDropdown, { text: 'New Dropdown', links: [] }]
    }));
  };

  const removeDropdownGroup = async (dIdx) => {
    const result = await Swal.fire({
      title: "Remove Dropdown?",
      text: "This will remove the entire dropdown group and all its links.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Remove",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
    });
    if (!result.isConfirmed) return;
    setNavbar(prev => ({
      ...prev,
      navDropdown: prev.navDropdown.filter((_, i) => i !== dIdx)
    }));
    toast.success("Dropdown group removed!");
  };

  const updateDropdownTitle = (dIdx, text) => {
    setNavbar(prev => {
      const updated = [...prev.navDropdown];
      updated[dIdx] = { ...updated[dIdx], text };
      return { ...prev, navDropdown: updated };
    });
  };

  const addDropdownLink = (dIdx) => {
    setNavbar(prev => {
      const updated = [...prev.navDropdown];
      updated[dIdx] = { ...updated[dIdx], links: [...(updated[dIdx].links || []), { text: '', url: '' }] };
      return { ...prev, navDropdown: updated };
    });
  };

  const removeDropdownLink = async (dIdx, lIdx) => {
    const result = await Swal.fire({
      title: "Remove Link?",
      text: "Remove this dropdown link?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
    });
    if (!result.isConfirmed) return;
    setNavbar(prev => {
      const updated = [...prev.navDropdown];
      updated[dIdx] = { ...updated[dIdx], links: updated[dIdx].links.filter((_, i) => i !== lIdx) };
      return { ...prev, navDropdown: updated };
    });
    toast.success("Link removed!");
  };

  const updateDropdownLink = (dIdx, lIdx, field, value) => {
    setNavbar(prev => {
      const updated = [...prev.navDropdown];
      const updatedLinks = [...updated[dIdx].links];
      updatedLinks[lIdx] = { ...updatedLinks[lIdx], [field]: value };
      updated[dIdx] = { ...updated[dIdx], links: updatedLinks };
      return { ...prev, navDropdown: updated };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await Swal.fire({
      title: "Save Changes?",
      text: "Do you want to save the updated navbar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Save",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#6b7280",
    });
    if (!result.isConfirmed) return;
    const response = await handleUpdate({ navbar, favicon });
    if (response.success) {
      toast.success("Navbar updated successfully!");
    } else {
      toast.error(response.errors?.[0]?.message || response.message || "Failed to update navbar.");
    }
  }

  if (homepageLoading) return <div className="p-8">Loading...</div>;

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="p-8">
        <main>
          <div className="flex flex-col justify-start items-start gap-6">
            <h1 className="text-4xl font-bold">Navbar</h1>

            <form onSubmit={handleSubmit} className="max-w-4xl flex flex-col gap-8 w-full">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="bg-black/6 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-5">Website Logo</h2>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img src={resolveImageUrl(navbar.logo)} alt="Logo" className="w-36 h-36 object-contain rounded-lg border bg-gray-50" />
                    <div>
                      <button type="button" onClick={() => fileInputRef.current.click()} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">
                        Upload New Logo
                      </button>
                      <p className="text-gray-500 text-sm mt-3">PNG, SVG or JPG recommended.</p>
                    </div>
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/svg+xml,.jpg,.jpeg,.png,.svg" className="hidden" onChange={handleFileChange} />
                </div>

                <div className="bg-black/6 rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-5">Website Favicon</h2>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    {favicon ? (
                      <img src={resolveImageUrl(favicon)} alt="Favicon" className="w-20 h-20 object-contain rounded-lg border bg-gray-50" />
                    ) : (
                      <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">No Favicon</div>
                    )}
                    <div>
                      <button type="button" onClick={() => faviconInputRef.current.click()} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">
                        Upload New Favicon
                      </button>
                      <p className="text-gray-500 text-sm mt-3">ICO, PNG, SVG or JPG recommended.</p>
                    </div>
                  </div>
                  <input ref={faviconInputRef} type="file" accept="image/x-icon,image/vnd.microsoft.icon,image/jpeg,image/png,image/svg+xml,.ico,.jpg,.jpeg,.png,.svg" className="hidden" onChange={handleFaviconFileChange} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">Dropdown Menus</h2>
                    <p className="text-sm text-gray-500 mt-1">These appear as hover dropdowns in the navbar (e.g. "Services").</p>
                  </div>
                  <button
                    type="button"
                    onClick={addDropdownGroup}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-semibold"
                  >
                    + Add Dropdown
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navbar.navDropdown.map((dropdown, dIdx) => (
                    <div key={dIdx} className="bg-black/6 rounded-xl shadow p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex-1">
                          <label className="block text-sm font-semibold text-gray-600 mb-1">Dropdown Label</label>
                          <input
                            type="text"
                            minLength={1}
                            maxLength={50}
                            value={dropdown.text}
                            placeholder="e.g. Services"
                            onChange={(e) => updateDropdownTitle(dIdx, e.target.value)}
                            className="border p-2 rounded-lg w-full"
                            required
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeDropdownGroup(dIdx)}
                          className="self-end px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm font-semibold"
                        >
                          Remove Dropdown
                        </button>
                      </div>

                      <div className="flex flex-col gap-3 mb-4">
                        <h4 className="text-sm font-semibold text-gray-600">Links in "{dropdown.text}"</h4>
                        {(dropdown.links || []).map((link, lIdx) => (
                          <div key={lIdx} className="flex items-center gap-3">
                            <input
                              type="text"
                              minLength={1}
                              maxLength={100}
                              value={link.text}
                              placeholder="Link text"
                              onChange={(e) => updateDropdownLink(dIdx, lIdx, 'text', e.target.value)}
                              className="border p-2 rounded-lg flex-1"
                              required
                            />
                            <input
                              type="text"
                              minLength={1}
                              maxLength={255}
                              value={link.url}
                              placeholder="URL (e.g. /smart-pos)"
                              onChange={(e) => updateDropdownLink(dIdx, lIdx, 'url', e.target.value)}
                              className="border p-2 rounded-lg flex-1"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => removeDropdownLink(dIdx, lIdx)}
                              className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm font-semibold whitespace-nowrap"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        {(dropdown.links || []).length === 0 && (
                          <p className="text-sm text-gray-400 italic">No links yet. Add one below.</p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => addDropdownLink(dIdx)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-semibold"
                      >
                        + Add Link
                      </button>
                    </div>
                  ))}

                  {navbar.navDropdown.length === 0 && (
                    <div className="bg-black/4 rounded-xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-400">
                      No dropdown menus. Click "Add Dropdown" to create one.
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">Top-Level Links</h2>
                    <p className="text-sm text-gray-500 mt-1">These appear as plain links in the navbar (Home, About, etc.).</p>
                  </div>
                  <button
                    type="button"
                    onClick={addNavLink}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-semibold"
                  >
                    + Add Link
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {navbar.navbarLinks.map((link, index) => (
                    <div key={index} className="bg-black/6 rounded-xl shadow-md p-5">
                      <h3 className="font-semibold text-sm text-gray-500 mb-3">Link {index + 1}</h3>
                      <div className="flex gap-3 mb-3">
                        <input
                          className="border p-2 rounded-lg w-full text-sm"
                          type="text"
                          minLength={1}
                          maxLength={100}
                          placeholder="Label (e.g. About)"
                          value={link.text}
                          onChange={(e) => {
                            const newLinks = [...navbar.navbarLinks];
                            newLinks[index] = { ...newLinks[index], text: e.target.value };
                            setNavbar(prev => ({ ...prev, navbarLinks: newLinks }));
                          }}
                          required
                        />
                        <input
                          className="border p-2 rounded-lg w-full text-sm"
                          type="text"
                          minLength={1}
                          maxLength={255}
                          placeholder="URL (e.g. /about)"
                          value={link.url}
                          onChange={(e) => {
                            const newLinks = [...navbar.navbarLinks];
                            newLinks[index] = { ...newLinks[index], url: e.target.value };
                            setNavbar(prev => ({ ...prev, navbarLinks: newLinks }));
                          }}
                          required
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeNavLink(index)}
                        className="px-3 py-1.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  {navbar.navbarLinks.length === 0 && (
                    <div className="bg-black/4 rounded-xl border-2 border-dashed border-gray-200 p-6 text-center text-gray-400 text-sm md:col-span-2">
                      No top-level links. Click "Add Link" to create one.
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={updateLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition disabled:opacity-50"
                >
                  {updateLoading ? "Updating..." : "Save Changes"}
                </button>
              </div>

            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default AdminNavbar
