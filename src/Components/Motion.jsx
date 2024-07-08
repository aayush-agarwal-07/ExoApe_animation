import gsap, { Linear, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Motion = () => {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 top",
        pin: true,
        scrub: 1,
      },
    });
    tl.to(
      first.current,
      {
        y: "-50%",
        ease: Linear,
      },
      "a"
    )
      .to(
        second.current,
        {
          x: "50%",
          ease: Linear,
        },
        "a"
      )
      .to(
        third.current,
        {
          x: "-50%",
          ease: Linear,
        },
        "a"
      )
      .to(
        fourth.current,
        {
          x: "50%",
          ease: Linear,
        },
        "a"
      );
  });

  return (
    <div
      ref={parent}
      className="w-full h-[120vh] hidden sm:block"
    >
      <div className="w-[40%] h-1/2 relative">
        <img
          ref={first}
          className="absolute w-20 h-[5rem] scale-[1.95] -right-[55%] top-[25%] z-[10] object-contain"
          src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/440x625/filters:quality(90)"
        />
        <video
          ref={second}
          autoPlay
          muted
          loop
          className="absolute w-[7rem] aspect-video scale-[2.45] left-[26vw] top-[50%] z-[12]"
          src="src/assets/home-news-diesel-be-a-follower.mp4"
        />
        <video
          ref={third}
          autoPlay
          muted
          loop
          className="absolute w-[7rem] aspect-[1.5/1] scale-[2.45] -right-[56%] z-[2] -bottom-[57%]"
          src="src/assets/news-rino-pelle.mp4"
        />
        <img
          ref={fourth}
          className="absolute w-[8rem] scale-[2] left-[60%] -bottom-[55%]"
          src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
        />
        <img
          className="w-full h-full object-contain scale-[1.65] absolute top-[50%] left-[70%]"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/440x752/filters:quality(90)"
        />
      </div>
    </div>
  );
};

export default Motion;
