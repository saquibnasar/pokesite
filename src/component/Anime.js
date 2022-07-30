import React from "react";
import BtnComponent from "./BtnComponent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { seasonData } from "./Data";
import { Link } from "react-router-dom";
export default function Anime() {
  return (
    <>
      <section id="anime_section" className="anime bg-pink pb-100 pt-75">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center">
              <div className="row row-gap-4">
                <BtnComponent
                  id="all"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  genText="All"
                  link="anime"
                />
                <BtnComponent
                  id="gen-1"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  genText="Gen-1"
                  link="anime/season24"
                />

                <BtnComponent
                  id="gen-2"
                  genText="Gen-2"
                  link="anime/season23"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-3"
                  genText="Gen-3"
                  link="anime/season22"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-4"
                  genText="Gen-4"
                  link="anime/season21"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-5"
                  genText="Gen-5"
                  link="anime/season20"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-6"
                  genText="Gen-6"
                  link="anime/season19"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-7"
                  genText="Gen-7"
                  link="anime/season18"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />
              </div>
            </div>
            <div className="col-11 mt-75 mx-auto">
              <div className="show_case_container bg-white">
                <div className="row py-5 px-4 row-gap-3">
                  {seasonData.map((value, id) => {
                    return (
                      <div
                        key={value.id}
                        className="col-lg-3 col-md-4 col-12 show_card carousel-cell"
                      >
                        <Link to={`${value.link}`}>
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
                          Season {value.seasonNumber}
                        </h6>
                        <h6 className="episode_name">{value.seasonTitle}</h6>
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
