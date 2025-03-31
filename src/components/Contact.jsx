import { RevealOnScroll } from './RevealOnScroll';

export const Contact = () => {
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8">
                <div className='px-4 w-150'>
                    <h2 className="text-3xl font-semibold text-[var(--headerText)] mb-4">
                        Get In Touch
                    </h2>
                    <form className='space-y-6'>
                        <div className="relative">
                            <input 
                                type='text' 
                                id='name' 
                                required 
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='Example@mail.com'
                            />
                        </div>
                    </form>
                </div>

                <div className='px-4 w-150'>
                    Right side
                </div>
            </div>
        </RevealOnScroll>
    </section>;
}