import CV from "../assets/CV_EN.pdf";
import { RevealOnScroll } from './RevealOnScroll';

export const Home = () => {
    return (
        <section id="home">
            <RevealOnScroll>
                <div className="w-screen h-screen bg-radial-ellipse flex flex-col items-center justify-center text-white">
                    {/* Main Content */}
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl md:text-6xl font-light bg-clip-text text-transparent bg-gradient-to-r from-[#364DEA] to-[#B6ACF8]">
                            Hello, I'm Henrik
                        </h1>
                        <a href={CV} download="CV_Henrik_Huynh" className="mt-8">
                            <button className="px-6 py-3 bg-[#b6acf880] rounded-xl text-white text-lg shadow-md hover:bg-[#b6acf8b7] transition cursor-pointer">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};