import React from "react";
import { RevealOnScroll } from './RevealOnScroll';

export const InfoCards = ({ title, data }) => {
    return (
        <section id={title.toLowerCase()}  className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="text-center my-8">
                    <h2 className="text-3xl font-semibold text-[var(--headerText)] mb-4">{title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[var(--cardBackground)] p-4 rounded-2xl shadow-lg flex flex-col items-center"
                            >
                                <img src={item.image} alt={item.name} className="w-20 h-20 mb-4" />
                                <h3 className="text-xl font-semibold text-[var(--headerText)] mb-2">{item.name} <br></br> {item.date} </h3>
                                <p className="text-[var(--bodyText)] text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
