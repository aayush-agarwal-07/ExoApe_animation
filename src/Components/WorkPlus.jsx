import { motion } from "framer-motion";
import React from "react";
import { BsStars } from "react-icons/bs";

const WorkPlus = () => {
  var images = [
    {
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/900x1121/filters:quality(90)",
      h: "Columbia Pictures",
      p: "Celebrating a Century of Cinema",
      v: "src/assets/dee0a4f7.mp4",
    },
    {
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/900x1121/filters:quality(90)",
      h: "Rino & Pelle",
      p: "Effortless chic lifestyle",
      v: "src/assets/5ac47112.mp4",
    },
    {
      image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
      h: "Aebele Interiors",
      p: "Luxurious design experience",
      v: "src/assets/4ce94964.mp4",
    },
    {
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
      h: "Pixelflakes",
      p: "Architectural marketing agency",
      v: "src/assets/1f289d51.mp4",
    },
  ];

  return (
    <div className="sm:relative w-full">
      <div className="w-full mt-10 sm:mt-[7%] pl-[7%] p-7 sm:relative sm:flex gap-[15%] sm:overflow-hidden">
        <img
          className="w-[37vw] hidden sm:block sm:ml-[7%]"
          src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/900x1121/filters:quality(90)"
        />
        <video
          autoPlay
          muted
          loop
          className="w-[44vw] hidden sm:block absolute top-7 right-[45.5%] h-[107vh] object-contain"
          src="src/assets/dee0a4f7.mp4"
        />

        <h6 className="hidden sm:block sm:absolute bottom-[1px] left-[13.5%] text-black">
          Columbia Pictures -{" "}
          <span className="text-zinc-500">Celebrating a Century of Cinema</span>
        </h6>
        <div className="flex sm:absolute sm:right-[25%]">
          <span className="mt-1">{<BsStars />}</span>
          <h5>Featured Projects</h5>
        </div>
        <div className="text-black my-5 sm:mt-[5vw]">
          <p className="text-lg tracking-tighter sm:text-xl font-medium">
            Highlights of cases that we
          </p>
          <p className="text-lg tracking-tighter leading-[6vw] sm:text-xl font-medium leading">
            passionately built with forward-thinking
          </p>
          <p className="text-lg tracking-tighter sm:text-xl font-medium">
            clients and friends over the years.
          </p>
        </div>
        {images.map((image, i) => (
          <div
            key={i}
            className="flex flex-col  mb-7 sm:hidden overflow-hidden relative object-contain h-[120vw]"
          >
            <video
              data-scroll
              data-scroll-speed="-.1"
              autoPlay
              muted
              loop
              className="block sm:hidden w-full h-[105vw]"
              src={image.v}
            />
            <h6 className="mt-2 ml-1">{image.h}</h6>
            <h6 className="text-sm text-zinc-400 ml-1 ">{image.p}</h6>
          </div>
        ))}
      </div>
      <motion.img
        data-scroll
        data-scroll-speed="-.1"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        className="w-[24vw] hidden sm:block sm:absolute sm:z-[2] -bottom-[20%] right-[11%]"
        src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/900x1121/filters:quality(90)"
      />
      <video
        data-scroll
        data-scroll-speed="-.1"
        autoPlay
        muted
        loop
        className="w-[24vw] hidden sm:block sm:absolute z-[1] -bottom-[20%] right-[11%]"
        src="src/assets/5ac47112.mp4"
      />

      <h6
        data-scroll
        data-scroll-speed="-.1"
        className="hidden sm:block sm:absolute -bottom-[25%] right-[15%]"
      >
        Rino & Pelle -{" "}
        <span className="text-zinc-500">Effortless Chic Lifestyle</span>
      </h6>
      <motion.img
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        data-scroll
        data-scroll-speed=".1"
        className="w-[32vw] hidden sm:block sm:absolute sm:z-[2] -bottom-[130%] right-[24%]"
        src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)"
      />
      <video
        data-scroll
        data-scroll-speed=".1"
        autoPlay
        muted
        loop
        className="w-[32vw] hidden sm:block z-[1] absolute -bottom-[130%] right-[24%] object-contain"
        src="src/assets/4ce94964.mp4"
      />

      <h6
        data-scroll
        data-scroll-speed=".1"
        className="hidden sm:block sm:absolute -bottom-[135%] right-[31%]"
      >
        Aebele Interiors -{" "}
        <span className="text-zinc-500">Luxurious design experience</span>
      </h6>

      <motion.img
        data-scroll
        data-scroll-speed="-.1"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        className="w-[19vw] hidden sm:block sm:absolute sm:z-[2] -bottom-[140%] left-[14%]"
        src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"
      />
      <video
        data-scroll
        data-scroll-speed="-.1"
        autoPlay
        muted
        loop
        className="w-[19vw] hidden sm:block absolute z-[1] -bottom-[140%] left-[14%] object-contain"
        src="src/assets/1f289d51.mp4"
      />

      <h6
        data-scroll
        data-scroll-speed="-.1"
        className="hidden sm:block sm:absolute -bottom-[145%] left-[14%] text-sm"
      >
        Pixelflakes -{" "}
        <span className="text-zinc-500">Architectural marketing agency</span>
      </h6>
    </div>
  );
};

export default WorkPlus;
