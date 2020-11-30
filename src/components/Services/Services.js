import React from "react";
import Icon3 from "../../assets/img/study.png";
import Icon2 from "../../assets/img/GoalShare.png";
import Icon1 from "../../assets/img/TeamSpirit.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="Services">
        <ServicesH1>サービス概要</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>チーム結成</ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>目標設定</ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>記録共有</ServicesH2>
            <ServicesP></ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
