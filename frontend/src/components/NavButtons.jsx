import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MainContext from "../contexts/MainContext";

export default function NavButtons() {
  const { initialContent } = useContext(MainContext);
  const path = ["/signup", "/login"];

  return (
    <div className="navbarButtons">
      {initialContent
        .filter((e) => e.ref.includes("NavButton"))
        .map((e, index) => (
          <NavLink to={path[index]}>
            <button key={e.id} type="button">
              {e.text}
            </button>
          </NavLink>
        ))}
    </div>
  );
}
