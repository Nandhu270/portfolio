import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
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

export default function Contact() {
  return (
    <div
      className="min-h-[78vh] flex items-center flex-col max-sm:mt-12 max-sm:ml-12 max-sm:-mr-8 mt-7"
      id="contact"
    >
      <AnimatedSection animation="animate__fadeInDown">
        <h1 className="text-6xl text-center">Let's Connect</h1>
      </AnimatedSection>
      <AnimatedSection animation="animate__fadeInUp" delay={800}>
        <h3 className="mt-4 text-gray-400 text-center px-4">
          Whether you have a project in mind or just want to say hi, I'd love to
          hear from you!
        </h3>
      </AnimatedSection>
      <div className="h-auto flex justify-center w-full px-4 sm:px-6 md:px-40">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 mt-10">
          <AnimatedSection animation="animate__fadeInLeft" delay={1000}>
            <div className="w-full lg:w-[30vw] flex flex-col px-5 py-5">
              <h1 className="text-3xl mb-2">Find Me Online</h1>
              <h3 className="text-gray-400">
                Let's collaborate or chat—reach out through any of these
                platforms.
              </h3>

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 px-4 -ml-4.5">
                <Button
                  className="cursor-pointer flex items-center justify-center bg-gray-400/10 rounded-xl px-4 py-2 gap-2 transition-all duration-300 ease-in-out hover:scale-106 hover:bg-white/20"
                  onClick={() =>
                    window.open("https://github.com/Nandhu270", "_blank")
                  }
                >
                  <FiGithub />
                  Github
                </Button>

                <Button
                  className="cursor-pointer flex items-center justify-center bg-gray-400/10 rounded-xl px-4 py-2 gap-2 transition-all duration-300 ease-in-out hover:scale-106 hover:bg-white/20"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/nandhakumar-p-v",
                      "_blank"
                    )
                  }
                >
                  <FiLinkedin />
                  LinkedIn
                </Button>

                <Button
                  className="cursor-pointer flex items-center justify-center bg-gray-400/10 rounded-xl px-4 py-2 gap-2 transition-all duration-300 ease-in-out hover:scale-106 hover:bg-white/20"
                  onClick={() =>
                    window.open("https://x.com/nandhaNK27", "_blank")
                  }
                >
                  <BsTwitterX />X
                </Button>

                <Button
                  onClick={() =>
                    window.open("mailto:p.v.nandhakumar27@email.com", "_blank")
                  }
                  className="cursor-pointer flex items-center justify-center bg-gray-400/10 rounded-xl px-4 py-2 gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/20"
                >
                  <LuMail />
                  Email
                </Button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate__fadeInRight" delay={1000}>
            <div className="w-full lg:w-[30vw] flex flex-col px-5 py-5">
              <h1 className="text-3xl mb-2">Based In</h1>
              <h3 className="text-gray-400">Erode, Tamil Nadu</h3>
              <h3 className="text-gray-400">India</h3>

              <h1 className="text-3xl mt-4">Email Me</h1>
              <h3
                className="mt-2 cursor-pointer underline decoration-solid bold max-sm:mb-10"
                onClick={() =>
                  window.open("mailto:p.v.nandhakumar27@email.com", "_blank")
                }
              >
                p.v.nandhakumar27@gmail.com
              </h3>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
