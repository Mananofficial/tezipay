import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useHomepage } from '../hooks/useHomepage'
import { Link } from 'react-router'

const Home = () => {
    const { homepageData, loading } = useHomepage();

    if (loading) {
        return (
            <div>
                <div className="flex justify-center items-center h-screen">
                    <div className="rounded-full h-20 w-20 bg-(--primary) animate-ping"></div>
                </div>
            </div>
        )
    }

    return (
        <main className='bg-(--primaryBackground) mt-20 montserrat-font'>
            <header>
                <Navbar props={homepageData?.navbar} />
            </header>
            <section className='section container flex flex-col lg:flex-row items-center justify-between gap-10"'>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">

                    <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold leading-tight lg:leading-17 max-w-xl">{homepageData?.heroSection.heading || "Transforming Business Finance for Success"}</h1>
                    <div className="relative flex justify-center items-center mt-8 mb-8 lg:hidden">

                        <div className="absolute top-0 right-2 h-24 w-24 rounded-full bg-linear-to-r from-(--primary)/80 to-(--secondary)"></div>

                        <div className="absolute -bottom-8 left-0 h-32 w-32 rounded-full bg-linear-to-tr from-(--secondary) to-(--primary)"></div>

                        <img
                            src={homepageData?.heroSection.rightImage}
                            alt="hero"
                            className="relative z-20 w-72 h-72 rounded-full object-cover"
                        />

                    </div>
                    <p className='mt-4 text-base leading-7 max-w-xl'>{homepageData?.heroSection.subheading || "Embrace the ease and efficiency of TeziPay and watch your business thrive."}</p>

                    <div className="mt-8 flex gap-4">
                        <Link to={homepageData?.heroSection.leftButton.url || "/get-started"}>
                            <button className='primary-button'>{homepageData?.heroSection.leftButton.text || "Get Started"}</button>
                        </Link>
                        <Link to={homepageData?.heroSection.rightButton.url || "/contact-us"}>
                            <button className='secondary-button'>{homepageData?.heroSection.rightButton.text || "Contact Us"}</button>
                        </Link>
                    </div>
                </div>

                <div className="relative hidden lg:flex w-1/2 justify-center items-center">
                    <div className="absolute -top-8 right-12 h-36 w-36 rounded-full bg-linear-to-r from-(--primary)/80 to-(--secondary) z-10"></div>

                    <div className="absolute -bottom-12 left-6 h-48 w-48 rounded-full bg-linear-to-tr from-(--secondary) to-(--primary) z-10"></div>

                    <img
                        src={homepageData?.heroSection.rightImage || "./src/assets/hero.jpg"}
                        alt="hero"
                        className="relative z-20 w-120 h-120 rounded-full object-cover select-none"
                    />
                </div>
            </section>

            <section className="section w-full bg-(--secondaryBackground)">
                <div className="container flex flex-col items-center justify-center gap-6 text-center">

                    <h1 className="max-w-5xl text-3xl sm:text-4xl lg:text-[45px] font-bold leading-tight lg:leading-10">
                        {homepageData?.heroBelowSection.title ||
                            "Empowering MSMEs with Tailored Fintech Solutions"}
                    </h1>

                    <p className="max-w-4xl text-base leading-7 px-2 sm:px-6 lg:px-0">
                        {homepageData?.heroBelowSection.subtitle ||
                            "At TeziPay, we reshape the financial landscape with innovative, customer-centric fintech solutions. Our tailored banking services empower MSMEs, breaking down barriers and catalyzing growth. Experience the fusion of advanced fintech and personalized service. With TeziPay, accelerate faster, further."}
                    </p>

                </div>
            </section>

            <section className="section relative py-12 lg:py-16 overflow-x-clip">
                <div className="container relative mx-auto px-4">

                    <h1 className="text-3xl md:text-4xl lg:text-[45px] leading-tight font-bold text-center">
                        {homepageData?.blueprint.header || "Your Success, Our Blueprint"}
                    </h1>

                    <div className="absolute right-0 -top-35 w-35 h-35 lg:w-50 lg:h-50 rounded-[74px] bg-linear-to-r from-(--primary)/15 to-(--secondary)/15 pointer-events-none z-20"></div>
                    <div className="absolute -right-10 -top-38 z-20 w-30 h-30 lg:w-45 lg:h-45 rounded-[74px] bg-linear-to-tr from-(--primary)/10 to-(--secondary)/30 pointer-events-none"></div>
                    <img
                        src="./src/assets/griddot.png"
                        alt=""
                        className="absolute top-10 -left-16 w-100 h-auto pointer-events-none select-none"
                    />
                    <img
                        src="./src/assets/greyCircle.png"
                        alt=""
                        className="absolute top-16 -right-20 w-100 h-auto pointer-events-none select-none"
                    />

                    <div className="hidden lg:block relative mx-auto mt-10 w-full max-w-225 aspect-1250/1035">

                        <img
                            src="./src/assets/line.png"
                            alt=""
                            className="absolute -top-40 inset-0 w-full h-full object-contain pointer-events-none select-none z-0"
                        />

                        <div
                            className="absolute z-10 flex items-center justify-center rounded-full border-4 border-blue-950 text-white text-center font-semibold"
                            style={{ top: "12%", left: "15%", width: "54%", height: "64%" }}
                        >
                            <p className="max-w-[70%] text-sm md:text-base lg:text-lg">
                                {homepageData?.blueprint.description}
                            </p>
                        </div>

                        <div
                            className="absolute z-10 flex items-center justify-center rounded-full bg-blue-950 text-white text-center font-semibold"
                            style={{ top: "13%", left: "16%", width: "52%", height: "62%" }}
                        >
                            <p className="max-w-[70%] text-sm md:text-base lg:text-lg">
                                {homepageData?.blueprint.description}
                            </p>
                        </div>

                        <div
                            className="absolute z-20 flex items-center justify-center rounded-full bg-(--secondary) text-white text-center font-semibold px-2"
                            style={{ top: "0%", left: "11%", width: "23%", height: "28%" }}
                        >
                            <span className="text-base md:text-lg lg:text-xl">
                                {homepageData?.blueprint.title}
                            </span>
                        </div>

                        <div
                            className="absolute z-20 flex items-center justify-center rounded-full bg-(--primary) text-white text-center font-semibold text-xs md:text-sm"
                            style={{ top: "12%", left: "54%", width: "13%", height: "16%" }}
                        >
                            Know more
                        </div>

                        <div
                            className="absolute z-20 rounded-[40px] md:rounded-[60px] bg-(--secondary) px-4 md:px-6 py-4 md:py-6"
                            style={{ top: "55%", left: "2%", width: "47%" }}
                        >
                            <ul className="flex flex-col gap-2 md:gap-3">
                                {homepageData?.blueprint.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-2 text-white text-xs md:text-sm lg:text-base font-semibold">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <img
                            src={homepageData?.blueprint.image || "./src/assets/hero.jpg"}
                            alt="hero"
                            className="absolute z-10 rounded-full object-cover"
                            style={{ top: "46%", left: "55%", width: "40%", height: "48%" }}
                        />
                    </div>

                    <div className="lg:hidden relative mx-auto mt-8 w-full max-w-100 aspect-400/530">

                        <img
                            src="./src/assets/line2.png"
                            alt=""
                            className="absolute top-13 inset-0 w-full h-full object-contain pointer-events-none select-none z-0"
                        />

                        <img
                            src={homepageData?.blueprint.image || "./src/assets/hero.jpg"}
                            alt="hero"
                            className="absolute z-20 rounded-full object-cover shadow-lg"
                            style={{ top: "1%", left: "47%", width: "50%", height: "37%" }}
                        />

                        <div
                            className="absolute z-20 flex items-center justify-center rounded-full bg-(--secondary) text-white text-center font-semibold px-2"
                            style={{ top: "20%", left: "4%", width: "37%", height: "27%" }}
                        >
                            <span className="text-sm">{homepageData?.blueprint.title}</span>
                        </div>

                        <div
                            className="absolute z-10 flex items-center justify-center rounded-full border-4 border-blue-950 text-white text-center"
                            style={{ top: "28%", left: "16%", width: "80%", height: "60%" }}
                        >
                        </div>

                        <div
                            className="absolute z-10 flex items-center justify-center rounded-full bg-blue-950 text-white text-center"
                            style={{ top: "30%", left: "18%", width: "76%", height: "56%" }}
                        >
                            <p className="max-w-[78%] text-xs leading-snug">
                                {homepageData?.blueprint.description}
                            </p>
                        </div>

                        <div
                            className="absolute z-20 rounded-[40px] bg-(--secondary) px-8 py-6"
                            style={{ top: "70%", left: "1%", width: "82%" }}
                        >
                            <ul className="flex flex-col gap-1.5">
                                {homepageData?.blueprint.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-2 text-white text-xs font-semibold">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div
                            className="absolute z-20 flex items-center justify-center rounded-full bg-(--primary) text-white text-center font-semibold text-xs"
                            style={{ top: "84%", left: "68%", width: "24%", height: "17%" }}
                        >
                            Know more
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="relative flex w-full max-w-5xl flex-col items-center gap-4 rounded-[40px] sm:rounded-full border-2 border-(--primary) px-6 py-8 sm:p-10 text-center">

                        <p className="max-w-3xl text-base sm:text-lg leading-7">
                            {homepageData?.note.note ||
                                "At TeziPay, we understand the unique challenges faced by MSMEs. Our dedicated team is here to provide personalized support and guidance, ensuring that your business thrives in a competitive landscape. Whether you have questions about our services or need assistance with your account, we're just a call away. Reach out to us today and experience the difference of working with a fintech partner that truly cares about your success."}
                        </p>

                        <div className="absolute -bottom-7 sm:-bottom-6 rounded-full bg-(--secondary) px-6 py-3 sm:px-8 sm:py-2">
                            <p className="text-sm sm:text-lg font-bold text-white text-center">
                                {homepageData?.note.contact || "Call us now +91-9811331229"}
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

export default Home