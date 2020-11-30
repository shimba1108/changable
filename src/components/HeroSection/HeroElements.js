import styled from "styled-components";
import { FaUsers } from "react-icons/fa";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 80px;
  /* text-align: center; */
  /* height: 100%; */
  /* margin-right: 50px; */
  /* justify-self: center; */

  @media screen and (max-width: 768px) {
    font-size: 52px;
  }

  @media screen and (max-width: 480px) {
    font-size: 44px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(ArrowForwardIosIcon)`
  margin-left: 8px;
  font-size: 20px;
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  /* -left: 10px; */
`;

export const TeamLogo = styled(FaUsers)`
  margin-top: 5px;
  color: white;
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-size: 52px;
  }

  @media screen and (max-width: 480px) {
    font-size: 44px;
  }
`;
