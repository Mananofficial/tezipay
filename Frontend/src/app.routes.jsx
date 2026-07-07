import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AdminAuth from "./pages/AdminAuth";
import AdminDashboard from "./pages/AdminDashboard";
import Protected from "./components/Protected";
import Home2 from "./pages/Home2";
import Colors from "./pages/adminDashboardPages/Colors";
import Navbar from "./pages/adminDashboardPages/Navbar";
import HeroSection from "./pages/adminDashboardPages/HeroSection";
import HeroBelow from "./pages/adminDashboardPages/HeroBelow";
import Blueprint from "./pages/adminDashboardPages/Blueprint";
import Note from "./pages/adminDashboardPages/Note";
import Footer from "./pages/adminDashboardPages/Footer";

export const router = createBrowserRouter([
    {
        path: "/2",
        element: <Home2 />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/admin/login",
        element: <AdminAuth />
    },
    {
        path: "/admin/dashboard",
        element: (
            <Protected>
                <AdminDashboard />
            </Protected>
        )
    },
    {
        path: "/admin/dashboard/colors",
        element: (
            <Protected>
                <Colors />
            </Protected>
        )
    },
    {
        path: "/admin/dashboard/navbar",
        element: (
            <Protected>
                <Navbar />
            </Protected>
        )
    },
    {
        path: "/admin/dashboard/hero-section",
        element: (
            <Protected>
                <HeroSection />
            </Protected>
        )
    },
    {
        path: "/admin/dashboard/hero-below",
        element: (
            <Protected>
                <HeroBelow />
            </Protected>
        )
    },
    {
        path: "/admin/dashboard/blueprint",
        element: (
            <Protected>
                <Blueprint />
            </Protected>
        )
    },
    {
        path: "/admin/dashboard/note",
        element: (
            <Protected>
                <Note />
            </Protected>
        )
    },
    {
        path: "/admin/dashboard/footer",
        element: (
            <Protected>
                <Footer />
            </Protected>
        )
    }
]) 