import React, { useEffect } from 'react'
import HTMLContent from '../components/HTMLContent';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useHomepage } from '../hooks/useHomepage'
import { Link } from 'react-router'
import { resolveImageUrl } from '../utils/resolveImageUrl'

const Home2 = () => {
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

    const cards = [
        { top: "1%", left: "35%", rotate: 0, color: "#FFE6D6", title: "Lorem ipsum dolor sit amet consectetur" },
        { top: "9%", left: "53%", rotate: 45, color: "#FFD4D1", title: "Lorem ipsum dolor sit amet consectetur" },
        { top: "28%", left: "61%", rotate: 90, color: "#FFE6D6", title: "Lorem ipsum dolor sit amet consectetur" },
        { top: "47%", left: "53%", rotate: 135, color: "#FFD4D1", title: "Lorem ipsum dolor sit amet consectetur" },
        { top: "55%", left: "35%", rotate: 180, color: "#FFE6D6", title: "Lorem ipsum dolor sit amet consectetur" },
        { top: "47%", left: "17%", rotate: 225, color: "#FFD4D1", title: "Lorem ipsum dolor sit amet consectetur" },
        { top: "28%", left: "10%", rotate: 270, color: "#FFE6D6", title: "Lorem ipsum dolor sit amet consectetur" },
        { top: "9%", left: "17%", rotate: 315, color: "#FFD4D1", title: "Lorem ipsum dolor sit amet consectetur" },
    ];

    return (
        <main className='bg-(--primaryBackground) mt-20 montserrat-font'>
            <header>
                <Navbar props={homepageData?.navbar} />
            </header>
            <section className='section container flex flex-col lg:flex-row items-center justify-between gap-10"'>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">

                    <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold leading-tight lg:leading-17 max-w-xl"><HTMLContent content={homepageData?.heroSection.heading || "Transforming Business Finance for Success"} /></h1>
                    <div className="relative flex justify-center items-center mt-8 mb-8 lg:hidden">

                        <div className="absolute top-0 right-2 h-24 w-24 rounded-full bg-linear-to-r from-(--primary)/80 to-(--secondary)"></div>

                        <div className="absolute -bottom-8 left-0 h-32 w-32 rounded-full bg-linear-to-tr from-(--secondary) to-(--primary)"></div>

                        <img
                            src={resolveImageUrl(homepageData?.heroSection.rightImage)}
                            alt="hero"
                            className="relative z-20 w-72 h-72 rounded-full object-cover"
                        />

                    </div>
                    <p className='mt-4 text-base leading-7 max-w-xl'><HTMLContent content={homepageData?.heroSection.subheading || "Embrace the ease and efficiency of TeziPay and watch your business thrive."} /></p>

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
                        src={resolveImageUrl(homepageData?.heroSection.rightImage) || "./src/assets/hero.jpg"}
                        alt="hero"
                        className="relative z-20 w-120 h-120 rounded-full object-cover select-none"
                    />
                </div>
            </section>

            <section className="section w-full bg-(--secondaryBackground)">
                <div className="container flex flex-col items-center justify-center gap-6 text-center">

                    <h1 className="max-w-5xl text-3xl sm:text-4xl lg:text-[45px] font-bold leading-tight lg:leading-10"><HTMLContent content={homepageData?.heroBelowSection.title || "Empowering MSMEs with Tailored Fintech Solutions"} />
                    </h1>

                    <p className="max-w-4xl text-base leading-7 px-2 sm:px-6 lg:px-0"><HTMLContent content={homepageData?.heroBelowSection.subtitle || "At TeziPay, we reshape the financial landscape with innovative, customer-centric fintech solutions. Our tailored banking services empower MSMEs, breaking down barriers and catalyzing growth. Experience the fusion of advanced fintech and personalized service. With TeziPay, accelerate faster, further."} />
                    </p>

                </div>
            </section>

            <section className="relative mt-10 py-12 lg:py-16 overflow-x-clip">
                <div className="container relative mx-auto px-4">

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight font-bold text-center pb-10"><HTMLContent content={homepageData?.blueprint.header || "Your Success, Our Blueprint"} />
                    </h1>

                    <div className="absolute right-0 top-[-8%] w-[clamp(4.5rem,14vw,12.5rem)] h-[clamp(4.5rem,14vw,12.5rem)] rounded-[20%] bg-linear-to-r from-(--primary)/15 to-(--secondary)/15 pointer-events-none z-20"></div>
                    <div className="absolute right-[-4%] top-[-10%] z-20 w-[clamp(3.5rem,11vw,11.25rem)] h-[clamp(3.5rem,11vw,11.25rem)] rounded-[20%] bg-linear-to-tr from-(--primary)/10 to-(--secondary)/30 pointer-events-none"></div>

                    <img
                        src="./src/assets/griddot.png"
                        alt=""
                        className="absolute top-[10%] left-[-6%] w-[clamp(6rem,40vw,30rem)] h-auto pointer-events-none select-none opacity-70 sm:opacity-100"
                    />

                    <div className="relative mx-auto mt-10 w-full max-w-225">

                        <div className="relative w-full max-w-175 aspect-square mx-auto @container">
                            {cards.map((item, index) => (
                                <div
                                    key={index}
                                    className="absolute"
                                    style={{
                                        top: item.top,
                                        left: item.left,
                                        width: "30%",
                                        height: "30%",
                                    }}
                                >
                                    <div className="relative w-full h-full">
                                        <svg
                                            viewBox="0 0 500 500"
                                            className="w-full h-full"
                                            style={{ transform: `rotate(${item.rotate}deg)` }}
                                        >
                                            <path
                                                d="M0 60 Q250 -20 480 50 L370 370 Q260 525 150 380 Z"
                                                fill={item.color}
                                            />
                                        </svg>

                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <p
                                                className="text-center leading-tight wrap-break-words"
                                                style={{
                                                    fontSize: "clamp(7px, 2.2cqw, 13px)",
                                                    width: "50%",
                                                    marginTop: "-3.3%",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2, 
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="logo rounded-full absolute top-[43%] left-[50.5%] w-[22%] h-[22%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                <img
                                    src={resolveImageUrl(homepageData?.blueprint.logo) || "./src/assets/logo.png"}
                                    alt="Logo"
                                    className="w-full h-full object-contain select-none"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="pb-20 flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="relative flex w-full max-w-5xl flex-col items-center gap-4 rounded-[40px] sm:rounded-full border-2 border-(--primary) px-6 py-8 sm:p-10 text-center">

                        <p className="max-w-3xl text-base sm:text-lg leading-7"><HTMLContent content={homepageData?.note.note || "At TeziPay, we understand the unique challenges faced by MSMEs. Our dedicated team is here to provide personalized support and guidance, ensuring that your business thrives in a competitive landscape. Whether you have questions about our services or need assistance with your account, we're just a call away. Reach out to us today and experience the difference of working with a fintech partner that truly cares about your success."} />
                        </p>

                        <div className="absolute -bottom-7 sm:-bottom-6 rounded-full bg-(--secondary) px-6 py-3 sm:px-8 sm:py-2">
                            <p className="text-sm sm:text-lg font-bold text-white text-center"><HTMLContent content={homepageData?.note.contact || "Call us now +91-9811331229"} />
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

export default Home2