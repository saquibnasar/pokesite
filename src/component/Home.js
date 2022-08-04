import React from "react";
import Home_anime from "./Home_anime";
import Home_game from "./Home_game";
import Home_movie from "./Home_movie";

export default function Home() {
  return (
    <>
      <section className="home_section bg-blue pt-5" id="home_section">
        <div className="container-fluid px-50">
          <div className="row">
            <div className="home col-7 d-flex justify-content-center flex-column align-items-baseline">
              <h1 className="home_header">
                <span> Join the </span>
                <br />
                community
              </h1>
              <div>
                <a className="btn-main mt-4" href="/">
                  More
                </a>
              </div>
            </div>
            <div className="col-5 d-none d-lg-block  d-flex justify-content-end">
              <img src="/pokesite/images/pikachu.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Home_movie />
      <Home_game />
      <Home_anime />
    </>
  );
}
