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
        description: `I studied at Teknisk Gymnasium Skanderborg, where i completed the HTX-examination with an average grade of 10.4.
        In this programme my primary subject were A-level Mathematics and Physics. Additionally, I chose C-level Programming and A-level Robotics among others as my elective subjects.
        During my studies I was provided the opportunity to participate in the Danish CanSat Competition 2021-22,
        where I was part of a team that developed a CanSat, which was equipped with a spectrometer and camera to measure the light spectrum of the atmosphere to analyze the air quality.
        This project made it to the national competition but not the international one. I also participated in the European Astro Pi Competition 2022-23,
        which was better documented and can be read about in the projects section below.`,
        date: "2020 – 2023"
    },
    {
        name: "Aarhus University",
        image: AULogo,
        description: `I am currently studying a Bachelor's in Computer Engineering at Aarhus University, where I am on my ${semester} semester.`,
        date: "2023 – present"
    }
];