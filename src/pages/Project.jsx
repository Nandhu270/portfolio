import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { GoProject } from "react-icons/go";
import { PiCertificateLight } from "react-icons/pi";
import {
  certificate1,
  certificate2,
  project1,
  project2,
} from "../assets/items";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import ShowProject from "../components/ShowProject";
import ShowCertificate from "../components/ShowCertificate";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({
  children,
  animation = "animate__fadeInUp",
  delay = 1000,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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

export default function Project() {
  const [isActive, setActive] = useState("proj");
  const [ismore, setmore] = useState(false);

  return (
    <div
      className="min-h-[98vh] max-sm:mt-20 max-sm:ml-10 max-sm:-mr-8"
      id="project"
    >
      <AnimatedSection animation="animate__fadeInDown">
        <h1 className="text-5xl text-center">Project & Certification</h1>
        <p className="text-center mt-3 text-gray-400 mb-10">
          Some of my featured works
        </p>
      </AnimatedSection>
      <AnimatedSection animation="animate__fadeInUp" delay={800}>
        <div className="flex justify-center gap-3">
          <div
            className={`transition-all duration-400 ease-in-out ${
              isActive === "proj"
                ? "bg-white rounded-xl text-black"
                : "bg-black text-gray-400 rounded-xl"
            }`}
          >
            <Button
              className="w-33 cursor-pointer flex justify-center items-center py-3 px-4 text-base hover:bg-gray-400/20 rounded-xl"
              onClick={() => setActive("proj")}
            >
              <span className="mt-1 mr-1 text-base">
                <GoProject />
              </span>
              Project
            </Button>
          </div>
          <div
            className={`transition-all duration-400 ease-in-out ${
              isActive === "certif"
                ? "bg-white rounded-xl text-black"
                : "bg-black text-gray-400 rounded-xl"
            }`}
          >
            <Button
              className="w-33 cursor-pointer flex justify-center items-center py-3 px-4 text-base hover:bg-gray-400/20 rounded-xl"
              onClick={() => setActive("certif")}
            >
              <span className="mt-1 mr-1 text-base">
                <PiCertificateLight />
              </span>
              Certification
            </Button>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="animate__fadeIn" delay={1000}>
        <div className="mt-5 flex justify-center items-center flex-col gap-3 w-full">
          {isActive === "proj" ? (
            <>
              <ShowProject name={project1} />
            </>
          ) : (
            <>
              <ShowCertificate name={certificate1} />
            </>
          )}
        </div>
      </AnimatedSection>
      <div className="px-5">
        {ismore ? (
          isActive === "proj" ? (
            <div
              className={`-ml-3 mt-5 transition-opacity duration-500 ease-in-out`}
            >
              <ShowProject name={project2} />
            </div>
          ) : (
            <div
              className={`sm:ml-5 mt-5 max-sm:w-[100vw] lg:ml-13 px-2 max-sm:-ml-11 transition-opacity duration-500 ease-in-out`}
            >
              <ShowCertificate name={certificate2} />
            </div>
          )
        ) : null}
        <AnimatedSection animation="animate__fadeInUp" delay={700}>
          <div className="sm:flex sm:justify-center max-sm:flex max-sm:justify-center max-sm:-ml-3 -ml-20">
            <Button
              className="border border-white-600 md:ml-22 lg:ml-3 max-sm:mb-20 sm:mb-21 mt-4 px-2 py-1.5 cursor-pointer rounded-xl transition-all duration-300 hover:bg-white hover:text-black"
              onClick={() => setmore(!ismore)}
            >
              {ismore ? (
                <span className="flex flex-row items-center gap-1">
                  <IoIosArrowDropup />
                  Show Less
                </span>
              ) : (
                <span className="flex flex-row items-center gap-1">
                  <IoIosArrowDropdown />
                  Show More
                </span>
              )}{" "}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
