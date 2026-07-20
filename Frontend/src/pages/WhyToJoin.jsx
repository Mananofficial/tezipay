import React from 'react'
import HTMLContent from '../components/HTMLContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { usePages } from '../hooks/usePages'

const WhyToJoin = () => {
    const { pageData, loading } = usePages('why-to-join')

    if (loading || !pageData) {
        return (
            <div className="h-screen flex items-center justify-center bg-(--primaryBackground)">
                <div className="rounded-full h-20 w-20 bg-(--primary) animate-ping"></div>
            </div>
        )
    }

    return (
        <main>
            <header>
                <Navbar />
            </header>

            <section
                className="relative w-full h-[55vh] sm:h-[70vh] lg:h-screen bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${pageData?.hero?.backgroundImage})`,
                }}
            >
                <div className="relative z-10 h-full max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-20 flex items-center justify-center lg:justify-end">
                    <h1
                        className="max-w-xs sm:max-w-lg lg:max-w-2xl text-center lg:text-right font-bold leading-tight text-3xl sm:text-5xl lg:text-6xl"
                        data-aos="fade-left"
                    >
                        {pageData?.hero?.heading}
                    </h1>
                </div>
            </section>

            <section className="py-16 sm:py-20 px-5 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    <p
                        className="text-base sm:text-lg lg:text-xl leading-relaxed font-semibold text-center"
                        data-aos="fade-up"
                    >
                        {pageData?.sections?.[0]?.description}
                    </p>
                </div>
            </section>

            <section className="py-10 sm:py-16 px-5 sm:px-8">
                <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 sm:gap-16 lg:gap-20">
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-(--primary)"
                        data-aos="zoom-in"
                    >
                        {pageData?.sections?.[0]?.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
                        {pageData?.sections?.[0]?.cards?.map((item, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="relative rounded-3xl bg-white shadow-xl border border-gray-200 px-6 sm:px-8 py-10"
                            >
                                <div className="absolute -top-5 left-5 rounded-t-2xl rounded-bl-2xl bg-(--secondary) px-5 py-2 text-sm sm:text-base font-semibold text-white">
                                    {item.title}
                                </div>

                                <div className="mt-2 text-gray-700 leading-7">
                                    <HTMLContent content={item.description} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 px-5 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="text-base sm:text-lg leading-relaxed text-center"
                        data-aos="fade-up"
                    >
                        <HTMLContent content={pageData?.sections?.[0]?.subtitle} />
                    </div>
                </div>
            </section>

            <section className="pb-20 sm:pb-28 lg:pb-32 px-5 sm:px-8">
                <div className="max-w-6xl mx-auto flex justify-center">
                    <div
                        data-aos="zoom-in-up"
                        className="relative w-full max-w-5xl flex flex-col items-center rounded-[32px] sm:rounded-full border-2 border-(--primary) px-6 sm:px-10 lg:px-14 py-10 sm:py-12 text-center"
                    >
                        <div className="absolute -top-6 sm:-top-7 rounded-full bg-(--secondary) px-5 sm:px-8 py-2 sm:py-3">
                            <p className="text-sm sm:text-lg font-bold text-white">
                                {pageData?.cta?.heading}
                            </p>
                        </div>

                        <div className="max-w-3xl mt-4 text-base sm:text-lg leading-7">
                            <HTMLContent content={pageData?.cta?.description} />
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