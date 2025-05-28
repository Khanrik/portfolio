import React from 'react';
import head from '../assets/CV_pic.png';
import { RevealOnScroll } from './RevealOnScroll';
import '../index.css';

export const About = () => {
    return (
        <section id="about">
            <RevealOnScroll>
                <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[var(--mainBackground)]">
                    <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="max-w-xl">
                            <h1 className="text-4xl font-bold text-[var(--headerText)] mb-4">About</h1>
                            <p className="text-xl text-bodyText">
                                I'm a computer engineering student from Denmark with a passion for technology and problem-solving. 
                                I love learning new skills both for software development and leisure. 
                                When I'm not working on any projects, I like playing piano and guitar, gaming, or climbing some problems in a bouldering gym. 
                                This is my try at making a professional looking website, so I you hope you enjoy reading or just looking through.
                            </p>
                        </div>
                        <div className="mt-8 md:mb-0 md:ml-8">
                            <div className="w-128 h-128 bg-[#b4a399] rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={head}
                                    alt="Profile"
                                    className="w-128 h-128 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};