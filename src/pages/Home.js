import React, { useState } from "react";
import Drawer from "../components/Drawer/Drawer";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import Herosection from "../components/HeroSection/Herosection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/InfoSection";
import Services from "../components/Services/Services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home">
      <Drawer isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Herosection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </div>
  );
};

export default Home;
