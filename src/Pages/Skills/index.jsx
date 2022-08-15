import React, { useContext, useRef, useEffect } from "react";
import Card from "../../Components/Card";
import GridContainer from "../../Components/GridContainer";
import GradientBackground from "../../Components/GradientBackground";
import Title from "../../Components/Title";
import { ColorContext } from "../../Context/ColorContext";
import Style from "./style.module.css";
import FlexContainer from "../../Components/FlexContainer";
import ContactSection from "../../Components/ContactSection";
import QuickLinks from "../../Components/QuickLinks";

const Skills = () => {
  const colors = useContext(ColorContext);
  const pageRef = useRef(null);
  useEffect(() => {
    pageRef.current.style.backgroundColor = colors.backgroundColor;
  }, []);
  let skillNames = [
    {
      name: "language",
      text: "Англи хэлний B2 түвшинтэй. Интернет эх сурвалжаас мэдээлэл олж авах боловсруулах чадвартай.",
    },
    {
      name: "branch",
      text: "Алгоритмийн ахисан дунд шатны мэдлэгтэй бөгөөд төрөл бүрийн ашигтай алгоритм зохиомжлох чадвартай.",
    },
    { name: "code", text: "HTML болон CSS-ийн ахисан шатны мэдлэгтэй." },
    {
      name: "javascript",
      text: "Javascript хэлний ахисан шатны мэдлэгтэй. Төрөл бүрийн интерактив вебсайт болон веб-апп хөгжүүлэх чадвар сайтай.",
    },
    {
      name: "react",
      text: "React фреймворкийн талаар ахисан дунд шатны мэдлэгтэй. React Native-ийн анхан шатны мэдлэгтэй. Цааш хурдацтай хөгжих боломжтой.",
    },
    {
      name: "selfImprovement",
      text: "Self learning буюу бие даан сурах чадвар сайтай.",
    },
  ];

  return (
    <div className={Style.Skills} ref={pageRef}>
      <div>
        <Title text="Skills" />
        <GradientBackground>
          <GridContainer size={skillNames.length}>
            {skillNames.map((el, i) => {
              return <Card data={el} key={i} />;
            })}
          </GridContainer>
        </GradientBackground>
      </div>
      <FlexContainer>
        <ContactSection />
        <QuickLinks />
      </FlexContainer>
    </div>
  );
};
export default Skills;
