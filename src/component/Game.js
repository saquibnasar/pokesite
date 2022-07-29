import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Game() {
  AOS.init({ duration: 800, offset: 160 });
  return (
    <>
      <section className="game py-100" id="game_section">
        <section className="game_top">
          <div className="container">
            <div className="row justify-content-center text-center">
              <h2 className="secondary_heading">
                Scarlet <span>And</span> Violet
              </h2>
              <p className="primary_para mb-5 mt-3">
                Learn new details about Sprigatito, Fuecoco, and Quaxly—the
                three Pokémon from which you’ll choose your first partner—along
                with other wonderful new Pokémon, including the Legendary
                Pokémon Koraidon and Miraidon!
              </p>
              <div className="col-lg-3 col-md-5 col-sm-6 col-12 mb-10r mb-sm-0">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/spackshot-m.png"
                    alt=""
                  />
                  <div className="d-flex justify-content-center">
                    <a className="preorder-btn mt-5">Preorder</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-6 col-12">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/vpackshot-m.png"
                    alt=""
                  />
                  <div className="d-flex justify-content-center">
                    <a className="preorder-btn mt-5">Preorder</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game_bottom mt-100">
          <div className="container">
            <div className="row text-center">
              <h2 className="secondary_heading">New Pokémon to Discover</h2>
              <p className="primary_para mb-5 mt-3">
                Pokémon Scarlet and Pokémon Violet will have many
                never-before-seen Pokémon waiting to meet you. These are just a
                few of the incredible new Pokémon you’ll encounter in this new
                adventure.
              </p>
              <h3 className="primary_heading text-black">
                First Partner Pokémon
              </h3>
              <div className="row mt-5">
                <div className="col-4" data-aos="slide-up">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/sprigatito.png"
                    alt=""
                  />
                  <p className="text-title mt-3">Sprigatito</p>
                </div>
                <div className="col-4" data-aos="slide-up">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/fuecoco.png"
                    alt=""
                  />
                  <p className="text-title mt-3">Fuecoco</p>
                </div>
                <div className="col-4" data-aos="slide-up">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/quaxly.png"
                    alt=""
                  />
                  <p className="text-title mt-3">Quaxly</p>
                </div>
              </div>
              <h3 className="primary_heading text-black mt-5">
                Legendary Pokémon
              </h3>
              <div className="row mt-5">
                <div className="col-6" data-aos="slide-up">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/koraidon.png"
                    alt=""
                  />
                  <p className="text-title mt-3">Koraidon</p>
                </div>
                <div className="col-6" data-aos="slide-up">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/miraidon.png"
                    alt=""
                  />
                  <p className="text-title mt-3">Miraidon</p>
                </div>
              </div>
              <h3 className="primary_heading text-black mt-5">
                More New Pokémon
              </h3>
              <div className="row mt-5">
                <div className="col-4" data-aos="slide-up">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/pawmi.png"
                    alt=""
                  />
                  <p className="text-title mt-3">Pawmi</p>
                </div>
                <div className="col-4" data-aos="slide-up">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/lechonk.png"
                    alt=""
                  />
                  <p className="text-title mt-3">Lechonk</p>
                </div>
                <div className="col-4" data-aos="slide-up">
                  <img
                    className="img-fluid"
                    src="/pokesite/images/game/smoliv.png"
                    alt=""
                  />
                  <p className="text-title mt-3">Smoliv</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
