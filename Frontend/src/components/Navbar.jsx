import React, { useState } from 'react'
import { useHomepage } from '../hooks/useHomepage'
import { Link, useNavigate } from 'react-router'
import { resolveImageUrl } from '../utils/resolveImageUrl'

const Navbar = () => {
    const { homepageData } = useHomepage();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


    return (
        <main className='fixed top-0 left-0 z-50 h-20.25 w-full transition-all duration-300 ease-in-out backdrop-blur-2xl'>
            <div className="container px-5">
                <nav className='flex h-full items-center justify-between'>
                    <Link to="/" className="mt-2.5">
                        <img src={resolveImageUrl(homepageData?.navbar?.logo) || "./src/assets/logo.png"} alt="Logo" className="w-42.5" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} />
                    </Link>
                    <ul className='hidden lg:flex gap-14 text-[18px] font-medium'>
                        {homepageData?.navbar?.navbarLinks?.map((link, index) => (
                            <li key={index} className='cursor-pointer transition hover:text-(--primary)'>
                                <Link to={link.url}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
                        {isOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>}
                    </button>
                </nav>
                {isOpen && (
                    <div className="lg:hidden absolute left-0 top-20 w-full bg-(--primaryBackground) shadow-lg transform transition-all duration-300 ease-in-out">
                        <ul className="flex flex-col items-center py-6 gap-6 text-lg font-medium">
                            {homepageData?.navbar?.navbarLinks?.map((link, index) => (
                                <li key={index}>
                                    <div
                                        onClick={() => {
                                            setIsOpen(false);
                                            navigate(link.url);
                                        }}
                                    >
                                        {link.text}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Navbar