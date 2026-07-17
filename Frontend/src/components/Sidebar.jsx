import { sidebarConfig } from "../config/sidebarConfig";
import SidebarGroup from "./SidebarGroup";
import { useAdminAuth } from "../hooks/useAdminAuth";
import { Link } from "react-router";
import { LogOut, LayoutDashboard, ExternalLink } from "lucide-react";

const Sidebar = () => {
  const { handleAdminLogout } = useAdminAuth();

  return (
    <div className="sidebar">

      <div className="sidebar__header">
        <Link to="/admin/dashboard" className="sidebar__brand">
          <div>
            <p className="sidebar__brand-sub">Admin Panel</p>
          </div>
        </Link>
      </div>

      <nav className="sidebar__nav sidebar-scroll">
        <p className="sidebar__section-label">Navigation</p>
        <div className="sidebar__groups">
          {sidebarConfig.map((group) => (
            <SidebarGroup key={group.title} {...group} />
          ))}
        </div>
      </nav>

      <div className="sidebar__footer">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="sidebar__footer-link"
        >
          <ExternalLink size={15} />
          View Website
        </a>

        <button
          onClick={handleAdminLogout}
          className="sidebar__logout"
        >
          <LogOut size={15} />
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;