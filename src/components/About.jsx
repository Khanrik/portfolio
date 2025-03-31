import React from 'react';
import ReactLogo from '../assets/react.svg';
import { RevealOnScroll } from './RevealOnScroll';
import '../index.css';

export const About = () => {
    return (
        <section id="about">
            <RevealOnScroll>
                <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-var(--mainBackground)">
                    <div className="container mx-auto px-8 flex flex-col-reverse md:flex-row items-center justify-between">
                        <div className="max-w-xl">
                            <h1 className="text-4xl font-bold text-[var(--headerText)] mb-4">About</h1>
                            <p className="text-xl text-bodyText">
                                I'm a computer engineering student doing something with my life ig
                            </p>
                        </div>
                        <div className="mb-8 md:mb-0 md:ml-8">
                            <div className="w-64 h-64 bg-[var(--cardBackground)] rounded-full flex items-center justify-center">
                                <img
                                    src={ReactLogo}
                                    alt="Profile"
                                    className="w-48 h-48 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};