import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
export default function Home_game() {
  return (
    <>
      <section className="home_game mt-100">
        <div className="container-fluid px-50">
          <div className="row">
            <div className="col-lg-6 col-12 col-md-10  order-lg-1 order-2 mt-lg-0 mt-3">
              <h3 className="primary_heading">
                The World of Pokémon Has Evolved
              </h3>
              <p className="primary_para mb-5 mt-3">
                <span>Pokémon Scarlet</span> and <span>Pokémon Violet</span>
                are the first open-world RPGs in the Pokémon series. As you
                enjoy the hallmarks of the series—meeting, teaming up with,
                battling, training, and trading Pokémon—you’ll be able to
                immerse yourself in a newly evolved adventure.​
              </p>
              <Link to="/pokesite/game#game_section" className="btn-main mt-5">
                More
              </Link>
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-1 col-12">
              <video loop autoPlay muted className="video_player">
                <source
                  src="/pokesite/images/pokemon_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
