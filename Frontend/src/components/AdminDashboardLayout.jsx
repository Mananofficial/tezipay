import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const AdminDashboardLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-layout__sidebar">
        <Sidebar />
      </aside>
      <main className="admin-layout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;