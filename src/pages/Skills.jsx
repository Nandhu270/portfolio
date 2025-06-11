import React, { useState, useEffect } from "react";
import "../css/Skills.css";
import { skills } from "../assets/items";
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

export default function Skills() {
  return (
    <div className="skills-cont max-sm:ml-10 max-sm:-mr-4" id="skills">
      <div>
        <AnimatedSection animation="animate__fadeInUp" delay={1000}>
          <h1 className="text-5xl text-center cont-tex">Skills & Expertise</h1>
        </AnimatedSection>
        <AnimatedSection animation="animate__fadeInUp" delay={1300}>
          <p className="text-center mt-3 text-gray-400 mb-10 para-tex">
            Crafting modern, performant, and user-friendly web experiences
          </p>
        </AnimatedSection>
        <AnimatedSection animation="animate__zoomIn" delay={1600}>
          <div className="skill-cont flex flex-col items-center h-auto px-6 md:px-10 w-full">
            <div className="skills-grid mt-8">
              {skills.map((data, ind) => (
                <div className="group" key={ind}>
                  <div className="tooltip">{data.name}</div>
                  <div className="icon-card" style={{ boxShadow: data.box }}>
                    <img src={data.icon} alt={data.name} className="icon-img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
