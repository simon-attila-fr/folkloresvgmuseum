/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import Logo from "./Logo";
import NavTitle from "./NavTitle";
import NavMenus from "./NavMenus";
import NavButtons from "./NavButtons";
import "./Navbar.css";

export default function Navbar() {
  const [showMobilenav, setShowMobilenav] = useState(false);
  function showNav() {
    setShowMobilenav(!showMobilenav);
  }

  return (
    <div className="navbarContainer">
      <Logo />
      <NavTitle />
      <NavMenus showNav={showNav} />
      <NavButtons />
    </div>
  );
}
