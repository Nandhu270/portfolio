import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import "../css/home.css";
import GradientText from "../components/GradientText";
import { IconCloud } from "../components/IconCloud";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";
import { Link } from "react-scroll";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-cont max-sm:mt-15" id="home">
      <div className="navbar animate__animated animate__slideInDown">
        <div className="navbar-content">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="home" smooth={true} duration={500} offset={-50}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-50}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} offset={-100}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500} offset={-100}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500} offset={-70}>
                Project
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-section">
        <div className="name-cont">
          <h1 className="intro-text cont-fadeIn">Hello, I'm</h1>
          <h1 className="main-name name-fadeIn">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              NANDHAKUMAR P V
            </GradientText>
          </h1>
          <h2 className="role typewriter-text">MERN Stack Developer</h2>
          <h3 className="edu code-slide">B.Tech Information Technology</h3>
          <p className="desc description-animation">
            Enhancing digital experiences that are smooth, scalable, and made to
            impress.
          </p>
          <div className="icons-cont max-sm:mb-10 md:mb-15">
            <FiGithub
              size={30}
              className="iconhover"
              onClick={() =>
                window.open("https://github.com/Nandhu270", "_blank")
              }
            />
            <FiLinkedin
              size={30}
              className="iconhover"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nandhakumar-p-v",
                  "_blank"
                )
              }
            />
            <TbBrandLeetcode
              size={30}
              className="iconhover"
              onClick={() =>
                window.open("https://leetcode.com/u/nkr_27/", "_blank")
              }
            />
            <SiCodechef
              size={30}
              className="iconhover"
              onClick={() =>
                window.open("https://www.codechef.com/users/nandhu06", "_blank")
              }
            />
          </div>
        </div>
        <div className="tech-cont animate__animated animate__backInRight animate__delay-2s">
          <IconCloud />
        </div>
      </div>

      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
