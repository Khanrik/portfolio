import { useEffect } from "react";
import { NavbarButtons } from "./NavbarButtons";

export const Navbar = ({menuOpen, setMenuOpen, isHomeVisible, setIsDarkMode}) => {
    const reload = () => {
        window.location.href = '/';
    };

{/* https://www.youtube.com/watch?v=LGdPMf-SgBA&t=3124s */}
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40">
            <div className={`absolute inset-0 bg-[var(--secondBackground)] transition-opacity duration-700 ${isHomeVisible ? 'opacity-0' : 'opacity-90'}`}></div>
            <div className="relative max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <button onClick={reload} className="font-mono text-xl font-bold text-[var(--bodyText)] cursor-pointer"> 
                        Henrik Huynh
                    </button>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776; {/* Hamburger Menu Icon */}
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavbarButtons menuOpen={menuOpen} setMenuOpen={setMenuOpen} isMobileButton={false} setIsDarkMode={setIsDarkMode} />
                    </div>
                </div>
            </div>
        </nav>
    );
};