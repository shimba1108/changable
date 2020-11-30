import Goal from "../../assets/img/goal.jpg";
import Study from "../../assets/img/study2.jpg";
import Team from "../../assets/img/team.jpg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Team Forming",
  headLine: "まずはチーム結成",
  description:
    "同じの目標を持つ仲間とチームを結成し、目標に対する日々の進捗を共有することで、1人では成し得ることのできない目標もらくらく達成",
  buttonLabel: "Get Started",
  imgStart: false,
  img: Team,
  alt: "team",
  dark: false,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "Discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Study Sharing",
  headLine: "チーム内で学習時間を共有",
  description:
    "1人では億劫な学習も、仲間と共有することで高いモチベーションの維持が可能に",
  buttonLabel: "Get Started",
  imgStart: true,
  img: Study,
  alt: "goal",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "Signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Sign Up",
  headLine: "いますぐ簡単登録",
  description: "目標を達成するために今すぐ会員登録しよう！",
  buttonLabel: "Sign Up",
  imgStart: false,
  img: Goal,
  alt: "signup",
  dark: false,
  primary: false,
  darkText: true,
};
