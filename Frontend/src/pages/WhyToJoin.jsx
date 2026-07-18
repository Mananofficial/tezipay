import React from 'react'
import HTMLContent from '../components/HTMLContent';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { usePages } from '../hooks/usePages';

const WhyToJoin = () => {
    const { pageData, loading } = usePages('why-to-join');

    if (loading || !pageData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            </div>
        );
    }

    return (
        <main>
            <header>
                <Navbar />
            </header>

            <section
                className="relative w-full h-[60vh] sm:h-[70vh] lg:h-screen bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${pageData?.hero?.backgroundImage})`,
                }}
            >
                <div className="relative z-10 h-full max-w-337.5 mx-auto px-6 sm:px-10 lg:px-20 flex items-center justify-end">
                    <h1 className="max-w-lg font-bold leading-tight text-xl sm:text-3xl lg:text-5xl">
                        {pageData?.hero?.heading}
                    </h1>
                </div>
            </section>

            <section className="section max-w-4xl mx-auto flex items-center justify-center">
                <p className="text-lg leading-relaxed font-semibold text-center ">
                    {pageData?.sections?.[0]?.description}
                </p>
            </section>

            <section className=" flex flex-col items-center justify-center">
                <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center gap-20">
                    <h2 className="text-5xl text-center font-bold text-(--primary) mb-4">
                        {pageData?.sections?.[0]?.title}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {pageData?.sections?.[0]?.cards?.map((item, index) => (
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
                    {pageData?.sections?.[0]?.subtitle}
                </p>
            </section>

            <section className="pb-30 flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="relative flex w-full max-w-5xl flex-col items-center gap-4 rounded-[40px] sm:rounded-full border-2 border-(--primary) px-6 py-8 sm:p-10 text-center">

                        <p className="max-w-3xl text-base sm:text-lg leading-7">
                            {pageData?.cta?.description }
                        </p>

                        <div className="absolute -top-7 sm:-top-6 rounded-full bg-(--secondary) px-6 py-3 sm:px-8 sm:py-2">
                            <p className="text-sm sm:text-lg font-bold text-white text-center">
                                {pageData?.cta?.heading}
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