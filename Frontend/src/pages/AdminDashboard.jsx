import React from "react";
import { Link } from "react-router";
import {
  House, CreditCard, Info, Users, Palette, PanelTop,
  ExternalLink, ArrowRight, Smartphone, CircleDollarSign,
  Briefcase, BookOpen, Shield, HelpCircle, Zap, Settings2,
  BarChart3, Globe
} from "lucide-react";

const pages = [
  { title: "Homepage", description: "Hero, blueprint, notes and homepage sections.", icon: House, color: "#6366f1", bg: "#eef2ff", path: "/admin/dashboard/hero-section" },
  { title: "Smart POS", description: "Hero, cards, features and CTA sections.", icon: CreditCard, color: "#0ea5e9", bg: "#e0f2fe", path: "/admin/dashboard/smart-pos/hero-section" },
  { title: "Soft POS", description: "Hero, cards, features and CTA sections.", icon: Smartphone, color: "#8b5cf6", bg: "#ede9fe", path: "/admin/dashboard/soft-pos/hero-section" },
  { title: "Payment Gateway", description: "Hero, cards, features and CTA sections.", icon: CircleDollarSign, color: "#10b981", bg: "#d1fae5", path: "/admin/dashboard/payment-gateway/hero-section" },
  { title: "Smart Card", description: "Hero, cards, features and CTA sections.", icon: CreditCard, color: "#f59e0b", bg: "#fef3c7", path: "/admin/dashboard/smart-card/hero-section" },
  { title: "Payroll", description: "Hero, cards, features and CTA sections.", icon: Briefcase, color: "#ef4444", bg: "#fee2e2", path: "/admin/dashboard/payroll/hero-section" },
  { title: "Swift Loan", description: "Hero, cards, features and CTA sections.", icon: Zap, color: "#f97316", bg: "#ffedd5", path: "/admin/dashboard/swift-loan/hero-section" },
  { title: "Bookkeeping", description: "Hero, cards, features and CTA sections.", icon: BookOpen, color: "#06b6d4", bg: "#cffafe", path: "/admin/dashboard/book-keeping/hero-section" },
  { title: "Insurance", description: "Hero, cards, features and CTA sections.", icon: Shield, color: "#84cc16", bg: "#ecfccb", path: "/admin/dashboard/insurance-solutions/hero-section" },
  { title: "Why To Join", description: "Hero, cards and CTA sections.", icon: HelpCircle, color: "#ec4899", bg: "#fce7f3", path: "/admin/dashboard/why-to-join/hero-section" },
  { title: "About", description: "Hero, cards and features sections.", icon: Info, color: "#14b8a6", bg: "#ccfbf1", path: "/admin/dashboard/about/hero-section" },
];

const quickSettings = [
  { title: "Website Colors", desc: "Manage global brand colors.", icon: Palette, path: "/admin/dashboard/colors", color: "#6366f1" },
  { title: "Navbar & Logo", desc: "Update navigation links, logo & favicon.", icon: PanelTop, path: "/admin/dashboard/navbar", color: "#0ea5e9" },
  { title: "Footer", desc: "Update footer links and social media.", icon: Globe, path: "/admin/dashboard/footer", color: "#10b981" },
];

const AdminDashboard = () => {
  return (
    <div className="admin-page">
      <div className="admin-topbar">
        <div>
          <h1 className="admin-topbar__title">Dashboard</h1>
          <p className="admin-topbar__sub">Welcome back! Manage your website content from here.</p>
        </div>
        <Link to="/" target="_blank" className="admin-topbar__cta">
          <ExternalLink size={16} />
          View Website
        </Link>
      </div>

      <div className="admin-banner">
        <div className="admin-banner__content">
          <span className="admin-banner__badge">
            <BarChart3 size={13} /> Content Manager
          </span>
          <h2 className="admin-banner__title">Content Management System</h2>
          <p className="admin-banner__desc">
            Select any page below or use the sidebar navigation to update content. Changes are reflected on your website instantly after saving.
          </p>
        </div>
        <div className="admin-banner__graphic">
          <Settings2 size={52} strokeWidth={1.2} />
        </div>
      </div>

      <section className="admin-section">
        <div className="admin-section__header">
          <h2 className="admin-section__title">Quick Settings</h2>
          <p className="admin-section__desc">Global settings that affect the entire website.</p>
        </div>
        <div className="admin-quick-grid">
          {quickSettings.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} to={item.path} className="admin-quick-card">
                <span className="admin-quick-card__icon" style={{ background: item.color + "18", color: item.color }}>
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="admin-quick-card__title">{item.title}</h3>
                  <p className="admin-quick-card__desc">{item.desc}</p>
                </div>
                <ArrowRight size={16} className="admin-quick-card__arrow" />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="admin-section">
        <div className="admin-section__header">
          <h2 className="admin-section__title">Manage Pages</h2>
          <p className="admin-section__desc">Click any card to start editing that page's content.</p>
        </div>
        <div className="admin-pages-grid">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <Link key={page.title} to={page.path} className="admin-page-card">
                <div className="admin-page-card__top">
                  <span className="admin-page-card__icon" style={{ background: page.bg, color: page.color }}>
                    <Icon size={22} />
                  </span>
                  <span className="admin-page-card__arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
                <h3 className="admin-page-card__title">{page.title}</h3>
                <p className="admin-page-card__desc">{page.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;