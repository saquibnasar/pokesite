import React from "react";
import BtnComponent from "./BtnComponent";
import { datas } from "./Data";
import { Link, useParams } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
export default function AnimeLayout() {
  const { animeId } = useParams();
  const season = datas.find((seasons) => seasons.name == animeId);

  return (
    <>
      <section className="anime bg-pink pb-100 pt-75">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center">
              <div className="row row-gap-4">
                <BtnComponent
                  id="AllMovie"
                  genText="All"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  link="/pokesite/anime/"
                />
                <BtnComponent
                  id="season24"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  genText="Gen-1"
                  link="/pokesite/anime/season24"
                />

                <BtnComponent
                  id="season23"
                  genText="Gen-2"
                  link="/pokesite/anime/season23"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-3"
                  genText="Gen-3"
                  link="/pokesite/anime/season22"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-4"
                  genText="Gen-4"
                  link="/pokesite/anime/season21"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-5"
                  genText="Gen-5"
                  link="/pokesite/anime/season20"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-6"
                  genText="Gen-6"
                  link="/pokesite/anime/season19"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-7"
                  genText="Gen-7"
                  link="/pokesite/anime/season18"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />
              </div>
            </div>
            <div className="col-11 mt-75 mx-auto">
              <div className="show_case_container bg-white">
                <div className="row py-5 px-4 row-gap-3">
                  {season.data.map((value, id) => {
                    return (
                      <div
                        key={id}
                        className="col-lg-3 col-md-4 col-12 show_card carousel-cell"
                      >
                        <Link to="/anime">
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
                          Episode #{value.episodeNumber}
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
