import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MainContext from "../contexts/MainContext";
import Separator from "../assets/separator.svg";

export default function NavbarMenus(props) {
  const { showNav } = props;
  const { initialContent } = useContext(MainContext);
  const routes = ["permanentexhibition", "temporarycollection"];
  const altImage = "Slash as visual separator";

  return (
    <ul className="navbarMenus">
      {initialContent
        .filter((e) => e.ref.includes("NavMenu"))
        .map((e, index) => (
          <li key={e.id}>
            <NavLink id={e.id} to={routes[index]} onClick={showNav}>
              {e.text}
            </NavLink>
            <img src={Separator} alt={altImage} />
          </li>
        ))}
    </ul>
  );
}

NavbarMenus.propTypes = {
  showNav: PropTypes.func,
};

NavbarMenus.defaultProps = {
  showNav: false,
};
