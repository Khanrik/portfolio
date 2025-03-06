import React from "react";
import { RevealOnScroll } from './RevealOnScroll';

export const InfoCards = ({ title, data }) => {
    return (
        <section id={title.toLowerCase()}>
            <RevealOnScroll>
                <div className="text-center my-8">
                    <h2 className="text-3xl font-semibold text-purple-400 mb-4">{title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-4 rounded-2xl shadow-lg flex flex-col items-center"
                            >
                                <img src={item.image} alt={item.name} className="w-20 h-20 mb-4" />
                                <p className="text-white text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
