import {
    Palette,
    LayoutDashboard,
    House,
    CreditCard,
    CircleDollarSign,
    Info,
    Smartphone,
    Briefcase,
} from "lucide-react";

export const sidebarConfig = [
    {
        title: "Global",
        icon: Palette,
        sections: [
            {
                label: "Colors",
                path: "/admin/dashboard/colors",
            },
        ],
    },

    {
        title: "Layout",
        icon: LayoutDashboard,
        sections: [
            {
                label: "Navbar",
                path: "/admin/dashboard/navbar",
            },
            {
                label: "Footer",
                path: "/admin/dashboard/footer",
            },
        ],
    },

    {
        title: "Homepage",
        icon: House,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/hero-section",
            },
            {
                label: "Hero Below",
                path: "/admin/dashboard/hero-below",
            },
            {
                label: "Blueprint",
                path: "/admin/dashboard/blueprint",
            },
            {
                label: "Note",
                path: "/admin/dashboard/note",
            },
        ],
    },

    {
        title: "Smart POS",
        icon: CreditCard,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/smart-pos/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/smart-pos/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/smart-pos/features-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/smart-pos/cta-section",
            },
        ],
    },

    {
        title: "Soft POS",
        icon: Smartphone,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/soft-pos/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/soft-pos/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/soft-pos/features-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/soft-pos/cta-section",
            },
        ],
    },

    {
        title: "Payment Gateway",
        icon: CircleDollarSign,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/payment-gateway/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/payment-gateway/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/payment-gateway/features-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/payment-gateway/cta-section",
            },
        ],
    },

    {
        title: "Smart Card",
        icon: CreditCard,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/smart-card/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/smart-card/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/smart-card/features-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/smart-card/cta-section",
            },
        ],
    },

    {
        title: "Payroll",
        icon: Briefcase,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/payroll/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/payroll/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/payroll/features-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/payroll/cta-section",
            },
        ],
    },

    {
        title: "Swift Loan",
        icon: CreditCard,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/swift-loan/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/swift-loan/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/swift-loan/features-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/swift-loan/cta-section",
            },
        ],
    },

    {
        title: "Bookkeeping",
        icon: CreditCard,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/book-keeping/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/book-keeping/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/book-keeping/features-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/book-keeping/cta-section",
            },
        ],
    },

    {
        title: "Insurance Solutions",
        icon: CreditCard,
        sections: [
            {
                label: "Hero Section",
                path: "/admin/dashboard/insurance-solutions/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/insurance-solutions/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/insurance-solutions/features-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/insurance-solutions/cta-section",
            },
        ],
    },

    {
        title: "Why To Join",
        icon: Info,
        sections: [
            {
                label: "Hero",
                path: "/admin/dashboard/why-to-join/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/why-to-join/card-section",
            },
            {
                label: "CTA",
                path: "/admin/dashboard/why-to-join/cta-section",
            }
        ],
    },

    {
        title: "About",
        icon: Info,
        sections: [
            {
                label: "Hero",
                path: "/admin/dashboard/about/hero-section",
            },
            {
                label: "Card Section",
                path: "/admin/dashboard/about/card-section",
            },
            {
                label: "Features",
                path: "/admin/dashboard/about/features-section",
            }
        ],
    },
];