const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });
import astropiReport from '../assets/pinutsReport.pdf';
import SOP from '../assets/SOP.pdf';

export const projectData = (isDarkMode) => [
    {
        name: "This Portfolio Site",
        image: isDarkMode
            ? images['../assets/PortfolioDark.png'] || images['../assets/Portfolio.png']
            : images['../assets/PortfolioLight.png'] || images['../assets/Portfolio.png'],
        description:
            <>
                To get the elephant out of the room, this is my portfolio site project. The purpose of the site was to learn the React framework and JavaScript.
                It is styled using Tailwind CSS and is hosted on GitHub pages.
                Since it is a learning project, I have taken inspiration from various sources but mainly <a className="text-[var(--headerText)] hover:underline" href="https://www.youtube.com/@PedroTechnologies" target="_blank">PedroTech</a>.
                The site is designed to work on both desktop and mobile devices. The source code can be found in the <a className="text-[var(--headerText)] hover:underline" href="https://github.com/Khanrik/portfolio" target="_blank">repository</a>.
            </>,
        date: "",
    },
    {
        name: "Astro Pi 2022/23",
        image: images['../assets/AstroPiLogo.png'],
        description:
            <>
                I participated in the European Astro Pi Challenge as an extracurricular activity, where my team got to send a piece of Python code up to space.
                This code ran on a Raspberry Pi with sensors, which could measure data on the International Space Station (ISS).
                The mission was about predicting solar activity from the magnetic field strength around the ISS, as described in the <a className="text-[var(--headerText)] hover:underline" href={astropiReport} target="_blank">project report</a>.
                Our team was chosen by the Raspberry Pi Foundation and ESA as one of the <a className="text-[var(--headerText)] hover:underline" href="https://www.raspberrypi.org/blog/astro-pi-mission-space-lab-2022-23-results/" target="_blank">10 winning teams</a>.
            </>,
        date: ""
    },
    {
        name: "Excellent Email Experience",
        image: images['../assets/EEELogo.png'],
        description: 
            <>
                Excellent Email Experience (EEE) is an email client project made for my software engineering course.
                This course was about the software development process, more specifically the agile methodologies.
                The project was made in C# using the .NET framework and Windows UI Library for backend and frontend respectively.
                My main role along with backend functionality was developing the database using SQLite.
                The project can be found in our <a className="text-[var(--headerText)] hover:underline" href="https://github.com/mikkelraben/ExcellentEmailExperience" target="_blank">repository</a>, but the GMail API key is disabled, so it no longer works.
            </>,
        date: ""
    },
    {
        name: "Forth Interpreter",
        image: images['../assets/ForthLogo.png'],
        description: 
            <>
                As an extracurricular activity, I developed an interpreter for the stack based programming language, Forth. 
                The interpreter was made in C and was run in the terminal. 
                The source code can be found in my <a className="text-[var(--headerText)] hover:underline" href="https://gitlab.au.dk/forth-interpreter/forth_interpreter_henrik" target="_blank">repository</a>.
                All of the features of Forth are not implemented, but basic stack manipulation and arithmetic operations as well as conditional statements are supported.
            </>,
        date: "",
    },
    {
        name: "JWST Image Painter",
        image: images['../assets/CarinaNebula.png'],
        description: 
            <>
                My final gymnasium project was a Python program that could take a collection of images from the James Webb Space Telescope mission and color them according to the filters used for each image.
                The image processing in the project was done using the OpenCV library.
                After coloring, the images were meant to be analyzed to locate stars and determine characteristics about them.
                This can be read about in the <a className="text-[var(--headerText)] hover:underline" href={SOP} target="_blank">project report</a>, which was written in danish.
            </>,
        date: ""
    }
];