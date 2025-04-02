import { RevealOnScroll } from './RevealOnScroll';

export const Contact = () => {
    return <section id="contact">
        <RevealOnScroll>
        <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-var(--mainBackground)">
            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className='w-1/2'>
                        <h2 className="text-3xl font-semibold text-[var(--headerText)] mb-4">
                            Get in touch with me
                        </h2>
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

                    <div className='mb-8 md:mb-0 md:ml-8 w-64 h-64 bg-[var(--cardBackground)] rounded-full flex items-center justify-center'>
                        Right section
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>;
}