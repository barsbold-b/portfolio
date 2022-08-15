import React from "react";
import ColumnContainer from "../ColumnContainer";
import IconedLink from "../IconedLink";
import Style from "./style.module.css";

const QuickLinks = () => {
  const quickLinksDatas = [
    {
      name: "github",
      displeyName: "Git-Hub",
      action: function () {
        window.open("https://github.com/Saraba-alt", "_blank");
      },
      toolTipText: "Click to go to GitHub profile",
    },
    {
      name: "discord",
      displeyName: "Discord",
      action: function () {
        navigator.clipboard.writeText("#9043");
      },
      toolTipText: "Click to copy discord ID",
    },
  ];
  return (
    <div className={Style.QuickLinks}>
      <ColumnContainer>
        <h1 className={Style.Header}>Quick Links</h1>
        {quickLinksDatas.map((el, i) => {
          return <IconedLink data={el} key={i} />;
        })}
      </ColumnContainer>
    </div>
  );
};
export default QuickLinks;
