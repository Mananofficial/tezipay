import { useState } from "react";
import { NavLink } from "react-router";
import { useAdminAuth } from '../hooks/useAdminAuth';

const Sidebar = ({ setSelectedSection }) => {
    const [open, setOpen] = useState(false);
    const { loading, handleAdminLogout } = useAdminAuth();


    const sections = [
        { label: "Colors", path: "/admin/dashboard/colors" },
        { label: "Navbar", path: "/admin/dashboard/navbar" },
        { label: "Hero Section", path: "/admin/dashboard/hero-section" },
        { label: "Hero Below", path: "/admin/dashboard/hero-below" },
        { label: "Blueprint", path: "/admin/dashboard/blueprint" },
        { label: "Note", path: "/admin/dashboard/note" },
        { label: "Footer", path: "/admin/dashboard/footer" },
    ];

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-(--primaryBackground)">
                <div className="rounded-full h-20 w-20 bg-(--primary) animate-ping"></div>
            </div>
        );
    }


    return (
        <>
            <div className="pt-4 flex flex-col justify-between h-full">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between rounded-xl px-4 py-3 hover:bg-black/60 transition-all duration-300"
                >
                    <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                            </svg>

                        </div>

                        <span className="font-semibold text-lg">
                            Homepage
                        </span>
                    </div>

                    <svg
                        className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>

                </button>

                {open && (
                    <div className="mt-3 flex flex-col gap-2">

                        {sections.map((section) => (

                            <NavLink
                                key={section.path}
                                to={section.path}
                                className={({ isActive }) => `group flex items-center justify-between rounded-lg px-5 py-3 text-lefttransition-all duration-300 ease-in-out ${
                                    isActive
                                        ? "bg-black text-white shadow-lg"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                            >
                                <span>{section.label}</span>
                                {({ isActive }) => (
                                    <div className={`w-2 h-2 rounded-full ${isActive ? "bg-white" : "bg-transparent"}`}></div>
                                )}

                            </NavLink>

                        ))}

                    </div>
                )}
                <button onClick={handleAdminLogout} className="mt-auto bg-black/60 hover:bg-red-800/40 transition-colors ease-in-out text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
            </div>
        </>
    );
};

export default Sidebar;