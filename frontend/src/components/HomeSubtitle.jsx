import React, { useContext } from "react";
import MainContext from "../contexts/MainContext";

export default function HomeSubtitle() {
  const { initialContent } = useContext(MainContext);

  return (
    <div className="textAreaSubtitle">
      <h2>
        {" "}
        {initialContent
          .filter((e) => e.ref.includes("homeSubtitle"))
          .map((e) => (
            <h2 key={e.id}>{e.text}</h2>
          ))}
      </h2>
    </div>
  );
}
