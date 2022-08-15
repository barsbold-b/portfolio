import React, { useRef, useEffect, useContext } from "react";
import {
  IoLanguage,
  IoGitBranchOutline,
  IoLogoJavascript,
  IoLogoReact,
  IoCodeSlashOutline,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

import { MdOutlineSelfImprovement } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

function Icon(props) {
  switch (props.name) {
    case "language":
      return <IoLanguage size={props.size} />;
    case "javascript":
      return <IoLogoJavascript size={props.size} />;
    case "react":
      return <IoLogoReact size={props.size} />;
    case "branch":
      return <IoGitBranchOutline size={props.size} />;
    case "selfImprovement":
      return <MdOutlineSelfImprovement size={props.size} />;
    case "code":
      return <IoCodeSlashOutline size={props.size} />;
    case "phone":
      return <BsFillTelephoneFill size={props.size} />;
    case "email":
      return <IoIosMail size={props.size} />;
    case "instagram":
      return <IoLogoInstagram size={props.size} />;
    case "github":
      return <IoLogoGithub size={props.size} />;
    case "discord":
      return <FaDiscord size={props.size} />;
  }
}
export default Icon;
