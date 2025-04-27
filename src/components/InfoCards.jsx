import React, { useRef } from "react";
import { RevealOnScroll } from './RevealOnScroll';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const InfoCards = ({ title, data }) => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400, // Scroll by the width of 1 card
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400, // Scroll by the width of 1 card
                behavior: "smooth",
            });
        }
    };

    const isScrollable = data.length > 3; // Show scrollable container only if there are more than 3 cards

    return (
        <section id={title.toLowerCase()} className="h-1/2 flex flex-col justify-center py-20">
            <RevealOnScroll>
                <div className="text-center my-8 w-9/10 mx-auto">
                    <h2 className="text-4xl font-semibold text-[var(--headerText)] mb-4">{title}</h2>
                    <div className="relative w-9/10 mx-auto">
                        {isScrollable ? (
                            <>
                                {/* Left Arrow */}
                                <button
                                    onClick={scrollLeft}
                                    className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-[var(--cardBackground)] text-[var(--bodyText)] p-2 rounded-full shadow-md hover:bg-[var(--headerText)] transition z-10 cursor-pointer"
                                >
                                    <FaArrowLeft />
                                </button>

                                {/* Scrollable Container */}
                                <div
                                    ref={scrollContainerRef}
                                    className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
                                    style={{
                                        maxWidth: "100%", // Ensure the container doesn't stretch
                                        overflow: "hidden", // Hide overflowing cards
                                    }}
                                >
                                    {data.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[var(--cardBackground)] p-4 rounded-2xl shadow-lg flex flex-col items-center"
                                            style={{
                                                width: "100%", // Full width for one card on smaller screens
                                                maxWidth: "400px", // Fixed width for each card
                                                flexShrink: 0, // Prevent cards from shrinking
                                            }}
                                        >
                                            <img src={item.image} alt={item.name} className="mb-4" />
                                            <h3 className="text-xl font-semibold text-[var(--headerText)] mb-2">
                                                {item.name} <br /> {item.date}
                                            </h3>
                                            <p className="text-[var(--bodyText)] text-sm">{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Arrow */}
                                <button
                                    onClick={scrollRight}
                                    className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-[var(--cardBackground)] text-[var(--bodyText)] p-2 rounded-full shadow-md hover:bg-[var(--headerText)] transition z-10 cursor-pointer"
                                >
                                    <FaArrowRight />
                                </button>
                            </>
                        ) : (
                            /* Static Grid Layout for 3 or Fewer Cards */
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[var(--cardBackground)] p-4 rounded-2xl shadow-lg flex flex-col items-center"
                                    >
                                        <img src={item.image} alt={item.name} className="w-20 h-20 mb-4" />
                                        <h3 className="text-xl font-semibold text-[var(--headerText)] mb-2">
                                            {item.name} <br /> {item.date}
                                        </h3>
                                        <p className="text-[var(--bodyText)] text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
