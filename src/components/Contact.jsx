import { RevealOnScroll } from './RevealOnScroll';

export const Contact = () => {
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
                        <div>
                            <text className='text-[var(--headerText)]'>Name: </text>
                            <text>Henrik Hoangkhanh Huynh</text>
                        </div>
                        <div>
                            <text className='text-[var(--headerText)]'>Email: </text>
                            <a href='mailto:henrik.huynh@yahoo.dk' target='_blank' rel='noopener noreferrer' className='text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors'>henrik.huynh@yahoo.dk</a>
                        </div>
                        <div>
                            <text className='text-[var(--headerText)]'>LinkedIn: </text>
                            <a href='https://www.linkedin.com/in/henrik-huynh-708067285/' target='_blank' rel='noopener noreferrer' className='text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors'>https://www.linkedin.com/in/henrik-huynh-708067285/</a>
                        </div>

                    </div>

                    <div className='w-3/4 space-y-6 md:ml-25'>
                    <form className='space-y-6'>
                            <div className="relative">
                                <input 
                                    type='text' 
                                    id='name'
                                    name='name' 
                                    required 
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
                                    className='w-full bg-[var(--cardBackground)]/30 border border-[var(--cardBackground)] rounded px-4 py-3 text-[var(--bodyText)] transition focus:outline-none focus:border-[var(--headerText)] focus:bg-[var(--secondBackground)]'
                                    placeholder='Enter your email'
                                />
                            </div>

                            <div className="relative">
                                <textarea 
                                    id='email'
                                    name='message'
                                    required 
                                    rows='4'
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