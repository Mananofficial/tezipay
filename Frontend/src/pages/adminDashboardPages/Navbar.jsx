import React, { useState, useEffect, useRef } from 'react'
import { useHomepage } from '../..//hooks/useHomepage'
import { useAdminCustom } from '../../hooks/useAdminCustom'

const Navbar = () => {
  const { homepageData, loading: homepageLoading } = useHomepage();
  const { loading: updateLoading, handleUpdate, handleImageUpload } = useAdminCustom();
  const fileInputRef = useRef(null);

  const [navbar, setNavbar] = useState({
    logo: '',
    navbarLinks: [{
      text: '',
      url: ''
    }],
  });

  useEffect(() => {
    if (homepageData?.navbar) {
      setNavbar(homepageData.navbar);
    }
  }, [homepageData]);

  const AddNavLink = () => {
    setNavbar({
      ...navbar,
      navbarLinks: [...navbar.navbarLinks, { text: '', url: '' }]
    });
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const result = await handleImageUpload(file);

    if (result.success) {
      setNavbar(prev => ({
        ...prev,
        logo: result.url
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await handleUpdate({ navbar });
    if (result.success) {
      alert("Navbar updated successfully!");
    } else {
      alert("Failed to update navbar. Please try again.");
    }
  };

  if (homepageLoading) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <div className="flex flex-col justify-start items-start gap-6">
        <h1 className="text-4xl font-bold">Navbar</h1>

        <form onSubmit={handleSubmit} className="max-w-4xl flex flex-col gap-6 w-full">

          <div className="input-group flex gap-4 justify-start items-center">
            <div className="bg-black/6 rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-5">
                Website Logo
              </h2>

              <div className="flex flex-col md:flex-row gap-6 items-center">

                <img
                  src={navbar.logo}
                  alt="Logo"
                  className="w-36 h-36 object-contain rounded-lg border bg-gray-50"
                />

                <div>

                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
                  >
                    Upload New Logo
                  </button>

                  <p className="text-gray-500 text-sm mt-3">
                    PNG, SVG or JPG recommended.
                  </p>

                </div>

              </div>
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {navbar.navbarLinks.map((link, index) => (
              <div className="bg-black/6 rounded-xl shadow-md p-5">

                <h3 className="font-semibold text-lg mb-5">
                  Navigation Item {index + 1}
                </h3>
                <div className="flex gap-4 justify-start items-center mb-4">

                  <input className='border p-2 rounded-lg w-full' type="text" name={`navLink${index + 1}`} id={`navLink${index + 1}`} placeholder={`Nav Link ${index + 1}`} value={link.text} onChange={(e) => {
                    const newLinks = [...navbar.navbarLinks];
                    newLinks[index].text = e.target.value;
                    setNavbar({ ...navbar, navbarLinks: newLinks });
                  }} />

                  <input className='border p-2 rounded-lg w-full' type="text" name={`navLink${index + 1}Url`} id={`navLink${index + 1}Url`} placeholder="URL" value={link.url} onChange={(e) => {
                    const newLinks = [...navbar.navbarLinks];
                    newLinks[index].url = e.target.value;
                    setNavbar({ ...navbar, navbarLinks: newLinks });
                  }} />

                </div>
                <button onClick={() => {
                  const newLinks = [...navbar.navbarLinks];
                  newLinks.splice(index, 1);
                  setNavbar({ ...navbar, navbarLinks: newLinks });
                }} className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'>Remove</button>
              </div>
            ))}
            <button onClick={AddNavLink} type="button" className='scale-95 bg-(--primary) text-white rounded-lg hover:bg-(--secondary)'>Add Nav Item</button>
          </ul>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" disabled={updateLoading} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition disabled:opacity-50">
              {updateLoading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Navbar