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
import SmartposHeroSection from "./pages/SmartPOS/SmartposHeroSection";
import SmartposCardSection from "./pages/SmartPOS/SmartposCardSection";
import SmartposFeatures from "./pages/SmartPOS/SmartposFeatures";
import SmartposCta from "./pages/SmartPOS/SmartposCta";
import SoftposCardSection from "./pages/SoftPOS/SoftposCardSection";
import SoftposHeroSection from "./pages/SoftPOS/SoftposHeroSection";
import SoftposFeatures from "./pages/SoftPOS/SoftposFeatures";
import SoftposCta from "./pages/SoftPOS/SoftposCta";
import GatewayHeroSection from "./pages/PaymentGateway/GatewayHeroSection";
import GatewayCardSection from "./pages/PaymentGateway/GatewayCardSection";
import GatewayFeatures from "./pages/PaymentGateway/GatewayFeatures";
import GatewayCta from "./pages/PaymentGateway/GatewayCta";
import SmartCardHeroSection from "./pages/SmartCard/SmartCardHeroSection";
import SmartCardCardSection from "./pages/SmartCard/SmartCardCardSection";
import SmartCardFeatures from "./pages/SmartCard/SmartCardFeatures";
import SmartCardCta from "./pages/SmartCard/SmartCardCta";
import PayrollHeroSection from "./pages/Payroll/PayrollHeroSection";
import PayrollCardSection from "./pages/Payroll/PayrollCardSection";
import PayrollFeatures from "./pages/Payroll/PayrollFeatures";
import PayrollCta from "./pages/Payroll/PayrollCta";
import SwiftLoanHeroSection from "./pages/SwiftLoan/SwiftLoanHeroSection";
import SwiftLoanCardSection from "./pages/SwiftLoan/SwiftLoanCardSection";
import SwiftLoanFeatures from "./pages/SwiftLoan/SwiftLoanFeatures";
import SwiftLoanCta from "./pages/SwiftLoan/SwiftLoanCta";
import BookkeepingHeroSection from "./pages/Bookkeeping/BookkeepingHeroSection";
import BookkeepingCardSection from "./pages/Bookkeeping/BookkeepingCardSection";
import BookkeepingFeatures from "./pages/Bookkeeping/BookkeepingFeatures";
import BookkeepingCta from "./pages/Bookkeeping/BookkeepingCta";
import InsuranceHeroSection from "./pages/Insurance/InsuranceHeroSection";
import InsuranceCardSection from "./pages/Insurance/InsuranceCardSection";
import InsuranceFeatures from "./pages/Insurance/InsuranceFeatures";
import InsuranceCta from "./pages/Insurance/InsuranceCta";
import WhyHeroSection from "./pages/WhyToJoin/WhyHeroSection";
import WhyCardSection from "./pages/WhyToJoin/WhyCardSection";
import WhyCta from "./pages/WhyToJoin/WhyCta";
import AboutHeroSection from "./pages/About/AboutHeroSection";
import AboutCardSection from "./pages/About/AboutCardSection";
import AboutFeatures from "./pages/About/AboutFeatures";

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
            },
            {
                path: "smart-pos/hero-section",
                element: <SmartposHeroSection />
            },
            {
                path: "smart-pos/card-section",
                element: <SmartposCardSection />
            },
            {
                path: "smart-pos/features-section",
                element: <SmartposFeatures />
            },
            {
                path: "smart-pos/cta-section",
                element: <SmartposCta />
            },
            {
                path: "soft-pos/hero-section",
                element: <SoftposHeroSection />
            },
            {
                path: "soft-pos/card-section",
                element: <SoftposCardSection />
            },
            {
                path: "soft-pos/features-section",
                element: <SoftposFeatures />
            },
            {
                path: "soft-pos/cta-section",
                element: <SoftposCta />
            },
            {
                path: "payment-gateway/hero-section",
                element: <GatewayHeroSection />
            },
            {
                path: "payment-gateway/card-section",
                element: <GatewayCardSection />
            },
            {
                path: "payment-gateway/features-section",
                element: <GatewayFeatures />
            },
            {
                path: "payment-gateway/cta-section",
                element: <GatewayCta />
            },
            {
                path: "smart-card/hero-section",
                element: <SmartCardHeroSection />
            },
            {
                path: "smart-card/card-section",
                element: <SmartCardCardSection />
            },
            {
                path: "smart-card/features-section",
                element: <SmartCardFeatures />
            },
            {
                path: "smart-card/cta-section",
                element: <SmartCardCta />
            },
            {
                path: "payroll/hero-section",
                element: <PayrollHeroSection />
            },
            {
                path: "payroll/card-section",
                element: <PayrollCardSection />
            },
            {
                path: "payroll/features-section",
                element: <PayrollFeatures />
            },
            {
                path: "payroll/cta-section",
                element: <PayrollCta />
            },
            {
                path: "swift-loan/hero-section",
                element: <SwiftLoanHeroSection />
            },
            {
                path: "swift-loan/card-section",
                element: <SwiftLoanCardSection />
            },
            {
                path: "swift-loan/features-section",
                element: <SwiftLoanFeatures />
            },
            {
                path: "swift-loan/cta-section",
                element: <SwiftLoanCta />
            },
            {
                path: "book-keeping/hero-section",
                element: <BookkeepingHeroSection />
            },
            {
                path: "book-keeping/card-section",
                element: <BookkeepingCardSection />
            },
            {
                path: "book-keeping/features-section",
                element: <BookkeepingFeatures />
            },
            {
                path: "book-keeping/cta-section",
                element: <BookkeepingCta />
            },
            {
                path: "insurance-solutions/hero-section",
                element: <InsuranceHeroSection />
            },
            {
                path: "insurance-solutions/card-section",
                element: <InsuranceCardSection />
            },
            {
                path: "insurance-solutions/features-section",
                element: <InsuranceFeatures />
            },
            {
                path: "insurance-solutions/cta-section",
                element: <InsuranceCta />
            },
            {
                path: "why-to-join/hero-section",
                element: <WhyHeroSection />
            },
            {
                path: "why-to-join/card-section",
                element: <WhyCardSection />
            },
            {
                path: "why-to-join/cta-section",
                element: <WhyCta />
            },
            {
                path: "about/hero-section",
                element: <AboutHeroSection />
            },
            {
                path: "about/card-section",
                element: <AboutCardSection />
            },
            {
                path: "about/features-section",
                element: <AboutFeatures />
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
        path: "/payment-gateway",
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