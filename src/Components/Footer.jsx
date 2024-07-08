import React from "react";

const Footer = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto h-[90vh] sm:h-[140vh] overflow-hidden bg-[#070707] p-8 pt-[14vh] text-[#E0CCBB] sm:pt-[30vh] sm:pl-[15vh]">
      <video
        autoPlay
        loop
        muted
        className="absolute -top-[28%] left-[19%] w-full h-full object-contain scale-[0.9]"
      >
        <source
          src="https://drive.google.com/drive/u/0/home"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10  flex flex-col gap-5 sm:gap-9">
        <h1 className="text-6xl w-[15vw] leading-[9vh] sm:text-9xl sm:tracking-tight sm:leading-[20vh]">
          Our Story
        </h1>
        <h5 className="tracking-wider sm:text-xl sm:w-[80vh]">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </h5>
        <h4 className="border-b-[1px] border-[#E0CCBB] w-[13vh] sm:hidden">
          Our Story
        </h4>
        <hr className="border-none h-[1px] bg-[#E0CCBB]" />
        <div className="flex mt-[5%] sm:mt-[2%]">
          <div className="hidden sm:flex sm:flex-col sm:mr-[30%] sm:gap-[0.5vw]">
            <h6>Willem || Singel 8</h6>
            <h6>6041HS, Roermond</h6>
            <h6>The Ntherlands</h6>
            <h6 className="border-b-[1px] border-[#E0CCBB] w-[25vh]">
              hello@expoape.com
            </h6>
          </div>
          <div className="flex flex-col mr-[30%] gap-3 sm:gap-[0.5vw]">
            <h6>Work</h6>
            <h6>Studio</h6>
            <h6>News</h6>
            <h6>Contact</h6>
          </div>
          <div className="flex flex-col gap-3 sm:gap-[0.5vw]">
            <h6>Behance</h6>
            <h6>Dribble</h6>
            <h6>Twitter</h6>
            <h6>Instagram</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
