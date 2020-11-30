import React, { useState } from "react";
import Video from "../../assets/videos/video2.mp4";
import { FaUsers } from "react-icons/fa";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  TeamLogo,
  LogoWrap,
} from "./HeroElements";
import { ButtonTo } from "../ButtonElements";
import { auth, provider } from "../../firebase";

const Herosection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const signInWithGoggle = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <LogoWrap>
          <TeamLogo /> <HeroH1>Changable</HeroH1>
        </LogoWrap>

        <HeroP>Work hard together</HeroP>
        <HeroP>You can change everything</HeroP>
        <HeroBtnWrapper>
          <ButtonTo
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonTo>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Herosection;
