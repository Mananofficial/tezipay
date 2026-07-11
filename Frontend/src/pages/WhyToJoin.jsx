import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const WhyToJoin = () => {
    const values = [
        {
            title: "Innovation-Driven Culture",
            description:
                "We thrive on innovation and encourage our employees to think creatively, challenge the status quo, and bring unique ideas to the table.",
        },
        {
            title: "Customer-Centric Approach",
            description:
                "Everything we build starts with our customers. We focus on delivering exceptional experiences through reliable and user-friendly solutions.",
        },
        {
            title: "Collaborative Environment",
            description:
                "We believe teamwork and open communication lead to better ideas, stronger relationships, and greater success.",
        },
        {
            title: "Growth & Learning",
            description:
                "We invest in continuous learning, professional development, and creating opportunities for every team member to grow.",
        },
    ];

    return (
        <main>
            <header>
                <Navbar />
            </header>

            <section
                className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('./src/assets/whytojoin.png')",
                }}
            >
                <div className="relative z-10 h-full max-w-337.5 mx-auto px-6 sm:px-10 lg:px-20 flex items-center justify-end">
                    <h1 className="max-w-lg font-bold leading-tight text-xl sm:text-3xl lg:text-5xl">
                        Step into the Future with TeziPay
                    </h1>
                </div>
            </section>

            <section className="section max-w-4xl mx-auto flex items-center justify-center">
                <p className="text-lg leading-relaxed font-semibold text-center ">
                    At TeziPay, we believe in empowering businesses, and to do that, we understand the importance of empowering our team first. We are always on the lookout for individuals who are passionate about making a difference and shaping the future of fintech in India.
                </p>
            </section>

            <section className=" flex flex-col items-center justify-center">
                <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center gap-20">
                    <h2 className="text-5xl text-center font-bold text-(--primary) mb-4">Why Join TeziPay?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl py-10 px-12 shadow-xl"
                            >
                                <div className="absolute -top-4 left-4 rounded-t-2xl rounded-bl-2xl bg-(--secondary) px-4 py-2 text-lg font-semibold text-white">
                                    {item.title}
                                </div>

                                <p className="text-gray-700 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section max-w-4xl mx-auto flex items-center justify-center">
                <p className="text-lg leading-relaxed text-center ">
                    Join us, and be a part of our journey to change the way businesses handle their finances in India. At <b className="underline text-(--primary) italic"> TeziPay</b>, we are not just building a company; we are building careers and creating opportunities for everyone to thrive.
                </p>
            </section>

            <section className="pb-30 flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="relative flex w-full max-w-5xl flex-col items-center gap-4 rounded-[40px] sm:rounded-full border-2 border-(--primary) px-6 py-8 sm:p-10 text-center">

                        <p className="max-w-3xl text-base sm:text-lg leading-7">
                            Send us your resume at careers@tezipay.com.
                            We are always on the lookout for talented individuals to join our growing team!
                        </p>

                        <div className="absolute -top-7 sm:-top-6 rounded-full bg-(--secondary) px-6 py-3 sm:px-8 sm:py-2">
                            <p className="text-sm sm:text-lg font-bold text-white text-center">
                                Interested in joining our team?
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

export default WhyToJoin