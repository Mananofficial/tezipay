import React from 'react'
import HTMLContent from '../components/HTMLContent';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { usePages } from '../hooks/usePages';
import AOS from 'aos';

const About = () => {
    const { pageData, loading } = usePages("about");
    AOS.init({
        duration: 1000,
        once: true,
    });

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
                className="relative w-full h-[55vh] sm:h-[65vh] lg:h-screen bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${pageData?.hero?.backgroundImage})`,
                }}
                data-aos="fade-up"
            >
                <div className="relative z-10 h-full max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-20 flex items-center">
                    <h1 className="max-w-xs sm:max-w-xl lg:max-w-3xl font-bold leading-tight text-3xl sm:text-5xl lg:text-7xl">
                        {pageData?.hero?.heading}
                    </h1>
                </div>
            </section>

            <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-20 overflow-hidden">
                <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    <div className="absolute hidden lg:grid left-[-18%] top-[-25%] grid-cols-20 gap-3 opacity-30 z-0">
                        {[...Array(600)].map((_, i) => (
                            <span
                                key={i}
                                className="w-2 h-2 bg-gray-300 rounded-full"
                            />
                        ))}
                    </div>

                    <div
                        className="relative z-10 lg:w-1/3"
                        data-aos="fade-right"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            {pageData?.sections?.[0]?.title}
                        </h1>
                    </div>

                    <div
                        className="relative lg:w-2/3 bg-(--primary)/6 rounded-3xl lg:rounded-4xl border border-black/10 p-6 sm:p-8 lg:p-12"
                        data-aos="fade-left"
                    >
                        <p className="text-base sm:text-lg leading-relaxed font-semibold">
                            {pageData?.sections?.[0]?.description}
                        </p>

                        <div className="hidden lg:block rounded-4xl bg-(--primary)/8 w-1/2 h-1/3 absolute -bottom-8 -right-6 border border-black/10" />
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    <div className="flex flex-col gap-5" data-aos="fade-up">
                        <h1 className="text-2xl sm:text-3xl font-bold text-(--secondary)">
                            {pageData?.leftFeatures?.[0]?.title}
                        </h1>
                        <div className="font-bold text-base sm:text-lg leading-relaxed">
                            <HTMLContent content={pageData?.leftFeatures?.[0]?.description} />
                        </div>
                    </div>

                    <div
                        className="flex flex-col gap-5 lg:items-end lg:text-right col-span-1 lg:col-span-2"
                        data-aos="fade-up"
                    >
                        <h1 className="text-2xl sm:text-3xl font-bold text-(--secondary)">
                            {pageData?.rightFeatures?.[0]?.title}
                        </h1>
                        <div className="font-bold text-base sm:text-lg leading-relaxed">
                            <HTMLContent content={pageData?.rightFeatures?.[0]?.description} />
                        </div>
                    </div>

                    <div className="relative pt-6" data-aos="fade-up">
                        <h1 className="relative text-5xl sm:text-6xl font-bold text-(--secondary)">
                            {pageData?.leftFeatures?.[1]?.title}
                        </h1>

                        <h1 className="absolute top-7 left-2 text-5xl sm:text-6xl font-bold text-(--secondary) opacity-20 select-none w-full">
                            {pageData?.leftFeatures?.[1]?.title}
                        </h1>
                    </div>

                    <div
                        className="col-span-1 lg:col-span-2 flex lg:justify-end"
                        data-aos="fade-up"
                    >
                        <div className="font-bold text-base sm:text-lg leading-relaxed lg:text-right max-w-3xl">
                            <HTMLContent content={pageData?.rightFeatures?.[1]?.description} />
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

export default About