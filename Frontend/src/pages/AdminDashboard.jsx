import React from "react";
import { Link } from "react-router";
import {
  House,
  CreditCard,
  Info,
  Users,
  Palette,
  PanelTop,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const AdminDashboard = () => {
  const pages = [
    {
      title: "Homepage",
      description: "Manage hero, blueprint, notes and homepage content.",
      icon: House,
      path: "/admin/dashboard/hero-section",
    },
    {
      title: "Smart POS",
      description: "Manage Smart POS hero, cards, features and CTA sections.",
      icon: CreditCard,
      path: "/admin/dashboard/smart-pos/hero-section",
    },
    {
      title: "About",
      description: "Manage the About page hero, cards and feature content.",
      icon: Info,
      path: "/admin/dashboard/about/hero-section",
    },
    {
      title: "Why To Join",
      description: "Manage the Why To Join page hero, cards and CTA content.",
      icon: Users,
      path: "/admin/dashboard/why-to-join/hero-section",
    },
  ];

  return (
    <main className="py-10 md:py-14">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your website content and customize pages from one place.
            </p>
          </div>

          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition"
          >
            View Website
            <ExternalLink size={18} />
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-blue-600 mb-2">
                ADMIN PANEL
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">
                Welcome to your Content Management Dashboard
              </h2>

              <p className="text-gray-500 mt-3 max-w-2xl">
                Select any page below or use the sidebar to update your website
                content. Changes will be reflected on the website after saving.
              </p>
            </div>

            <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center">
              <PanelTop
                size={30}
                className="text-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">
              Manage Pages
            </h2>

            <p className="text-gray-500 mt-1">
              Quickly access and edit your website pages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pages.map((page) => {
              const Icon = page.icon;

              return (
                <Link
                  key={page.title}
                  to={page.path}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon
                        size={24}
                        className="text-blue-600"
                      />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mt-6">
                    {page.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {page.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Quick Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/admin/dashboard/colors"
              className="group bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-between hover:border-blue-200 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Palette size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Website Colors
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Manage global website colors.
                  </p>
                </div>
              </div>

              <ArrowRight
                size={20}
                className="text-gray-400 group-hover:translate-x-1 transition"
              />
            </Link>

            <Link
              to="/admin/dashboard/navbar"
              className="group bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-between hover:border-blue-200 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                  <PanelTop size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Header & Footer
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Manage global navigation and layout.
                  </p>
                </div>
              </div>

              <ArrowRight
                size={20}
                className="text-gray-400 group-hover:translate-x-1 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;