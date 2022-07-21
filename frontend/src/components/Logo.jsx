import { NavLink } from "react-router-dom";
import LogoImage from "../assets/logoipsum-logo-15.svg";
import "./Logo.css";

export default function Logo() {
  return (
    <NavLink to="/">
      <img
        className="logoImg"
        src={LogoImage}
        alt="Logo of Museum of Folklore SVG"
      />
    </NavLink>
  );
}
