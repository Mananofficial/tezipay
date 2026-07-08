import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router'

const SmartPOS = () => {
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
                    style={{ top: '30%', left: '-22%' }}>
                    <div className="absolute h-30 w-30 rounded-full bg-(--primary)/14 z-10"
                        style={{ bottom: '-4%', right: '-4%' }}></div>

                </div>


                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">

                    <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-17 max-w-xl">Universal Smart POS </h1>
                    <p className="text-lg lg:text-[20px] max-w-xl">Your Ultimate Digital Payment Terminal with TeziPay</p>
                    <div className="relative flex justify-center items-center mt-8 mb-8 lg:hidden">

                        <div className="absolute top-0 right-2 h-24 w-24 rounded-full bg-linear-to-r from-(--primary)/80 to-(--secondary)"></div>

                        <div className="absolute -bottom-8 left-0 h-32 w-32 rounded-full bg-linear-to-tr from-(--secondary) to-(--primary)"></div>

                        <div className="h-72 w-72 rounded-full bg-linear-to-tr from-(--secondary) to-(--primary)/80 z-20">
                            <img
                                src="./src/assets/hero.jpg"
                                alt="hero"
                                className="relative z-20 w-54 h-54 rounded-full object-cover"
                                style={{ top: '13%', left: '13%' }}
                            />
                        </div>

                    </div>
                    <p className='mt-4 text-base leading-7 max-w-lg text-wrap'>Say goodbye to your digital payment terminal concerns with our Universal Smart POS solution. TeziPay's POS terminal is a high-speed, secure Android device equipped with 4G connectivity, designed to cater to all your transaction needs. This all-in-one solution allows for effortless payment acceptance, sales tracking, and settlement processing. Experience the convenience and efficiency of a user-friendly billing machine, complete with a touchscreen interface.</p>

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

                    <div className="h-120 w-120 rounded-full bg-linear-to-tr from-(--secondary) to-(--primary)/80 z-20">
                        <img
                            src="./src/assets/hero.jpg"
                            alt="hero"
                            className="relative z-20 rounded-full object-cover select-none"
                            style={{ top: '13%', left: '13%', width: '74%', height: '74%' }}
                        />
                    </div>

                </div>
            </section>

            <section className='max-w-337.5 w-full mx-auto px-10 py-20 lg:px-20 lg:py-25 flex flex-col lg:flex-row items-center justify-between gap-10 relative'>

                <div className='w-[80%] h-[30%] bg-(--primary)/10 flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 p-6 mr-20 mx-auto rounded-2xl shadow-lg'>
                    <div className="flex lg:flex-row flex-col items-center lg:items-center justify-center gap-4 lg:gap-6">
                        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-17 text-center lg:text-left lg:relative top-0 -left-40 min-w-2xl">
                            Simplifying Payments,
                            Amplifying Profits
                        </h1>
                        <p className='mt-4 leading-7 text-wrap text-center lg:text-left lg:text-md text-sm min-w-3xl'>
                            Empower your business with a Next-Gen POS, fuelled by the latest advancements in financial technology, brought to you by TeziPay.
                        </p>
                    </div>

                    <div className="cards flex flex-col lg:flex-row items-center justify-between gap-6 mt-8 w-full">
                        <div className="card group flex flex-col items-center justify-center gap-4 p-6 max-w-1/3 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                            <h1 className='text-2xl lg:text-3xl text-(--primary)'>01</h1>
                            <h2 className='text-lg lg:text-xl font-bold text-center'>Amplify Your Earnings</h2>
                            <p className='text-xs lg:text-md text-center'>Avoid the need for upfront collateral and ensure your funds are secured.</p>
                        </div>
                        <div className="card group flex flex-col items-center justify-center gap-4 p-6 max-w-1/3 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                            <h1 className='text-2xl lg:text-3xl text-(--primary)'>01</h1>
                            <h2 className='text-lg lg:text-xl font-bold text-center'>Amplify Your Earnings</h2>
                            <p className='text-xs lg:text-md text-center'>Avoid the need for upfront collateral and ensure your funds are secured.</p>
                        </div>
                        <div className="card group flex flex-col items-center justify-center gap-4 p-6 max-w-1/3 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                            <h1 className='text-2xl lg:text-3xl text-(--primary)'>01</h1>
                            <h2 className='text-lg lg:text-xl font-bold text-center'>Amplify Your Earnings</h2>
                            <p className='text-xs lg:text-md text-center'>Avoid the need for upfront collateral and ensure your funds are secured.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default SmartPOS