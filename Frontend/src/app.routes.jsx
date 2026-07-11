import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AdminAuth from "./pages/AdminAuth";
import AdminDashboard from "./pages/AdminDashboard";
import Protected from "./components/Protected";
import AdminDashboardLayout from "./components/AdminDashboardLayout";
import Home2 from "./pages/Home2";
import Colors from "./pages/adminDashboardPages/Colors";
import Navbar from "./pages/adminDashboardPages/Navbar";
import HeroSection from "./pages/adminDashboardPages/HeroSection";
import HeroBelow from "./pages/adminDashboardPages/HeroBelow";
import Blueprint from "./pages/adminDashboardPages/Blueprint";
import Note from "./pages/adminDashboardPages/Note";
import Footer from "./pages/adminDashboardPages/Footer";
import SmartPOS from "./pages/SmartPOS";
import SoftPOS from "./pages/SoftPOS";
import PaymentGateway from "./pages/PaymentGateway";
import SmartCard from "./pages/SmartCard";
import Payroll from "./pages/Payroll";
import SwiftLoan from "./pages/SwiftLoan";
import BookKeeping from "./pages/BookKeeping";
import InsuranceSolutions from "./pages/InsuranceSolutions";
import About from "./pages/About";
import WhyToJoin from "./pages/WhyToJoin";

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
                <AdminDashboardLayout />
            </Protected>
        ),
        children: [
            {
                index: true,
                element: <AdminDashboard />
            },
            {
                path: "colors",
                element: <Colors />
            },
            {
                path: "navbar",
                element: <Navbar />
            },
            {
                path: "hero-section",
                element: <HeroSection />
            },
            {
                path: "hero-below",
                element: <HeroBelow />
            },
            {
                path: "blueprint",
                element: <Blueprint />
            },
            {
                path: "note",
                element: <Note />
            },
            {
                path: "footer",
                element: <Footer />
            }
        ]
    },
    {
        path: "/smart-pos",
        element: (
            <SmartPOS />
        )
    },
    {
        path: "/soft-pos",
        element: (
            <SoftPOS />
        )
    },
    {
        path: "/paymentgateway",
        element: (
            <PaymentGateway />
        )
    },
    {
        path: "/smart-card",
        element: (
            <SmartCard />
        )
    },
    {
        path: "/payroll",
        element: (
            <Payroll />
        )
    },
    {
        path: "/swift-loan",
        element: (
            <SwiftLoan />
        )
    },
    {
        path: "/book-keeping",
        element: (
            <BookKeeping />
        )
    },
    {
        path: "/insurance-solutions",
        element: (
            <InsuranceSolutions />
        )
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/why-to-join",
        element: <WhyToJoin />
    }
]) 