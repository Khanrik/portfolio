import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export const NavbarButtons = ({ menuOpen, setMenuOpen, isMobileButton, setIsDarkMode }) => {
    const [buttonText, setButtonText] = useState("dark");

    const toggleDarkMode = () => {
        setButtonText((prevText) => (prevText === "dark" ? "light" : "dark"));
        setIsDarkMode((prev) => !prev);
        setMenuOpen(false);
    };

    const normalButton = ({ buttonText, href }) => {
        if (buttonText === "dark" || buttonText === "light") {
            return (
                <button onClick={toggleDarkMode} className="text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors cursor-pointer">
                    {buttonText === "dark" ? <MdDarkMode/> : <MdLightMode/>}
                </button>
            );
        }
        return (
            <a href={href} className="text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors">
                {buttonText}
            </a>
        );
    };

    const mobileButton = ({ buttonText, href }) => {
        if (buttonText === "dark" || buttonText === "light") {
            return (
                <button onClick={toggleDarkMode} className={`text-2xl font-semibold text-gray-200 hover:text-[var(--headerText)] my-4 transform transition-transform duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} cursor-pointer`}>
                    {buttonText === "dark" ? <MdDarkMode/> : <MdLightMode/>}
                </button>
            );
        }
        return (
            <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-gray-200 hover:text-[var(--headerText)] my-4 transform transition-transform duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            >
                {buttonText}
            </a>
        );
    };

    const buttons = [
        { buttonText: "Home", href: "#home" },
        { buttonText: "About", href: "#about" },
        { buttonText: "Education", href: "#education" },
        { buttonText: "Projects", href: "#projects" },
        { buttonText: "Contact", href: "#contact" },
        { buttonText: buttonText, href: "#" }
    ];

    return (
        <>
            {buttons.map(button => (
                isMobileButton ? mobileButton(button) : normalButton(button)
            ))}
        </>
    );
};