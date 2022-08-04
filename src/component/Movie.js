import React from "react";
import BtnComponent from "./BtnComponent";
import { AllMovie } from "./Data";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
export default function Movie() {
  return (
    <>
      <section id="movie_section" className="movie bg-pink pb-100 pt-75">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center">
              <div className="row row-gap-4">
                <BtnComponent
                  id="movie1"
                  genText="All"
                  customSize="custom-size"
                  textAlign="text-sm-end"
                  link="/pokesite/movie"
                />
                <BtnComponent
                  id="movieSeries1"
                  genText="Original"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  link="/pokesite/movie/movieSeries1"
                />
                <BtnComponent
                  id="movieSeries2"
                  genText="Ruby"
                  customSize="custom-size"
                  textAlign="text-sm-end"
                  link="/pokesite/movie/movieSeries2"
                />
                <BtnComponent
                  id="movieSeries3"
                  genText="Pearl"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  link="/pokesite/movie/movieSeries3"
                />

                <BtnComponent
                  id="movieSeries4"
                  genText="Black"
                  customSize="custom-size"
                  textAlign="text-sm-end"
                  link="/pokesite/movie/movieSeries4"
                />
                <BtnComponent
                  id="movieSeries5"
                  genText="XY"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  link="/pokesite/movie/movieSeries5"
                />

                <BtnComponent
                  id="movieSeries6"
                  genText="Sun"
                  customSize="custom-size"
                  textAlign="text-sm-end"
                  link="/pokesite/movie/movieSeries6"
                />
                <BtnComponent
                  id="movieSeries7"
                  genText="Series"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  link="/pokesite/movie/movieSeries7"
                />
              </div>
            </div>
            <div className="col-11 mt-75 mx-auto">
              <div className="show_case_container bg-white">
                <div className="row py-5 px-4 row-gap-3">
                  {AllMovie.map((value, id) => {
                    return (
                      <div
                        key={id}
                        className="col-lg-3 col-md-4 col-12 show_card carousel-cell"
                      >
                        <Link to="/">
                          <img src={value.img} className="img-fluid" alt="" />
                        </Link>
                        {/* <a href="#" class="play-icon">
                          <FontAwesomeIcon
                            icon={faPlayCircle}
                            class="play-circle"
                          ></FontAwesomeIcon>

                          <span class="border-animation border-animation--border-1"></span>
                          <span class="border-animation border-animation--border-2"></span>
                        </a> */}
                        <div className="notch-bottom-right"></div>
                        <h6 className="episode_number">
                          {value.episodeNumber}
                        </h6>
                        <h6 className="episode_name">{value.episodeTitle}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
