import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { BsStars } from "react-icons/bs";

const VideoBackground = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
    });
    tl.to(videodiv.current, {
      scale: 3.5,
      ease: Power4.easeInOut,
      duration: 4,
      delay: .5,
    })
      .to(
        play.current,
        {
          x: "100%",
          ease: Power4.easeInOut,
          duration: 2,
        },
        "a"
      )
      .to(
        reel.current,
        {
          x: "-100%",
          ease: Power4.easeInOut,
          duration: 2,
        },
        "a"
      );
  });

  return (
    <div
      ref={parent}
      className="bg-[#0D0E13] w-full h-[100vh] opacity-90 sm:mt-[85%] sm:h-[120vh] sm:relative"
    >
      <div className="flex justify-center text-white space-y-[20%] sm:space-y-[4.5vw]">
        <span className="mt-[21%] mr-2 sm:mt-[5%]">{<BsStars />}</span>
        <h5>Work in motion</h5>
      </div>
      <div className="relative h-[40vh] mt-[30%]">
        <video
          ref={videodiv}
          autoPlay
          loop
          muted
          className="absolute -top-[25%] left-[24%] w-[50vw] sm:w-[18vw] sm:-top-[125%] sm:left-[41%] h-full object-contain"
          src="src/assets/Play.mp4"
        />

        <div className="text-white absolute top-[14%] left-[7.5%] flex text-5xl font-medium gap-[100%] sm:text-9xl sm:-top-[110%] sm:left-[12%] sm:gap-[100%]">
          <h1 ref={play}>Play</h1>
          <h1 ref={reel}>Reel</h1>
        </div>
      </div>
      <div className="flex justify-center text-white w-[70%] ml-[12.5vw] text-center sm:absolute sm:top-[80%] sm:left-[23.5%] sm:w-[28vw]">
        <h5>
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </h5>
      </div>
    </div>
  );
};

export default VideoBackground;
