import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="relative w-full h-[200vh] sm:h-[280vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover object-top"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
        />
      </div>
      <div className="text max-w-screen-sm h-full mx-auto px-5 sm:px-[8vw] absolute top-0">
        <div className="para mt-[100%] sm:mt-[85%] w-[80vw] sm:w-[25vw] text-white sm:ml-4 mb-[30%]">
          <p className="masker text-lg sm:text-xl font-medium tracking-tighter overflow-hidden">
            {" "}
            <motion.span
              initial={{ rotate: 90, y: "100%", opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: Power4.easeInOut, duration: 0.9 }}
              className="inline-block origin-left"
            >
              Global digital design studio partnering
            </motion.span>
          </p>
          <p className="text-lg sm:text-xl font-medium tracking-tighter leading-4 overflow-hidden">
            {" "}
            <motion.span
              initial={{ rotate: 90, y: "100%", opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: Power4.easeInOut, duration: 1.1 }}
              className="inline-block origin-left"
            >
              with brands and businesses that
            </motion.span>{" "}
          </p>
          <p className="text-lg sm:text-xl font-medium tracking-tighter overflow-hidden">
            {" "}
            <motion.span
              initial={{ rotate: 90, y: "100%", opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: Power4.easeInOut, duration: 1.3 }}
              className="inline-block origin-left"
            >
              create exceptional experiences where
            </motion.span>
          </p>
          <p className="text-lg sm:text-xl font-medium tracking-tighter leading-4 overflow-hidden">
            {" "}
            <motion.span
              initial={{ rotate: 90, y: "100%", opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: Power4.easeInOut, duration: 1.5 }}
              className="inline-block origin-left"
            >
              people live, work, and unwind.
            </motion.span>
          </p>
        </div>
        <div className="heading text-white mt-4 mb-10 sm:mt-[20%] select-none flex flex-col">
          <h1 className="text-5xl font-medium tracking-normal sm:tracking-normal leading-none sm:text-[14vw]">
            Digital
          </h1>
          <h1 className="text-5xl font-medium tracking-normal sm:tracking-normal leading-none  sm:text-[14vw]">
            Design
          </h1>
          <h1 className="text-5xl font-medium tracking-normal sm:tracking-normal leading-none sm:text-[16vw]">
            Experience
          </h1>
        </div>
        <span className="text-white sm:hidden sm:ml-4">
          <FaArrowDown />
        </span>
        <div className="text-white my-10 sm:mt-[7vw] sm:ml-4">
          <p className="text-lg tracking-tighter sm:text-xl font-medium">
            We help experience-driven companies thrive{" "}
          </p>
          <p className="text-lg tracking-tighter leading-[6vw] sm:text-xl font-medium leading">
            by making their audience feel the refined
          </p>
          <p className="text-lg tracking-tighter sm:text-xl font-medium">
            intricacies of their brand and product in the
          </p>
          <p className="text-lg tracking-tighter leading-[6vw] sm:text-xl font-medium leading">
            digital space. Unforgettable journeys start
          </p>
          <p className="text-lg tracking-tighter sm:text-xl font-medium">
            {" "}
            with a click.
          </p>
        </div>
        <a
          href="#"
          className="text-lg text-white inline-block sm:mt-[3vw] sm:ml-4"
        >
          The Studio
        </a>
        <hr className="border-none h-[1px] bg-zinc-300 w-[22vw] sm:w-[6.6vw] sm:ml-4" />
      </div>
    </div>
  );
};

export default Landing;
