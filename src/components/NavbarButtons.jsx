import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export const NavbarButtons = ({ menuOpen, setMenuOpen, isMobileButton, setIsDarkMode }) => {
    const [themeText, setThemeText] = useState("dark");
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setThemeText((prevText) => (prevText === "dark" ? "light" : "dark"));
        setIsDarkMode((prev) => !prev);
        setMenuOpen(false);
    };

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen((prev) => !prev);
    };

    const normalButton = ({ buttonText, href, index }) => {
        if (buttonText === "dark" || buttonText === "light") {
            return (
                <button onClick={toggleDarkMode} className="text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors cursor-pointer">
                    {buttonText === "dark" ? <MdDarkMode/> : <MdLightMode/>}
                </button>
            );
        } else if (buttonText === "Language") {
            return (
                <div className="relative">
                    <button 
                        onClick={toggleLanguageMenu} 
                        className="text-[var(--bodyText)] hover:text-[var(--headerText)] transition-colors cursor-pointer"
                    >
                        {buttonText}
                    </button>
                    {languageMenuOpen && (
                        <div className="absolute mt-3 bg-[var(--cardBackground)] shadow-lg rounded-lg">
                            <button className="block px-4 py-2 text-[var(--bodyText)] hover:bg-[var(--headerText)] hover:text-white">
                                English
                            </button>
                            <button className="block px-4 py-2 text-[var(--bodyText)] hover:bg-[var(--headerText)] hover:text-white">
                                Spanish
                            </button>
                            <button className="block px-4 py-2 text-[var(--bodyText)] hover:bg-[var(--headerText)] hover:text-white">
                                French
                            </button>
                        </div>
                    )}
                </div>
            );
        }
        return (
            <a href={href} className="text-[var(--bodyText)] hover:text-[var(--headerText)] hover:underline hover:underline-offset-8 transition-colors">
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
        } else if (buttonText === "Language") {
            return (
                <div className="relative">
                    <button
                        onClick={toggleLanguageMenu}
                        className={`text-2xl font-semibold text-gray-200 hover:text-[var(--headerText)] my-4 transform transition-transform duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} cursor-pointer`}
                    >
                        {buttonText}
                    </button>
                    {languageMenuOpen && (
                        <div className="absolute mt-2 bg-[var(--cardBackground)] shadow-lg rounded-lg">
                            <button className="block px-4 py-2 text-gray-200 hover:bg-[var(--headerText)] hover:text-white">
                                English
                            </button>
                            <button className="block px-4 py-2 text-gray-200 hover:bg-[var(--headerText)] hover:text-white">
                                Spanish
                            </button>
                            <button className="block px-4 py-2 text-gray-200 hover:bg-[var(--headerText)] hover:text-white">
                                French
                            </button>
                        </div>
                    )}
                </div>
            );
        }
        return (
            <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-gray-200 hover:text-[var(--headerText)] hover:underline hover:underline-offset-4 my-4 transform transition-transform duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
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
        // { buttonText: "Language", href: "#" }, // this is for a language menu, but its hard to implement so I'll do it later
        { buttonText: themeText, href: "#" },
    ];

    return (
        <>
            {buttons.map((button, index) =>
                <span key={index}>
                    {isMobileButton ? mobileButton(button, index) : normalButton(button, index)}
                </span>
            )}
        </>
    );
};