import React from "react";

export default function Home_movie() {
  return (
    <>
      <section className="movie_section mt-5">
        <div className="container-fluid px-50 text-center">
          <h2 className="secondary_heading">Pokemon Movie</h2>
          <p className="primary_para mb-5 mt-3">
            In the Forest of Okoya, the Mythical Pokémon Zarude finds an infant
            boy in a cradle washed up on a riverbank. Unable to leave the child
            on his own, Zarude adopts him as a son, giving him the name "Koko".
          </p>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide video_player border-25"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/pokesite/images/pokemon_movie_coco1.jpg"
                  className="d-block w-100 rounded-16 h-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/pokesite/images/pokemon_movie_coco2.jpg"
                  className="d-block w-100 rounded-16 h-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/pokesite/images/pokemon_movie_coco3.jpg"
                  className="d-block w-100 rounded-16 h-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
