import React, { useState, useEffect } from "react";
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

export default function ShowCertificate({ name }) {
  return (
    <AnimatedSection animation="animate__fadeInUp">
      <div className="w-[88vw] max-sm:w-[110vw]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:-ml-6 md:py-3 md:gap-7 lg:-ml-10 w-full h-auto rounded-xl">
          {name.map((data, index) => (
            <div
              key={index}
              className="w-[90%] max-w-[500px] sm:w-[90%] md:w-[48vw] mx-auto px-3 sm:px-5 md:px-6 py-5 rounded-xl flex flex-col gap-3 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={data.img}
                alt={data.name}
                className="h-[280px] sm:h-[310px] max-sm:w-[330px]  object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
