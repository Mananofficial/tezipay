import { useState } from "react";
import { NavLink } from "react-router";

const SidebarGroup = ({ title, icon, sections }) => {
    const [open, setOpen] = useState(false);
    const Icon = icon;

    return (
        <div className="space-y-2">

            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between rounded-xl px-4 py-3 hover:bg-black/60 transition"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">

                        <Icon
                            size={18}
                            className="text-white"
                            strokeWidth={2.2}
                        />

                    </div>

                    <span className="font-semibold text-white">
                        {title}
                    </span>
                </div>

                <svg
                    className={`transition-transform text-white/30 ${open ? "rotate-180" : ""
                        }`}
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </button>

            {open && (
                <div className="flex flex-col gap-2">

                    {sections.map((section) => (
                        <NavLink
                            key={section.path}
                            to={section.path}
                        >
                            {({ isActive }) => (
                                <div
                                    className={`flex justify-between items-center rounded-lg px-5 py-3 transition
                    ${isActive
                                            ? "bg-black text-white"
                                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                        }`}
                                >
                                    <span>{section.label}</span>

                                    <div
                                        className={`w-2 h-2 rounded-full ${isActive ? "bg-white" : ""
                                            }`}
                                    />
                                </div>
                            )}
                        </NavLink>
                    ))}

                </div>
            )}
        </div>
    );
};

export default SidebarGroup;