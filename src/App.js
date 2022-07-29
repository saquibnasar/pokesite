import "./App.scss";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Anime from "./component/Anime";
import Movie from "./component/Movie";
import Game from "./component/Game";
import AnimeLayout from "./component/AnimeLayout";
import MovieLayout from "./component/MovieLayout";

function App() {
  const [expanded, setExpanded] = useState("show");
  const [bg, setBg] = useState("bg-blue");
  const changeBg = (bgColor) => {
    setBg(bgColor);
  };
  const removeClass = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show");
  };
  return (
    <>
      <BrowserRouter>
        <Navbar bgColor={bg} changeBg={changeBg} removeClass={removeClass} />
        <Routes>
          <Route path="/pokesite" element={<Home />} />
          <Route path="/pokesite/game" element={<Game />} />
          <Route path="/pokesite/movie" element={<Movie />} />
          <Route path="/pokesite/movie/:movieId" element={<MovieLayout />} />
          <Route path="/pokesite/anime/:animeId" element={<AnimeLayout />} />
          <Route path="/pokesite/anime" element={<Anime />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
