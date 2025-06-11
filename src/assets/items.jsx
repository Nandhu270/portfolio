import Expressimg from "./express-original.svg";
import Githubimg from "./github-original.svg";
import Donation_App from "./Donation_App.png";
import Food_App from "./Food_App.png";
import Nptel_Helper from "./Nptel_Helper.png";
import Quiz_App from "./Quiz_App.png";
import RegistrationForm from "./RegistrationForm.png";
import Villa_App from "./Villa_App.png";
import C_cert from "./C++.png";
import Corizo_Intern from "./Corizo_Intern.png";
import Corizo_Training from "./Corizo_Training.png";
import Leadership from "./Leadership.png";
import problem_solving from "./problem_solving.png";
import Python from "./Python.png";
import React_Basics from "./React_Basics.png";
import Shiash_Intern from "./Shiash_Intern.png";
import Portfolio from "./Portfolio.png";

export const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    box: "0 0 15px 5px rgba(248, 148, 33, 0.6)",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    box: "0 0 15px 5px rgba(59, 163, 243, 0.6)",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    box: "0 0 15px 5px rgba(250, 250, 75, 0.6)",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    box: "0 0 15px 5px rgba(120, 200, 246, 0.6)",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    box: "0 0 15px 5px rgba(165, 94, 234, 0.6)",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    box: "0 0 15px 5px rgba(94, 234, 94, 0.6)",
  },
  {
    name: "Express.js",
    icon: Expressimg,
    box: "0 0 15px 5px rgb(255, 255, 255)",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    box: "0 0 15px 5px rgba(94, 234, 94, 0.6)",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    box: "0 0 15px 5px rgba(53, 114, 165, 0.6)",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    box: "0 0 15px 5px rgba(0, 123, 255, 0.6)",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    box: "0 0 15px 5px rgba(43, 77, 156, 0.6)",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    box: "0 0 15px 5px rgba(240, 87, 49, 0.6)",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    box: "0 0 15px 5px rgba(0, 117, 143, 0.6)",
  },
  {
    name: "GitHub",
    icon: Githubimg,
    box: "0 0 15px 5px rgb(255, 255, 255)",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    box: "0 0 15px 5px rgba(240, 80, 51, 0.6)",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    box: "0 0 15px 5px rgba(100, 180, 100, 0.6)",
  },
  {
    name: "Hibernate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
    box: "0 0 15px 5px rgba(83, 61, 51, 0.6)",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    box: "0 0 15px 5px rgba(56, 189, 248, 0.6)",
  },
];

export const experience = [
  {
    role: "Web Developer",
    company: "Corizo pvt ltd",
    designation: "Intern",
    city: "Bangalore",
    year: "Aug 2024 - Oct 2024",
    desc: "Built web applications using HTML, CSS, JavaScript, Express, and Bootstrap",
    skill: ["Html", "css", "Javascript", "Expressjs", "MongoDB", "Bootstrap"],
    learn1: "Created interactive web apps using HTML and JavaScript",
    learn2: "Learned how real websites are made and launched",
    learn3:
      "Worked with forms, connected to the backend, and did basic CRUD tasks",
  },
  {
    role: "FullStack Developer",
    company: "Shiash Info Solutions pvt ltd",
    designation: "Intern",
    city: "Chennai",
    year: "Jul 2023 - Sep 2023",
    desc: "Build Web Applications using Python Django Framework",
    skill: ["Python", "Django", "Html", "css", "Mysql"],
    learn1: "Made web apps using Python and Django",
    learn2: "Handled forms and basic CRUD operations",
    learn3: "Learned how to connect the website to the database",
  },
];

export const education = [
  {
    role: `Bachelor's Degree - Information Technology`,
    clg: "Karpagam College of Engineering",
    city: "Coimbatore",
    year: "2023 - 2027",
    desc: "Currently in Third year, focusing on problem solving and software development",
    skills: ["Data Structures", "Algorithms", "Problem Solving"],
    learn1: "Maintaining strong academic performance with 8.8 CGPA",
    learn2: "Attended workshops and seminars to enhance technical skills",
    learn3: "Participating in coding competitions",
  },
];

export const project1 = [
  {
    img: Donation_App,
    name: "Donation App",
    skills: ["React", "NodeJs", "Html", "Mongodb", "Ejs", "css"],
    livedemo: "https://letschangelives.netlify.app",
    github: "https://github.com/Nandhu270/Donation-Management-System",
    desc: "Donation App is a web application developed using React, EJS, HTML, CSS, and MongoDB that enables users to make donations and support various causes through an easy-to-use interface",
  },
  {
    img: Nptel_Helper,
    name: "Nptel AI Helper",
    skills: ["Gemini AI", "Html", "css", "Javascript", "Bootstrap"],
    livedemo: null,
    github: "https://github.com/Nandhu270/Nptel-Chrome-Extension-Ai-Helper",
    desc: "NPTEL Chrome Extension AI Helper is a Chrome extension that improves the NPTEL learning experience by offering an AI chatbot for quiz help, programming doubts, and a bookmarking feature for easy access to content",
  },
  {
    img: Portfolio,
    name: "Portfolio",
    skills: ["React", "Tailwindcss", "Node js", "JavaScript", "Html"],
    livedemo: "https://nandhakumarpv.netlify.app",
    github: "https://github.com/Nandhu270/portfolio",
    desc: "A visually engaging and fully responsive personal portfolio website created using HTML, CSS, and React.js. This project showcases my skills, projects, experience, and contact details in a structured and user-friendly manner. It includes modern design elements, animations, and responsive layouts to ensure optimal viewing on all devices",
  },
];

export const project2 = [
  {
    img: Villa_App,
    name: "Villa App",
    skills: ["Html", "css", "Bootstrap"],
    livedemo: "https://nandhu270.github.io/VILLA-WEBSITE/",
    github: "https://github.com/Nandhu270/VILLA-WEBSITE",
    desc: "A visually appealing and responsive static website for villa booking, created using HTML and CSS. This project provides a streamlined way to showcase villa details, company information, locations, and an easy-to-use contact page",
  },
  {
    img: Quiz_App,
    name: "Quiz App",
    skills: ["Html", "css", "Javascript", "Bootstrap"],
    livedemo: "https://nandhu270.github.io/Quiz-Website/",
    github: "https://github.com/Nandhu270/Quiz-Website",
    desc: "This project is an interactive quiz application built using HTML, CSS, and JavaScript. It features a responsive design, dynamic question rendering, and a results summary with a visual chart representation",
  },
  {
    img: Food_App,
    name: "Food App",
    skills: ["Html", "css", "Bootstrap", "Ejs", "MongoDB"],
    livedemo: null,
    github: "https://github.com/Nandhu270/FoodApp",
    desc: "This is a simple and responsive food ordering web application built using EJS templates for the frontend, Node.js + Express.js for the backend, and MongoDB for the database. Users can browse menu items",
  },
  {
    img: RegistrationForm,
    name: "Registration Form",
    skills: ["Html", "css", "Bootstrap", "Ejs", "MongoDB"],
    livedemo: null,
    github: "https://github.com/Nandhu270/RegistrationForm",
    desc: "This project is a basic registration form using EJS for the frontend, with Node.js and Express.js handling the backend. It lets users submit their details, which are saved to a database",
  },
];

export const certificate1 = [
  {
    img: React_Basics,
    name: "React Basics",
  },
  {
    img: Python,
    name: "Python",
  },
  {
    img: Corizo_Intern,
    name: "Corizo InternShip",
  },
  {
    img: Corizo_Training,
    name: "Corizo Training",
  },
];

export const certificate2 = [
  {
    img: Shiash_Intern,
    name: "Shiash InternShip",
  },
  {
    img: C_cert,
    name: "C++",
  },
  {
    img: Leadership,
    name: "LeaderShip and Team Effectiveness",
  },
  {
    img: problem_solving,
    name: "Problem Solving",
  },
];
