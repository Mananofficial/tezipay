import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const AdminDashboardLayout = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-[270px_1fr] bg-(--primaryBackground)">

      <aside className="sticky top-0 h-screen bg-[#1b1b1b] border-r border-white/10">
        <Sidebar />
      </aside>

      <main className="min-w-0 overflow-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminDashboardLayout;