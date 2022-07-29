import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { datas } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home_anime() {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="home_anime bg-pink mt-100 py-100">
        <div className="container-fluid px-50">
          <div className="row">
            <div className="col-xl-3 order-xl-1 order-2 col-6 mt-xl-0 mt-3">
              <h3 className="primary_heading">Pokemon Anime</h3>
              <h4 className="primary_heading text-black fs-4 lh-sm">
                Pokémon Master Journeys: The Series
              </h4>
              <div className="d-flex gap-3 mt-3">
                <button
                  className="arrow_btn pre-btn"
                  onClick={() => {
                    sliderRef.current.slickPrev();
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button
                  className="arrow_btn next-btn"
                  onClick={() => {
                    sliderRef.current.slickNext();
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </div>
            <div className="show_case_container col-xl-9 order-xl-2 order-1 col-12 bg-white">
              <div className="main-carousel py-5 row">
                <Slider {...settings} ref={sliderRef}>
                  {datas[0].data.map((value, id) => {
                    return (
                      <div key={id} className="show_card carousel-cell">
                        <a href="#">
                          <img className="img-fluid" src={value.img} alt="" />
                        </a>
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
                          episode #{value.episodeNumber}
                        </h6>
                        <h6 className="episode_name">{value.episodeTitle}</h6>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
