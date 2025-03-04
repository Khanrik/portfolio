import { useEffect } from "react";
import { NavbarButton } from "./NavbarButton";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    {/* https://www.youtube.com/watch?v=LGdPMf-SgBA&t=3124s */}
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(26,24,36,0.8)]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white"> 
                        Henrik Huynh
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776; {/* Hamburger Menu Icon */}
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavbarButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} buttonText="Home" isMobileButton={false} />
                        <NavbarButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} buttonText="About" isMobileButton={false} />
                        <NavbarButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} buttonText="Projects" isMobileButton={false} />
                        <NavbarButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} buttonText="Contact" isMobileButton={false} />
                    </div>
                </div>
            </div>
        </nav>
    );
};