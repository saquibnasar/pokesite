import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Navbar(props) {
  return (
    <>
      <section
        id="navbar"
        className="navbar_section position-sticky top-0 z-index-100"
      >
        <nav
          className={`navbar navbar-expand-lg navbar-dark ${props.bgColor} py-4"`}
        >
          <div className="container-fluid px-50">
            <Link className="navbar-brand" to="/#home_section">
              <img
                className="max-width-70"
                src="/pokesite/images/logo.png"
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`navbar-collapse collapse ${props.expanded}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                <li
                  className="nav-item"
                  onClick={() => {
                    props.changeBg("bg-blue");
                    props.removeClass();
                  }}
                >
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/pokesite/#home_section"
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    props.changeBg("bg-blue");
                    props.removeClass();
                  }}
                >
                  <NavLink
                    className="nav-link"
                    to="/pokesite/movie#movie_section"
                  >
                    Movies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/pokesite/anime#anime_section"
                    onClick={() => {
                      props.changeBg("bg-blue");
                      props.removeClass();
                    }}
                  >
                    Anime
                  </NavLink>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    props.changeBg("bg-blue");
                    props.removeClass();
                  }}
                >
                  <NavLink
                    className="nav-link"
                    to="/pokesite/game#game_section"
                  >
                    Game
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
