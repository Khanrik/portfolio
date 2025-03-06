export const NavbarButtons = ({menuOpen, setMenuOpen, isMobileButton}) => {
    const normalButton = ({buttonText, href}) => {
        return (
            <a href={href} className="text-gray-30 hover:text-white transition-colors">
                {buttonText}
            </a>
        );
    };

    const mobileButton = ({buttonText, href}) => {
        return (
            <a  href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
                {buttonText}
            </a>
        );
    };

    const buttons = [
        {buttonText: "Home", href: "#home"},
        {buttonText: "About", href: "#about"},
        {buttonText: "Education", href: "#education"},
        {buttonText: "Projects", href: "#projects"},
        {buttonText: "Contact", href: "#contact"},
        {buttonText: "☾", href: "#"}
    ];

    return (
        <>
            {buttons.map(button => (
                isMobileButton ? mobileButton(button) : normalButton(button)
            ))}
        </>
    );
};