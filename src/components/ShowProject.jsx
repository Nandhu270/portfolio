import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscLiveShare } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
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

export default function ShowProject({ name }) {
  return (
    <AnimatedSection animation="animate__fadeInUp">
      <div className="w-[97vw] sm:ml-6 md:px-25">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {name.map((data, index) => (
            <div
              className="w-full max-sm:w-[98%] max-sm:px-2 sm:w-[88%] lg:w-[25.1vw] bg-stone-950/10 rounded-xl flex flex-col transform hover:scale-105 transition duration-300 ease-in-out"
              key={index}
            >
              <div className="relative group py-2">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full h-[220px] object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-stone-950 bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-85 transition duration-300 ease-in-out rounded-md">
                  <p className="px-3 text-center">{data.desc}</p>
                </div>
              </div>

              <div className="px-2 pb-3">
                <h1 className="text-xl">{data.name}</h1>
                <ul className="flex flex-wrap justify-start mt-2 gap-2">
                  {data.skills.map((skill, ind) => (
                    <li
                      className="bg-white/10 text-white py-1.5 px-4 rounded-full text-sm"
                      key={ind}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {data.livedemo ? (
                  <div className="flex justify-between mt-3 text-gray-400 mb-3">
                    <div className="transition-all duration-300 ease-in-out hover:text-lg hover:text-white">
                      <Link
                        className="flex flex-row"
                        onClick={() => window.open(`${data.github}`, "_blank")}
                      >
                        <span className="mt-1 px-1.5">
                          <FiGithub />
                        </span>{" "}
                        Github
                      </Link>
                    </div>
                    <div className="transition-all duration-300 ease-in-out hover:text-lg hover:text-white">
                      <Link
                        className="flex flex-row"
                        onClick={() =>
                          window.open(`${data.livedemo}`, "_blank")
                        }
                      >
                        <span className="mt-1 px-1.5">
                          <VscLiveShare />
                        </span>
                        <span className="mr-3">LiveDemo</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 flex justify-center mt-3 transition-all duration-300 ease-in-out hover:text-lg hover:text-white">
                    <Link
                      className="flex flex-row"
                      onClick={() => window.open(`${data.github}`, "_blank")}
                    >
                      <span className="mt-1 px-1.5">
                        <FiGithub />
                      </span>{" "}
                      Github
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
