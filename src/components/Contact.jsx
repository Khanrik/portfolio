import { RevealOnScroll } from './RevealOnScroll';
import { useState } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            });
    }

    return <section id="contact">
        <RevealOnScroll>
        <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-var(--mainBackground)">
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
                    <form className='space-y-6' onSubmit={handleSubmit}>
                            <div className="relative">
                                <input 
                                    type='text' 
                                    id='name'
                                    name='name' 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className='w-full bg-[var(--cardBackground)]/30 border border-[var(--cardBackground)] rounded px-4 py-3 text-[var(--bodyText)] transition focus:outline-none focus:border-[var(--headerText)] focus:bg-[var(--secondBackground)]'
                                    placeholder='Enter your name'
                                />
                            </div>

                            <div className="relative">
                                <input 
                                    type='email' 
                                    id='email'
                                    name='email'
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className='w-full bg-[var(--cardBackground)]/30 border border-[var(--cardBackground)] rounded px-4 py-3 text-[var(--bodyText)] transition focus:outline-none focus:border-[var(--headerText)] focus:bg-[var(--secondBackground)]'
                                    placeholder='Enter your email'
                                />
                            </div>

                            <div className="relative">
                                <textarea 
                                    id='message'
                                    name='message'
                                    required
                                    rows='4'
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className='w-full bg-[var(--cardBackground)]/30 border border-[var(--cardBackground)] rounded px-4 py-3 text-[var(--bodyText)] transition focus:outline-none focus:border-[var(--headerText)] focus:bg-[var(--secondBackground)]'
                                    placeholder='Write a message'
                                />
                            </div>

                            <button type='submit' className='w-full bg-[var(--headerText)]/50 rounded-xl text-[var(--bodyText)] text-lg shadow-md hover:bg-[var(--headerText)] transition cursor-pointer py-3'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>;
}