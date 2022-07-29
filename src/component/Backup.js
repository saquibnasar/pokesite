import React, { useState } from "react";
import BtnComponent from "./BtnComponent";
import { datas, seasonData } from "./Data";
import { Link } from "react-router-dom";
export default function Backup() {
  const [gen, setGen] = useState(datas[0].gen1);
  const [season, setseason] = useState(seasonData);
  const changeGenHeader = (genNum, btnId) => {
    const btnGen = document.getElementById(btnId);
    const genBtn = document.querySelectorAll(".gen");
    for (let btn of genBtn) {
      btn.classList.remove("btn-main-fill");
    }
    btnGen.classList.add("btn-main-fill");

    setGen(genNum);
  };

  return (
    <>
      <section className="anime bg-pink pb-100 pt-75">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center">
              <div className="row">
                <BtnComponent
                  id="all"
                  btnClick={changeGenHeader.bind(null, seasonData, "all")}
                  btnFill="btn-main-fill"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  genText="All"
                />
                <BtnComponent
                  id="gen-1"
                  btnClick={changeGenHeader.bind(null, datas[0].gen1, "gen-1")}
                  customSize="custom-size"
                  textAlign="text-sm-start"
                  genText="Gen-1"
                />

                <BtnComponent
                  id="gen-2"
                  btnClick={changeGenHeader.bind(null, datas[0].gen2, "gen-2")}
                  genText="Gen-2"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-3"
                  btnClick={changeGenHeader.bind(null, datas[0].gen3, "gen-3")}
                  genText="Gen-3"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-4"
                  btnClick={changeGenHeader.bind(null, datas[0].gen4, "gen-4")}
                  genText="Gen-4"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-5"
                  btnClick={changeGenHeader.bind(null, datas[0].gen5, "gen-5")}
                  genText="Gen-5"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-6"
                  btnClick={changeGenHeader.bind(null, datas[0].gen6, "gen-6")}
                  genText="Gen-6"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-7"
                  btnClick={changeGenHeader.bind(null, datas[0].gen7, "gen-7")}
                  genText="Gen-7"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-8"
                  btnClick={changeGenHeader.bind(null, datas[0].gen8, "gen-8")}
                  genText="Gen-8"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-9"
                  btnClick={changeGenHeader.bind(null, datas[0].gen9, "gen-9")}
                  genText="Gen-9"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-10"
                  btnClick={changeGenHeader.bind(
                    null,
                    datas[0].gen10,
                    "gen-10"
                  )}
                  genText="Gen-10"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />

                <BtnComponent
                  id="gen-11"
                  btnClick={changeGenHeader.bind(
                    null,
                    datas[0].gen11,
                    "gen-11"
                  )}
                  genText="Gen-11"
                  customSize="custom-size"
                  textAlign="text-sm-start"
                />
              </div>
            </div>
            <div className="col-11 mt-75 mx-auto">
              <div className="show_case_container bg-white">
                <div className="row py-5 px-4 row-gap-3">
                  {gen.map((value, id) => {
                    return (
                      <div
                        key={id}
                        className="col-lg-3 col-md-4 col-12 show_card carousel-cell"
                      >
                        <Link
                          to="/anime"
                          onClick={changeGenHeader.bind(
                            null,
                            value.datas,
                            "gen-8"
                          )}
                        >
                          <img src={value.img} className="img-fluid" alt="" />
                        </Link>
                        <div className="notch-bottom-right"></div>
                        <h6 className="episode_number">
                          {value.episodeNumber}
                        </h6>
                        <h6 className="episode_name">{value.episodeTitle}</h6>
                      </div>
                    );
                  })}
                  {season.map((value, id) => {
                    return (
                      <div
                        key={id}
                        className="col-lg-3 col-md-4 col-12 show_card carousel-cell"
                      >
                        <Link
                          to="/anime"
                          onClick={changeGenHeader.bind(
                            null,
                            value.datas,
                            "gen-8"
                          )}
                        >
                          <img src={value.img} className="img-fluid" alt="" />
                        </Link>
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
