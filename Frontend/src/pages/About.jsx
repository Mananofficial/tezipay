import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <main>
            <header>
                <Navbar />
            </header>

            <section
                className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('./src/assets/about.png')",
                }}
            >
                <div className="relative z-10 h-full max-w-337.5 mx-auto px-6 sm:px-10 lg:px-20 flex items-center">
                    <h1 className="max-w-xl font-bold leading-tight text-4xl sm:text-5xl lg:text-7xl">
                        Empowering
                        <br />
                        Business Transactions
                    </h1>
                </div>
            </section>

            <section className="section">
                <div className="max-w-4xl mx-auto flex flex-row items-start justify-center relative">
                    <div className="absolute left-[-30%] top-[-40%] grid grid-cols-20 gap-3 opacity-30 z-0">
                        {[...Array(600)].map((_, i) => (
                            <span
                                key={i}
                                className="w-2 h-2 bg-gray-300 rounded-full"
                            />
                        ))}
                    </div>
                    <h1 className="text-4xl font-bold w-full min-w-50 mt-5 relative z-10 left-20">
                        Our Story
                    </h1>
                    <div className="box bg-(--primary)/6 rounded-4xl py-10 px-0 sm:px-10 lg:px-20 border border-black/10 relative">
                        <p className="text-lg leading-relaxed font-semibold ">
                            TeziPay is a prominent fintech firm providing financial services to SMEs across India. We offer exceptional, cost-efficient financial services, powering a fintech platform integrated with digital banking, digital payments, micro-lending, GST tax filing, payroll services, insurance, and a host of other crucial services. Our solutions cater to the needs of numerous underserved and under-banked Indian businesses.
                        </p>
                        <div className="rounded-4xl bg-(--primary)/8 w-[50%] h-[30%] absolute -bottom-10 -right-6 border border-black/10"></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-2xl font-bold text-(--secondary)">
                            Empowering SMEs
                        </h1>
                        <p className='font-bold'>Our mission is to support SME owners and operators in growing their businesses through our network of secure, easy-to-use, high-quality, and affordable financial service solutions.</p>
                    </div>
                    <div className="flex flex-col justify-start items-end gap-6 col-span-1 lg:col-span-2">
                        <h1 className="text-2xl font-bold text-(--secondary)">
                            Empowering SMEs
                        </h1>
                        <p className='text-right font-bold'>Our team consists of highly skilled professionals with extensive experience across various fields including banking, technology, security, legal, compliance, and financial services. We are committed to working tirelessly to deliver the best-customized financial solutions that cater to your business needs.</p>
                    </div>
                    <div className="flex flex-col gap-6 relative">
                            <h1 className="text-6xl font-bold text-(--secondary) absolute top-1 left-1 opacity-40">
                                Our Mission
                            </h1>
                        <h1 className="text-6xl font-bold text-(--secondary)">
                            Our Mission
                        </h1>
                    </div>
                    <div className="flex justify-end items-start gap-6 col-span-1 lg:col-span-2">
                        <p className='text-right font-bold'>At TeziPay, our mission is to revolutionize the financial landscape for small and medium-sized enterprises in India. We aim to bridge the gap between traditional banking and the underserved businesses by providing secure, affordable, and user-friendly digital financial solutions. We are committed to helping businesses grow, fostering economic prosperity, and contributing to the digital transformation of India.</p>
                    </div>

                </div>
            </section>

            <footer>
                <Footer />
            </footer>

        </main>
    )
}

export default About