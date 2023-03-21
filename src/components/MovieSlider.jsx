import { Splide, SplideSlide } from "@splidejs/react-splide";
import { redirect, Link } from "react-router-dom";

// Default theme
// import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

// or only core styles
// import "@splidejs/react-splide/css/core";

import "./custom.css";
import styled from "styled-components";
const imgApi = "https://image.tmdb.org/t/p/w1280/";

const options = {
  type: "slide",
  // autoWidth: true,
  // autoHeight: true,
  // fixedWidth: "10rem",
  perPage: 5,
  perMove: 3,
  lazyLoad: "sequential",
};

const MovieSlider = ({ moviesData, type }) => {
  return (
    <Wrapper>
      <Splide options={options} aria-label="My Favorite Images">
        {moviesData.map((movie) => (
          <SplideSlide>
            <Link to={`/overview/${type}/${movie.id}`}>
              <img src={imgApi + movie.poster_path} alt={movie.name} />
            </Link>
            {/* <h3>{movie.original_title}</h3> */}
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default MovieSlider;

const Wrapper = styled.div`
  .splide__slide {
    margin: 2px;
    padding: 0;
    height: 100%;
    transition: all 0.2s ease-in-out;
  }

  .splide__arrow {
    opacity: 1;
    background-color: #ffffff49;
  }
  .splide__arrow:hover {
    opacity: 1;
    background-color: #ffffffd0;
    svg {
      fill: #000;
    }
  }

  .splide__track:hover .splide__slide {
    z-index: 1;
  }
  .splide__track .splide__slide:hover {
    transform: scale(1.15);
    transition: 0.2s;
    z-index: 20;
  }

  .splide__track {
    display: flex;
    box-shadow: none;
  }
  .splide__list {
    margin: revert !important;
    padding: 1rem !important;
    background: none;
  }
  .splide__pagination__page {
    display: none;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
`;
