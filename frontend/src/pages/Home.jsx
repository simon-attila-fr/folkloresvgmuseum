import { useEffect, useContext } from "react";
import axios from "axios";
import MainContext from "../contexts/MainContext";

export default function Home() {
  const { initialContent, setInitialContent } = useContext(MainContext);

  useEffect(() => {
    axios.get("http://localhost:5000/content/text").then((response) => {
      setInitialContent(response.data);
    });
  }, []);

  return (
    <div className="homeContainer">
      {initialContent
        .filter((e) => e.ref.includes("home"))
        .map((e) => (
          <p>{e.text}</p>
        ))}
    </div>
  );
}
