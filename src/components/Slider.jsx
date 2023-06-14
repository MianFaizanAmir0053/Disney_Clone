import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
// import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

// or only core styles
// import "@splidejs/react-splide/css/core";

import "./custom.css";

const options = {
  type: "loop",
  gap: "0rem",
  padding: "2rem",
  autoplay: true,
  rewind: true,
  interval: 2000,
};

const Slider = () => {
  return (
    <Splide options={options} aria-label="My Favorite Images">
      <SplideSlide>
        <img src="slider-badag.jpg" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="slider-badging.jpg" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="slider-scale.jpg" alt="Image 3" />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
