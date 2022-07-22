/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Home from "@pages/Home";
import Permanent from "./pages/PermanentExhibition";
import Temporary from "./pages/TemporaryCollection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContext from "./contexts/MainContext";
import "./App.css";

function App() {
  const [initialContent, setInitialContent] = useState([]);

  return (
    <div className="App">
      <MainContext.Provider
        value={{
          initialContent,
          setInitialContent,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/permanentexhibition" element={<Permanent />} />
          <Route path="/temporarycollection" element={<Temporary />} />
        </Routes>
        <Footer />
      </MainContext.Provider>
    </div>
  );
}

export default App;
