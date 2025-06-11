import React, { useState, useEffect } from "react";
import "../css/About.css";
import Nandhakumar from "../assets/Nandhakumar.png";
import Nkresume from "../assets/Nkresume.pdf";
import { FiDownload } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, animation, delay = 1000 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (inView) {
      setAnimationClass(`animate__animated ${animation}`);

      const timeout = setTimeout(() => {
        setAnimationClass("");
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [inView, animation, delay]);

  return (
    <div ref={ref} className={`${animationClass} transition-all duration-500`}>
      {children}
    </div>
  );
};

export default function About() {
  return (
    <div
      className="about-cont max-sm:ml-15 max-sm:mt-15 md:mt-35 max-sm:-mr-4"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-center items-center px-6 py-12 gap-10">
        <AnimatedSection animation="animate__zoomInLeft" delay={1800}>
          <div className="flex-shrink-0">
            <img
              src={Nandhakumar}
              alt="NandhaKumar P V"
              className="w-[200px] md:w-[350px] h-auto rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection animation="animate__fadeInRight" delay={2000}>
          <div className="max-w-[500px] text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              About Me
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
              ✌️ Hey, I'm Nandhakumar, a Mern Stack Developer. I've been working
              with React and Node for the past a year, building web applications
              that are fast, scalable and user-friendly. I like solving
              problems, learning new things, and experimenting with different
              technologies. When I'm not coding, I'm probably working on a side
              project or exploring something new.
            </p>
            <div className="flex justify-center md:justify-start gap-10 mb-6">
              <AnimatedSection animation="animate__bounceIn" delay={2100}>
                <div>
                  <h1 className="text-4xl font-bold">5+</h1>
                  <p className="text-lg">Projects</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="animate__bounceIn" delay={2200}>
                <div>
                  <h1 className="text-4xl font-bold">14+</h1>
                  <p className="text-lg">Technologies</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="animate__bounceIn" delay={2300}>
                <div>
                  <h1 className="text-4xl font-bold">6+</h1>
                  <p className="text-lg">Certificates</p>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="animate__fadeInUp" delay={2300}>
              <div className="mt-6">
                <a
                  href={Nkresume}
                  download={"Nandhakumar P V Resume"}
                  className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold text-base hover:scale-105 transition-all duration-300"
                >
                  Check My Resume <FiDownload className="text-xl mt-1" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
