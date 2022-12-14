import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
export default function Footer() {
  return (
    <>
      <section className="footer pt-100">
        <div className="container-fluid px-50">
          <div className="row">
            <div className="col-xl-3 col-8">
              <Link to="/pokesite#home_section">
                <img src="/pokesite/images/logo.png" alt="" />
              </Link>
              <div className="social_media d-flex gap-3">
                <Link to="/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5  mt-4 mt-xl-0 ">
              <img
                className="img-fluid"
                src="/pokesite/images/company-logo.png"
                alt=""
              />
              <div className="d-flex gap-5 mt-5 align-items-start align-items-sm-center flex-sm-row flex-column">
                <img
                  className="h-5"
                  src="/pokesite/images/nintendo-logo.png"
                  alt=""
                />
                <img
                  className="max-width-70"
                  src="/pokesite/images/privacy-img.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 mt-4 mt-xl-0 footer_link">
              <h4>Explore</h4>
              <Link to="/pokesite/movie#movie_section" className="mt-5 d-block">
                Movies
              </Link>
              <Link to="/pokesite/anime#anime_section" className="d-block mt-3">
                Anime
              </Link>
              <Link to="/pokesite/game#game_section" className="d-block mt-3">
                Game
              </Link>
            </div>
            <div className="col-xl-2 col-lg-3 mt-4 mt-xl-0 footer_link">
              <h4>Terms</h4>
              <Link to="/pokesite#home_section" className="mt-5 d-block">
                Terms of use
              </Link>
              <Link to="/pokesite#home_section" className="d-block mt-3">
                Privacy policy
              </Link>
              <Link to="/pokesite#home_section" className="d-block mt-3">
                Help
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_bottom mt-5 text-center">
          <h3>?? Copyright 2021 by Layerdrops.com</h3>
        </div>
      </section>
    </>
  );
}
