import { useEffect, useContext } from "react";
import axios from "axios";
import MainContext from "../contexts/MainContext";
import HomeTitle from "../components/HomeTitle";
import HomeSubtitle from "../components/HomeSubtitle";
import landingPageImage from "../assets/homeImage1.png";
import "./Home.css";

export default function Home() {
  const { initialContent, setInitialContent } = useContext(MainContext);

  useEffect(() => {
    axios.get("http://localhost:5000/content/text").then((response) => {
      setInitialContent(response.data);
    });
  }, []);

  return (
    <div className="homeContainer">
      <section className="titleArea">
        <div className="imageArea">
          <img
            src={landingPageImage}
            alt="La tête d'une femme aux trois bouches."
          />
        </div>
        <div className="textArea">
          <HomeTitle />
          <HomeSubtitle />
        </div>
      </section>
      {initialContent
        .filter((e) => e.ref.includes("home"))
        .map((e) => (
          <p>{e.text}</p>
        ))}
    </div>
  );
}
