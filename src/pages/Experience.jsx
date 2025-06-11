import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import {
  LuBuilding2,
  LuGraduationCap,
  LuBriefcaseBusiness,
  LuCalendar,
  LuSchool,
} from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { education, experience } from "../assets/items";
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

export default function Experience() {
  const [isActive, setActive] = useState("exp");

  return (
    <div className="min-h-[98vh] w-full max-sm:ml-12" id="experience">
      <AnimatedSection animation="animate__zoomIn" delay={700}>
        <h1 className="text-4xl sm:text-5xl text-center">
          Experience & Education
        </h1>
      </AnimatedSection>
      <AnimatedSection animation="animate__zoomIn" delay={900}>
        <p className="text-center mt-3 text-gray-400 mb-10 text-sm sm:text-base">
          My professional journey and academic background
        </p>
      </AnimatedSection>
      <AnimatedSection animation="animate__zoomIn" delay={1000}>
        <div className="-mt-5 flex justify-center gap-4 mb-6 flex-wrap">
          <div
            className={`transition-all duration-300 ${
              isActive === "exp"
                ? "bg-white text-black"
                : "bg-black text-gray-400"
            } rounded-xl`}
          >
            <Button
              className="w-32 cursor-pointer flex justify-center items-center py-3 px-4 text-base hover:bg-gray-400/20 rounded-xl"
              onClick={() => setActive("exp")}
            >
              <span className="mt-1 mr-2 text-base">
                <LuBuilding2 />
              </span>
              Experience
            </Button>
          </div>
          <div
            className={`transition-all duration-300 ${
              isActive === "edu"
                ? "bg-white text-black"
                : "bg-black text-gray-400"
            } rounded-xl`}
          >
            <Button
              className="w-32 cursor-pointer flex justify-center items-center py-3 px-4 text-base hover:bg-gray-400/20 rounded-xl"
              onClick={() => setActive("edu")}
            >
              <span className="mt-1 mr-2 text-base">
                <LuGraduationCap />
              </span>
              Education
            </Button>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection
        animation="animate__fadeInUp"
        delay={1100}
        key={isActive}
      >
        <div className="mt-5 w-full flex justify-center">
          <div className="w-full max-w-[95%] md:max-w-[85%] lg:max-w-[80%] flex flex-col gap-3 items-center mb-5">
            {(isActive === "exp" ? experience : education).map(
              (data, index) => (
                <div
                  className="bg-stone-950/70 w-full flex flex-col lg:flex-row rounded-xl p-4 sm:p-6 gap-4 lg:gap-[6px] xl:gap-[4px] max-sm:-ml-6 max-sm:mr-3"
                  key={index}
                >
                  <div className="ml-4 flex flex-col flex-1 text-gray-400 px-2 lg:px-1 xl:px-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                      {data.role}
                    </h3>

                    {isActive === "exp" ? (
                      <>
                        <div className="flex items-start text-sm mb-1">
                          <LuBuilding2 className="mt-1 mr-2" />
                          <span>{data.company}</span>
                        </div>
                        <div className="flex items-start text-sm mb-1">
                          <LuBriefcaseBusiness className="mt-1 mr-2" />
                          <span>{data.designation}</span>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-start text-sm mb-1">
                        <LuSchool className="mt-1 mr-2" />
                        <span>{data.clg}</span>
                      </div>
                    )}

                    <div className="flex items-start text-sm mb-1">
                      <IoLocationOutline className="mt-1 mr-2" />
                      <span>{data.city}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <LuCalendar className="mt-1 mr-2" />
                      <span>{data.year}</span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 text-gray-400 px-2 lg:px-1 xl:px-0">
                    <h3 className="text-sm sm:text-base">{data.desc}</h3>
                    <ul className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                      {(isActive === "exp" ? data.skill : data.skills).map(
                        (skill, i) => (
                          <li
                            key={i}
                            className="bg-white/10 text-white py-1 px-3 sm:py-1.5 sm:px-4 rounded-full text-xs sm:text-sm"
                          >
                            {skill}
                          </li>
                        )
                      )}
                    </ul>
                    <div className="mt-3 space-y-2">
                      {[data.learn1, data.learn2, data.learn3].map(
                        (item, idx) =>
                          item && (
                            <p className="flex text-sm items-start" key={idx}>
                              <SiTicktick className="mt-1 mr-2 text-sm" />
                              {item}
                            </p>
                          )
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
