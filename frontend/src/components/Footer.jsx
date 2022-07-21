import React, { useContext } from "react";
import MainContext from "../contexts/MainContext";
import "./Footer.css";

export default function Navbar() {
  const { initialContent } = useContext(MainContext);

  return (
    <div className="footerContainer">
      {initialContent
        .filter((e) => e.ref.includes("Footer"))
        .map((e) => (
          <p className="footerContent">{e.text}</p>
        ))}
    </div>
  );
}
