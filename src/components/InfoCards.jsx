import React, { useRef, useState, useEffect } from "react";
import { RevealOnScroll } from './RevealOnScroll';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const InfoCards = ({ title, data }) => {
    const scrollContainerRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Initialize with current screen width

    // Update screen width on window resize
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Function to generate cards
    const makeCards = () => {
        return data.map((item, index) => (
            <div
                key={index}
                className="bg-[var(--cardBackground)] p-4 rounded-2xl shadow-lg flex flex-col items-center"
                style={{
                    width: "100%", // Full width for one card on smaller screens
                    maxWidth: "400px", // Fixed width for each card
                    flexShrink: 0, // Prevent cards from shrinking
                }}
            >
                <img src={item.image} alt={item.name} className="w-20 h-20 mb-4" />
                <h3 className="text-xl font-semibold text-[var(--headerText)] mb-2">
                    {item.name} <br /> {item.date}
                </h3>
                <p className="text-[var(--bodyText)] text-sm">{item.description}</p>
            </div>
        ));
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -430 : 430, // Scroll left or right based on the direction
                behavior: "smooth",
            });
        }
    };

    const isScrollable = data.length * 500 > screenWidth; // Show scrollable container only if there are more than 3 cards

    return (
        <section id={title.toLowerCase()} className="h-1/2 flex flex-col justify-center py-20">
            <RevealOnScroll>
                <div className="text-center my-8 w-9/10 mx-auto">
                    <h2 className="text-4xl font-semibold text-[var(--headerText)] mb-4">{title}</h2>
                    <div className="relative w-9/10 mx-auto">
                        {/* Use screenWidth variable here */}
                        {isScrollable ? (
                            <>
                                {/* Left Arrow */}
                                <button
                                    onClick={() => scroll("left")}
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
                                    {makeCards()}
                                </div>

                                {/* Right Arrow */}
                                <button
                                    onClick={() => scroll("right")}
                                    className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-[var(--cardBackground)] text-[var(--bodyText)] p-2 rounded-full shadow-md hover:bg-[var(--headerText)] transition z-10 cursor-pointer"
                                >
                                    <FaArrowRight />
                                </button>
                            </>
                        ) : (
                            <div className="flex gap-8 justify-center">
                                {makeCards()}
                            </div>
                        )}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
