const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

export const projectData = (isDarkMode) => [
    {
        name: "This Portfolio Site",
        image: isDarkMode
            ? images['../assets/PortfolioDark.png'] || images['../assets/Portfolio.png']
            : images['../assets/PortfolioLight.png'] || images['../assets/Portfolio.png'],
        description:
            <>
                To get the elephant out of the room, this is my portfolio site project. The purpose of the site was to learn the React framework and JavaScript as a whole.
                It is therefore built using JavaScript with React as well as Tailwind CSS for styling, and is hosted on GitHub pages.
                Since it is a learning project, I have taken inspiration from various sources but mainly <a className="text-[var(--headerText)] hover:underline" href="https://www.youtube.com/@PedroTechnologies" target="_blank">PedroTech</a>.
                The site is designed to work well on both desktop and mobile devices. The code is open source and can be found on <a className="text-[var(--headerText)] hover:underline" href="https://github.com/Khanrik/portfolio" target="_blank">my GitHub profile</a>.
            </>,
        date: "",
    },
    {
        name: "Astro Pi 2022/23",
        image: images['../assets/AstroPiLogo.png'],
        description:
            <>
                The European Astro Pi Challenge is an educational initiative that allows students to write computer programs that run on the International Space Station (ISS).
            </>,
        date: ""
    },
    {
        name: "Excellent Email Experience",
        image: images['../assets/EEELogo.png'],
        description: 
            <>
                The Excellent Email Experience (EEE) is a project that aims to improve the email experience for users by providing a more user-friendly interface and better organization of emails.
                The project is built using React and Tailwind CSS, and is hosted on GitHub pages.
            </>,
        date: ""
    },
    {
        name: "Forth Interpreter",
        image: images['../assets/react.svg'],
        description: 
            <>
                The Forth Interpreter is a project that implements a Forth interpreter in JavaScript. The project is built using React and Tailwind CSS, and is hosted on GitHub pages.
                The interpreter is able to execute Forth programs and provides a simple interface for users to interact with the interpreter.
            </>,
        date: "",
    },
    {
        name: "JWST Image Painter",
        image: images['../assets/CarinaNebula.png'],
        description: 
            <>
                The JWST Image Painter is a project that allows users to paint images using the James Webb Space Telescope (JWST) data. The project is built using React and Tailwind CSS, and is hosted on GitHub pages.
                The project uses the JWST data to create a simple image painting application that allows users to paint images using the JWST data.
            </>,
        date: ""
    }
];