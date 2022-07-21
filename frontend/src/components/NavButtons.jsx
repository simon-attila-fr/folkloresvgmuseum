import React, { useContext } from "react";
import MainContext from "../contexts/MainContext";

export default function NavButtons() {
  const { initialContent } = useContext(MainContext);

  return (
    <div className="navbarButtons">
      {initialContent
        .filter((e) => e.ref.includes("NavButton"))
        .map((e) => (
          <button key={e.id} type="button">
            {e.text}
          </button>
        ))}
    </div>
  );
}
