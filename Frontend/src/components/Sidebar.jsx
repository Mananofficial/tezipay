import { sidebarConfig } from "../config/sidebarConfig";
import SidebarGroup from "./SidebarGroup";
import { useAdminAuth } from "../hooks/useAdminAuth";

const Sidebar = () => {
  const { handleAdminLogout } = useAdminAuth();

  return (
    <div className="flex h-full flex-col">

      <div className="shrink-0 border-b border-white/10 px-6 py-5">
        <h1 className="text-3xl font-bold text-white">
          Admin Dashboard
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto sidebar-scroll p-4">
        <div className="space-y-4">
          {sidebarConfig.map((group) => (
            <SidebarGroup
              key={group.title}
              {...group}
            />
          ))}
        </div>
      </div>

      <div className="shrink-0 border-t border-white/10 p-4 bg-[#1b1b1b]">
        <button
          onClick={handleAdminLogout}
          className="w-full rounded-xl bg-red-950 py-3 font-semibold text-white transition hover:bg-red-800"
        >
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;