import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";

const SidebarGroup = ({ title, icon, sections }) => {
    const location = useLocation();
    const Icon = icon;

    // Auto-open group if one of its sections is currently active
    const isGroupActive = sections.some(s => location.pathname === s.path);
    const [open, setOpen] = useState(isGroupActive);

    // Re-evaluate when route changes
    useEffect(() => {
        if (isGroupActive) setOpen(true);
    }, [location.pathname]);

    return (
        <div className="sidebar-group">
            <button
                onClick={() => setOpen(!open)}
                className={`sidebar-group-btn ${isGroupActive ? "sidebar-group-btn--active" : ""}`}
            >
                <div className="sidebar-group-btn__left">
                    <span className={`sidebar-icon-wrap ${isGroupActive ? "sidebar-icon-wrap--active" : ""}`}>
                        <Icon size={16} strokeWidth={2.2} />
                    </span>
                    <span className="sidebar-group-label">{title}</span>
                </div>
                <span className={`sidebar-chevron ${open ? "sidebar-chevron--open" : ""}`}>
                    <ChevronDown size={14} />
                </span>
            </button>

            <div className={`sidebar-links ${open ? "sidebar-links--open" : ""}`}>
                <div>
                    {sections.map((section) => (
                        <NavLink
                            key={section.path}
                            to={section.path}
                            className={({ isActive }) =>
                                `sidebar-link ${isActive ? "sidebar-link--active" : ""}`
                            }
                        >
                            <span className="sidebar-link__dot" />
                            {section.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarGroup;