import React, { useRef, useState } from "react";
import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once at module scope
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const rootRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".counter-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
            once: false,
          },
        }
      );

      // Start CountUp when this section enters view
      ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top center",
        onEnter: () => setHasStarted(true),
        once: true,
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="counter-card bg-[#2c016d] rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {hasStarted ? (
                <CountUp suffix={item.suffix} end={item.value} duration={4} />
              ) : (
                0
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;