import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAdminAuth } from '../hooks/useAdminAuth'
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
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

  return (
    <div className="h-full montserrat-font">
      <div className="grid grid-cols-[250px_1fr]">
        <aside className="bg-black/90 shadow-lg text-white h-screen p-4 flex flex-col gap-4 sticky top-0 left-0 z-50">
          <h1 className='text-2xl font-bold '>Admin Dashboard</h1>
          <Sidebar />
        </aside>
        <div className="flex-1 p-8">
          Dash
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard