import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router'
import Footer from '../components/Footer';

const SmartCard = () => {

    const cards = [
        {
            number: "01",
            title: "Instant Current / Saving Account",
            description:
                "Experience immediate access with TeziPay's Instant Current/Savings Account",
        },
        {
            number: "02",
            title: "Digital Mobile Banking",
            description:
                "Bank on-the-go with TeziPay's efficient, secure Digital Mobile Banking.",
            active: true,
        },
        {
            number: "03",
            title: "Instant Virtual Debit Card",
            description:
                "Immediate access to funds with Instant Virtual Debit Card",
        },
    ];

    const leftFeatures = [
        {
            title: "Secure Transactions",
            description: "Ensures safety with top-tier security features.",
        },
        {
            title: "Simplified Reporting",
            description: "Streamlines your financial reporting processes.",
        },
        {
            title: "Convenient and Accessible",
            description: "Available for use worldwide.",
        },
    ];

    const rightFeatures = [
        {
            title: "Increased Purchasing Power",
            description: "Enhances your business's financial flexibility.",
        },
        {
            title: "Easy Expense Tracking",
            description: "Simplifies business expense management.",
        },
        {
            title: "Flexible Usage",
            description: "Suitable for varied business expenses.",
        },
    ];

    return (
        <main className='bg-(--primaryBackground) mt-10 montserrat-font relative overflow-hidden'>
            <header>
                <Navbar />
            </header>
            <section className='max-w-337.5 w-full mx-auto px-10 py-16 lg:px-20 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative'>
                {/* decore */}
                <div className="absolute h-328 w-328 rounded-full bg-(--primary)/14 z-10"
                    style={{ top: '-110%', right: '-60%' }}></div>

                <div className="hidden lg:block absolute h-93 w-93 rounded-full bg-(--primary)/14 z-10"
                    style={{ top: '10%', left: '-28%' }}>
                    <div className="absolute h-30 w-30 rounded-full bg-(--primary)/14 z-10"
                        style={{ bottom: '-4%', right: '-4%' }}></div>

                </div>


                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">

                    <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-17 max-w-xl">Business Smart Card
                    </h1>
                    <p className="text-lg lg:text-[20px] max-w-xl">Revolutionizing Your Business Transactions</p>
                    <div className="relative flex justify-center items-center mt-8 mb-8 lg:hidden">

                        <div className="absolute top-[6%] left-[60%] h-[30%] w-[23%] rounded-full bg-linear-to-r from-(--primary)/80 to-(--secondary)"></div>

                        <div className="absolute top-[60%] left-[10%] h-[50%] w-[40%] rounded-full bg-linear-to-tr from-(--secondary) to-(--primary)"></div>

                        <img
                            src="./src/assets/smartpos.png"
                            alt="Smart POS"
                            className="relative z-20 rounded-full object-cover select-none"
                            style={{ top: '13%', left: '0%', width: '100%', height: '100%' }}
                        />

                    </div>
                    <p className='mt-4 text-base leading-7 max-w-lg text-wrap'>Our corporate card offers increased purchasing power, secure transactions, and easy expense tracking, providing a perfect solution for businesses of all sizes. With the TeziPay Corporate Card, enjoy benefits such as simplified reporting, comprehensive expense management, and excellent customer service. TeziPay Corporate Card provides a flexible, convenient, and secure way to manage your business expenses. Explore the advantages of the TeziPay Corporate Card today, and take the first step towards smarter, more efficient business transactions.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <Link to="/get-started">
                            <button className='primary-button'>Get Started</button>
                        </Link>
                        <Link to="/contact-us">
                            <button className='secondary-button'>Contact Us</button>
                        </Link>
                    </div>
                </div>

                <div className="relative hidden lg:flex w-1/2 justify-center items-center">
                    <div className="absolute h-36 w-36 rounded-full bg-linear-to-r from-(--primary)/80 to-(--secondary) z-10" style={{ top: '68%', left: '72%' }}></div>

                    <div className="absolute h-48 w-48 rounded-full bg-linear-to-tr from-(--secondary) to-(--primary) z-10" style={{ top: '70%', left: '6%' }}></div>

                    <img
                        src="./src/assets/smartcard.png"
                        alt="Smart POS"
                        className="relative z-20 rounded-full object-cover select-none"
                        style={{ top: '13%', left: '0%', width: '1020px', height: '500px' }}
                    />


                </div>
            </section>

            <section className="max-w-337.5 w-full mx-auto px-10 py-20 lg:px-20 lg:py-25 relative">
                <div className="w-full md:max-w-3xl lg:max-w-5xl mx-auto bg-(--primary)/10 rounded-3xl px-8 py-12 lg:px-16 lg:py-14 lg:h-115 relative">

                    <div className=" flex flex-col lg:grid lg:grid-cols-2 justify-between gap-8 mb-10 lg:relative left-[-10%] -top-5 lg:w-[110%]">
                        <h2 className="text-[30px] md:text-[34px] lg:text-[38px] leading-[1.15] font-bold w-full lg:scale-110 text-center lg:text-left">
                            Effortless, Seamless,
                            and Smart!
                        </h2>
                        <p className="text-[#555] leading-8 md:pt-3 text-center md:text-center lg:text-left">
                            Catalyzing Commerce with Streamlined Transactions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start justify-center max-w-5xl mx-auto lg:mx-0">
                        {cards.map((card) => (
                            <div
                                key={card.number}
                                className={`group rounded-[28px] p-8 text-center transition-all duration-300 ease-out border-2 cursor-pointer
                                    ${card.active
                                        ? "bg-white border-transparent shadow-xl z-10"
                                        : `
                                    bg-white border-transparent shadow-xl
                                    lg:bg-transparent lg:shadow-none
                                    lg:hover:bg-white lg:hover:rounded-[28px]
                                    lg:hover:shadow-xl lg:hover:-translate-y-4
                                    lg:hover:z-10`}`}
                            >
                                <h1 className="text-2xl lg:text-3xl font-bold text-(--primary) mb-3">
                                    {card.number}
                                </h1>
                                <h2 className="text-lg lg:text-xl font-bold leading-snug">
                                    {card.title}
                                </h2>
                                <p
                                    className={`text-sm text-[#666] mt-4 leading-6 overflow-hidden transition-all duration-300 ease-out
                                    ${card.active
                                            ? "max-h-40 opacity-100"
                                            : `
                                    max-h-40 opacity-100
                                    lg:max-h-0 lg:opacity-0
                                    lg:group-hover:max-h-40
                                    lg:group-hover:opacity-100
                                    lg:group-hover:mt-4 `}`}
                                >
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute left-[-20%] top-[50%] grid grid-cols-20 gap-3 opacity-30">
                    {[...Array(600)].map((_, i) => (
                        <span
                            key={i}
                            className="w-2 h-2 bg-gray-300 rounded-full"
                        />
                    ))}
                </div>
            </section>

            <section className="max-w-337.5 relative w-full mx-auto px-10 py-20 lg:px-20 lg:py-25 lg:grid grid-cols-2 min-h-112" >
                <img
                    src="./src/assets/greyCircle.png"
                    alt=""
                    className="absolute top-16 -right-20 w-100 h-auto pointer-events-none select-none"
                />
                <div className="absolute right-[-20%] top-[80%] grid grid-cols-20 gap-3 opacity-30 z-0">
                    {[...Array(600)].map((_, i) => (
                        <span
                            key={i}
                            className="w-2 h-2 bg-gray-300 rounded-full"
                        />
                    ))}
                </div>
                <div className="flex gap-6 lg:gap-8 items-center justify-center max-w-5xl mx-auto lg:mb-0 mb-10 z-10">

                    <div className="rounded-t-[55px] rounded-bl-[55px] bg-(--secondary) lg:w-[60%] lg:h-[70%] w-62.5  relative z-0 flex justify-center items-start p-4">
                        <h1 className="md:text-xl lg:text-3xl text-lg font-bold text-white text-center py-10 px-4">
                            Transforming
                            Your Business
                            Transactions
                            with Ease!
                        </h1>
                        <div className="rounded-t-[55px] rounded-bl-[55px] bg-(--primary)/50 w-[45%] h-[50%] absolute bottom-[-10%] right-[-10%] z-0 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" fill="var(--primary)" className="bi bi-arrow-right-short -rotate-45" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="lg:grid grid-cols-2 flex flex-col lg:gap-8 lg:items-start items-center justify-center lg:max-w-5xl max-w-xl gap-4 mx-auto lg:mx-0 z-10">

                    <div className="flex flex-col lg:justify-start lg:items-start gap-6 lg:gap-4">

                        <h1 className="text-3xl lg:text-5xl font-bold text-(--primary)/40">
                            Key Feature
                        </h1>

                        {leftFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-1.5 h-20 bg-(--primary) rounded-full"></div>

                                <div>
                                    <h3 className="text-xl font-bold text-black">
                                        {feature.title}
                                    </h3>

                                    <p className="text-md text-gray-800 leading-tight mt-1">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:justify-start lg:items-start gap-6 lg:gap-4">

                        {rightFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-1.5 h-20 bg-(--primary) rounded-full"></div>

                                <div>
                                    <h3 className="text-xl font-bold text-black">
                                        {feature.title}
                                    </h3>

                                    <p className="text-md text-gray-800 leading-tight mt-1">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="section pb-20 flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="relative flex w-full max-w-5xl flex-col items-center gap-4 rounded-[40px] sm:rounded-full border-2 border-(--primary) px-6 py-8 sm:p-10 text-center">

                        <p className="max-w-3xl text-base sm:text-lg leading-7">
                            Unlock the Potential of Seamless Banking with TeziPay Corporate Card
                        </p>

                        <div className="absolute -bottom-7 sm:-bottom-6 rounded-full bg-(--secondary) px-6 py-3 sm:px-8 sm:py-2">
                            <p className="text-sm sm:text-lg font-bold text-white text-center">
                                For more details, feel free to reach out to +91-9811331229
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <Footer />
            </footer>
        </main>
    )
}

export default SmartCard