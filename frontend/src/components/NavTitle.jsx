import React, { useContext } from "react";
import MainContext from "../contexts/MainContext";

export default function NavTitle() {
  const { initialContent } = useContext(MainContext);

  return (
    <div className="navbarTitle">
      {initialContent
        .filter((e) => e.ref.includes("NavProjectName"))
        .map((e) => (
          <h1 key={e.id}>{e.text}</h1>
        ))}
    </div>
  );
}
