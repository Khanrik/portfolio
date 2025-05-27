import React, { useRef, useState, useEffect } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let timer;
        if (isSent || error) {
            // Reset the error message after 5 seconds
            timer = setTimeout(() => {
                setIsSent(false);
                setError(null);
            }, 5000); // 5000ms = 5 seconds
        }
        // Clean up the timer if component unmounts or isSent changes
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isSent || error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setIsSent(false);
        setError(null);

        const timeInput = form.current.querySelector('input[name="time"]');
        if (timeInput) {
            timeInput.value = new Date().toLocaleString("en-NO", { timeZone: "CET" });
        }

        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
            (result) => {
                console.log('SUCCESS!', result.text);
                setIsSent(true);
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error);
                if (error.text && error.text.includes("Yahoo: Message failed")) {
                    setError("Email service temporarily unavailable. Please try again later or contact me directly.");
                } else {
                    setError('Something went wrong. Please try again later.');
                }
                setIsSending(false);
            },
        );

        setIsSending(false);
    }

    return <section id="contact">
        <RevealOnScroll>
        <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[var(--mainBackground)]">
            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className='max-w-xl mb-12'>
                        <h2 className="text-4xl font-semibold text-[var(--headerText)] mb-4">
                            Get In Touch With Me!
                        </h2>
                        <div className="text-xl font-semibold text-[var(--bodyText)] mb-6">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
                        </div>
                        <div className="font-semibold">
                            Henrik Hoangkhanh Huynh
                        </div>
                        <div className='mb-2'>
                            8210 Aarhus V
                        </div>
                        <div className='mb-2'>
                            <div className='text-[var(--headerText)]'>Email: </div>
                            <a href='mailto:henrik.huynh@yahoo.dk' target='_blank' rel='noopener noreferrer' className='text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors'>henrik.huynh@yahoo.dk</a>
                        </div>
                        <div>
                            <div className='text-[var(--headerText)]'>LinkedIn: </div>
                            <a href='https://www.linkedin.com/in/henrik-huynh-708067285/' target='_blank' rel='noopener noreferrer' className='text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors'>https://www.linkedin.com/in/henrik-huynh-708067285/</a>
                        </div>

                    </div>

                    <div className='w-3/4 space-y-6 md:ml-25'>
                        <form className='space-y-6' ref={form} onSubmit={handleSubmit}>
                            <input type="hidden" name="time" />
                            <div className="relative">
                                <input type='text' name="name" required className='w-full bg-[var(--cardBackground)]/30 border border-[var(--cardBackground)] rounded px-4 py-3 text-[var(--bodyText)] transition focus:outline-none focus:border-[var(--headerText)] focus:bg-[var(--secondBackground)]'
                                    placeholder='Enter your name'
                                />
                            </div>
                            <div className="relative">
                                <input type='email' name="email" className='w-full bg-[var(--cardBackground)]/30 border border-[var(--cardBackground)] rounded px-4 py-3 text-[var(--bodyText)] transition focus:outline-none focus:border-[var(--headerText)] focus:bg-[var(--secondBackground)]'
                                    placeholder='Enter your email'
                                />
                            </div>
                            <div className="relative">
                                <textarea name='message' required rows='4' className='w-full bg-[var(--cardBackground)]/30 border border-[var(--cardBackground)] rounded px-4 py-3 text-[var(--bodyText)] transition focus:outline-none focus:border-[var(--headerText)] focus:bg-[var(--secondBackground)]'
                                    placeholder='Write a message'
                                />
                            </div>
                            {isSent && <p className='text-green-500 text-lg font-semibold'>Message sent successfully!</p>}
                            {error && <p className='text-red-500 text-lg font-semibold'>{error}</p>}
                            <div className="flex gap-4">
                                <button type='submit' disabled={isSending} className='flex-1 bg-[var(--headerText)]/50 rounded-xl text-[var(--bodyText)] text-lg shadow-md hover:bg-[var(--headerText)] transition cursor-pointer py-3'>
                                    Send Message
                                </button>

                                {/* Uncomment below code to get a debug button for contact form */}
                                {/* <button
                                    type='button' 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsSending(true);
                                        setIsSent(false);
                                        setError(null);
                                        const timeInput = form.current.querySelector('input[name="time"]');
                                        if (timeInput) {
                                            timeInput.value = new Date().toLocaleString("en-NO", { timeZone: "CET" });
                                        }
                                        const formData = new FormData(form.current);
                                        const formValues = {};
                                        formData.forEach((value, key) => formValues[key] = value);
                                        console.log("Form data:", formValues);
                                        setIsSent(true);
                                        setIsSending(false);
                                        form.current.reset();
                                    }} 
                                    className='px-4 bg-gray-400 rounded-xl text-[var(--bodyText)] text-lg shadow-md hover:bg-gray-500 transition cursor-pointer py-3'
                                >
                                    Debug
                                </button> */}

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>;
}