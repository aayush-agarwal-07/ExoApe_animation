import React from "react";
import { BsStars } from "react-icons/bs";

const Spread = () => {
  return (
    <div className="w-full bg-white h-[80vh] sm:h-[140vh] mt-10 sm:mt-0">
      <div className="max-w-screen-lg mx-auto px-5 sm:px-10 flex flex-col items-center gap-[12vw] sm:gap-[3vw]">
        <div className="flex justify-center text-black space-y-[20%] sm:space-y-[15.5vw]">
          <span className="mt-[21%] mr-2 sm:mt-[16vw]">{<BsStars />}</span>
          <h5>In the Media</h5>
        </div>
        <div className="text-black text-7xl text-center sm:text-9xl sm:font-medium">
          <h1 className="leading-widest tracking-tighter">Spread</h1>
          <h1 className="leading-widest tracking-tighter">the News</h1>
        </div>
        <p className="text-center text-black w-[60vw] sm:w-[38%] sm:font-medium sm:text-lg">
          Find out more about our work
          on these leading design and
          technology platforms.
        </p>
      </div>
    </div>
  );
};

export default Spread;
