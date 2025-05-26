import AULogo from "../assets/AULogo.jpg";
import TGSLogo from "../assets/TGSLogo.png";

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1; // Months are zero-based in JavaScript

let semester = (year-2023)*2; // Assuming the semester starts in August (8) and ends in January (1)
if (month > 8) {
    semester += 1; // Increment semester if current month is after August
}

export const educationData = [
    {
        name: "Teknisk Gymnasium Skanderborg",
        image: TGSLogo,
        description: 
            <>
                I graduated an HTX-programme at Teknisk Gymnasium Skanderborg with an average grade of 10.4.
                Here, my primary subjects were A-level Mathematics and Physics. Additionally, I chose C-level Programming and A-level Robotics among others as my elective subjects.
                During my studies I participated in the Danish CanSat Competition 2021-22,
                where I helped in developing a CanSat analyze the air quality by measuring the light spectrum of the atmosphere.
                I also participated in the European Astro Pi Competition 2022-23, which was better documented and can be read about in the projects section below.
            </>,
        date:
            <>
                2020 – 2023
            </>
    },
    {
        name: "Aarhus University",
        image: AULogo,
        description: 
            <>
                I am currently studying for a Bachelor's in Computer Engineering at Aarhus University, where I am on my {semester} semester.
                The studies have included software development and engineering methodologies, hardware software co-design, and the mathematics behind it all.
                The bigger projects I have worked on during my studies are documented in the projects section below. 
                Aside from those, I have also worked on smaller projects where I used technologies such as ROS, Verilog, and Sireum Logika.
                Furthermore, some courses required data analysis, which I have done using Python, R, and MATLAB.
            </>,
        date: 
            <>
            2023 – Present
            </>
    }
];