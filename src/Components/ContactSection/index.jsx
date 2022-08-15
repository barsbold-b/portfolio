import React from "react";
import Style from "./style.module.css";
import ColumnContainer from "../ColumnContainer";
import IconedLink from "../IconedLink";

const ContactSection = () => {
  const contactMethods = [
    {
      name: "phone",
      displeyName: "95101825",
      value: "+976 95101825",
      action: function (text) {
        navigator.clipboard.writeText(text);
      },
      toolTipText: "Click to copy phone number",
    },
    {
      name: "email",
      displeyName: "E-Mail",
      value: "barsbold.coding@gmail.com",
      action: function (text) {
        navigator.clipboard.writeText(text);
      },
      toolTipText: "Click to copy E-Mail address",
    },
    {
      name: "instagram",
      displeyName: "Instagram",
      value: "sarabaq3q",
      action: function (text) {
        window.open(`https://instagram.com/${text}/`, "_blank");
      },
      toolTipText: "Click to go to Instagram profile",
    },
  ];
  return (
    <div className={Style.ContactSection}>
      <ColumnContainer>
        <h1 className={Style.Heading}>Contact</h1>
        {contactMethods.map((el, i) => {
          return <IconedLink data={el} key={i} />;
        })}
      </ColumnContainer>
    </div>
  );
};
export default ContactSection;
