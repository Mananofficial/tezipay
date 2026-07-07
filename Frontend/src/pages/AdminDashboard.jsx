import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAdminAuth } from '../hooks/useAdminAuth'
import Sidebar from '../components/Sidebar';

import Colors from "./adminDashboardPages/Colors";
import Navbar from "./adminDashboardPages/Navbar";
import HeroSection from "./adminDashboardPages/HeroSection";
import HeroBelow from "./adminDashboardPages/HeroBelow";
import Blueprint from "./adminDashboardPages/Blueprint";
import Note from "./adminDashboardPages/Note";
import Footer from "./adminDashboardPages/Footer";

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("Colors");
  const { admin, loading, handleAdminLogout } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !admin) {
      navigate("/admin/login");
    }
  }, [loading, admin]);


  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-(--primaryBackground)">
        <div className="rounded-full h-20 w-20 bg-(--primary) animate-ping"></div>
      </div>
    )
  }

  const renderSection = () => {
    switch (selectedSection) {
      case "Colors":
        return <Colors />;

      case "Navbar":
        return <Navbar />;

      case "Hero Section":
        return <HeroSection />;

      case "Hero Below":
        return <HeroBelow />;

      case "Blueprint":
        return <Blueprint />;

      case "Note":
        return <Note />;

      case "Footer":
        return <Footer />;

      default:
        return <h2>Select a section</h2>;
    }
  };


  return (
    <div className="h-full montserrat-font">
      <div className="grid grid-cols-[250px_1fr]">
        <aside className="bg-black/90 shadow-lg text-white h-screen p-4 flex flex-col gap-4 sticky top-0 left-0 z-50">
          <h1 className='text-2xl font-bold '>Admin Dashboard</h1>
          <Sidebar setSelectedSection={setSelectedSection} />
          <button onClick={handleAdminLogout} className="mt-auto bg-black/60 hover:bg-red-800/40 transition-colors ease-in-out text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </aside>
        <div className="flex-1 p-8">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard