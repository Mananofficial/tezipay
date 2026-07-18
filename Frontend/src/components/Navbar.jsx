import React, { useState } from 'react'
import { useHomepage } from '../hooks/useHomepage'
import { Link } from 'react-router'
import { resolveImageUrl } from '../utils/resolveImageUrl'

const Navbar = () => {
    const { homepageData } = useHomepage();
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdownIdx, setOpenDropdownIdx] = useState(null);

    const navDropdowns = homepageData?.navbar?.navDropdown?.length
        ? homepageData.navbar.navDropdown
        : [
            {
                text: "Services",
                links: [
                    { text: "Smart POS", url: "/smart-pos" },
                    { text: "Soft POS", url: "/soft-pos" },
                    { text: "Payment Gateway", url: "/payment-gateway" },
                    { text: "Smart Card", url: "/smart-card" },
                    { text: "Payroll", url: "/payroll" },
                    { text: "Swift Loan", url: "/swift-loan" },
                    { text: "Bookkeeping", url: "/book-keeping" },
                    { text: "Insurance Solutions", url: "/insurance-solutions" }
                ]
            }
        ];

    const dropdownUrls = navDropdowns.flatMap(d => (d.links || []).map(l => l.url));

    return (
        <main className='fixed top-0 left-0 z-50 h-20 w-full transition-all duration-300 ease-in-out backdrop-blur-2xl'>
            <div className="container px-5 h-full">
                <nav className='flex h-full items-center justify-between'>

                    <Link to="/" className="shrink-0">
                        <img
                            src={resolveImageUrl(homepageData?.navbar?.logo) || "./src/assets/logo.png"}
                            alt="Logo"
                            className="w-36 object-contain"
                            onClick={(e) => { e.preventDefault(); window.location.href = "/"; }}
                        />
                    </Link>

                    <ul className='hidden lg:flex items-center gap-10 text-[16px] font-medium h-full'>

                        {navDropdowns.map((dropdown, dIdx) => (
                            <li
                                key={dIdx}
                                className='relative h-full flex items-center cursor-pointer'
                                onMouseEnter={() => setOpenDropdownIdx(dIdx)}
                                onMouseLeave={() => setOpenDropdownIdx(null)}
                            >
                                <span className='flex items-center gap-1.5 transition-colors hover:text-(--primary) select-none'>
                                    {dropdown.text}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11"
                                        height="11"
                                        fill="currentColor"
                                        className={`transition-transform duration-200 ${openDropdownIdx === dIdx ? 'rotate-180' : ''}`}
                                        viewBox="0 0 16 16"
                                    >
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>

                                {openDropdownIdx === dIdx && (
                                    <div className="absolute top-[85%] left-1/2 -translate-x-1/2 min-w-56 bg-white/96 backdrop-blur-xl border border-gray-200/60 shadow-2xl rounded-2xl py-3 flex flex-col z-50">
                                        {(dropdown.links || []).map((link, lIdx) => (
                                            <Link
                                                key={lIdx}
                                                to={link.url}
                                                onClick={() => setOpenDropdownIdx(null)}
                                                className="px-5 py-2.5 text-[14px] font-semibold text-gray-700 hover:text-(--primary) hover:bg-gray-50 transition-colors rounded-lg mx-2"
                                            >
                                                {link.text}
                                            </Link>
                                        ))}
                                        {(dropdown.links || []).length === 0 && (
                                            <span className="px-5 py-3 text-sm text-gray-400 italic">No links configured</span>
                                        )}
                                    </div>
                                )}
                            </li>
                        ))}

                        {(homepageData?.navbar?.navbarLinks || [])
                            .filter(link => !dropdownUrls.includes(link.url))
                            .map((link, idx) => (
                                <li key={idx} className='cursor-pointer transition-colors hover:text-(--primary)'>
                                    <Link to={link.url}>{link.text}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden p-2'>
                        {isOpen
                            ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" /></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /></svg>
                        }
                    </button>
                </nav>

                {isOpen && (
                    <div className="lg:hidden absolute left-0 top-20 w-full bg-white border-b border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto z-50">
                        <ul className="flex flex-col py-5 gap-1 px-4">
                            <li>
                                <Link to="/" onClick={() => setIsOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-50 hover:text-(--primary)">
                                    Home
                                </Link>
                            </li>

                            {navDropdowns.map((dropdown, dIdx) => (
                                <li key={dIdx} className="flex flex-col">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdownIdx(openDropdownIdx === dIdx ? null : dIdx)}
                                        className="flex items-center justify-between py-2.5 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-50 w-full text-left"
                                    >
                                        {dropdown.text}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="11"
                                            height="11"
                                            fill="currentColor"
                                            className={`transition-transform duration-200 ${openDropdownIdx === dIdx ? 'rotate-180' : ''}`}
                                            viewBox="0 0 16 16"
                                        >
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                    {openDropdownIdx === dIdx && (
                                        <div className="grid grid-cols-2 gap-1 pl-3 pb-2">
                                            {(dropdown.links || []).map((link, lIdx) => (
                                                <Link
                                                    key={lIdx}
                                                    to={link.url}
                                                    onClick={() => { setIsOpen(false); setOpenDropdownIdx(null); }}
                                                    className="py-2 px-3 text-[14px] font-semibold text-gray-600 hover:text-(--primary) rounded-lg"
                                                >
                                                    {link.text}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}

                            {staticLinks.slice(1).map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.url} onClick={() => setIsOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-50 hover:text-(--primary)">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}

                            {(homepageData?.navbar?.navbarLinks || [])
                                .filter(link => !dropdownUrls.includes(link.url) && !staticLinks.some(s => s.url === link.url))
                                .map((link, idx) => (
                                    <li key={idx}>
                                        <Link to={link.url} onClick={() => setIsOpen(false)} className="block py-2.5 px-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-50 hover:text-(--primary)">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Navbar