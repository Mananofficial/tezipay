import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const AdminDashboardLayout = () => {
  return (
    <div className="min-h-screen montserrat-font grid grid-cols-1 lg:grid-cols-[250px_1fr] bg-(--primaryBackground)">
      <aside className="bg-black/90 shadow-lg text-white max-h-screen min-h-screen p-4 flex flex-col gap-4 sticky top-0 left-0 z-50">
        <h1 className="text-2xl font-bold px-6">Admin Dashboard</h1>
        <Sidebar />
      </aside>
      <div className="flex-1 min-w-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboardLayout;