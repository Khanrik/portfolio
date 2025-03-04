export const NavbarButton = ({menuOpen, setMenuOpen, buttonText, isMobileButton}) => {
    const normalButton = () => {
        return (
            <a href="#home" className="text-gray-30 hove:text-white transition-colors">
                {buttonText}
            </a>
        );
    };

    const mobileButton = () => {
        return (
            <a  href="#home"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
                {buttonText}
            </a>
        );
    };

    return (
        <>
            {isMobileButton ? mobileButton() : normalButton()}
        </>
    );
};