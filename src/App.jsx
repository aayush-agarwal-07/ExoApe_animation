import LocomotiveScroll from "locomotive-scroll";
import React from "react";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Motion from "./Components/Motion";
import Navbar from "./Components/Navbar";
import PlayReel from "./Components/PlayReel";
import Spread from "./Components/Spread";
import WorkPlus from "./Components/WorkPlus";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen">
      <Navbar />
      <Landing />
      <WorkPlus />
      <PlayReel />
      <Motion />
      <Spread />
      <Footer />
    </div>
  );
};

export default App;
