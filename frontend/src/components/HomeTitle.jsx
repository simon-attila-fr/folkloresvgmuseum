import React, { useContext } from "react";
import MainContext from "../contexts/MainContext";

export default function HomeTitle() {
  const { initialContent } = useContext(MainContext);

  return (
    <div className="textAreaTitle">
      <h1>
        <span>
          {initialContent
            .filter((e) => e.ref.includes("homeTitle"))
            .map((e) => (
              <h1 key={e.id}>{e.text.split(" ").slice(0, 2).join(" ")}</h1>
            ))}
        </span>
        <span>
          {" "}
          {initialContent
            .filter((e) => e.ref.includes("homeTitle"))
            .map((e) => (
              <h1 key={e.id}>{e.text.split(" ").slice(2).join(" ")}</h1>
            ))}
        </span>
      </h1>
    </div>
  );
}
