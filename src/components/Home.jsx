import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { redirect, Link } from "react-router-dom";

import api from "../API/api";
import Slider from "./Slider";
import Header from "./Header";
import MovieSlider from "./MovieSlider";
import ImageVideo1 from "./ImageVideo1";
const imgApi = "https://image.tmdb.org/t/p/w1280/";
const api2 =
  "https://api.themoviedb.org/3/discover/tv?api_key=44ca6748d561037c21b26e7e1d17ec3e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";
const api3 =
  "https://api.themoviedb.org/3/trending/all/day?api_key=44ca6748d561037c21b26e7e1d17ec3e";

const Home = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    axios.get(api).then((res) => {
      setData1(res.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get(api2).then((res) => {
      setData2(res.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get(api3).then((res) => {
      setData3(res.data.results);
    });
  }, []);
  return (
    <>
      <SliderStyle>
        <Slider />
      </SliderStyle>
      <BaseWrapper>
        <Header />
        <ImageVideo1 />
        <div className="animate">
          <h2>trending</h2>
        </div>
        <SliderMovieWrapper>
          <MovieSlider type={"trending"} movieApi={api3} moviesData={data3} />
        </SliderMovieWrapper>

        <div className="animate">
          <h2>Movies</h2>
        </div>
        <SliderMovieWrapper>
          <MovieSlider type={"movie"} movieApi={api} moviesData={data1} />
        </SliderMovieWrapper>
        <div className="animate">
          <h2>TV SERIALS</h2>
        </div>
        <SliderMovieWrapper>
          <MovieSlider type={"serial"} movieApi={api2} moviesData={data2} />
        </SliderMovieWrapper>

        <MovieWrapper>
          {data1.map((movie) => (
            <div className="movie">
              <Link to={`/overview/movie/${movie.id}`}>
                <img src={imgApi + movie.poster_path} alt={movie.name} />
                <h3>{movie.original_title}</h3>
              </Link>
            </div>
          ))}
        </MovieWrapper>
      </BaseWrapper>
    </>
  );
};

export default Home;

const BaseWrapper = styled.div`
  .animate {
    width: fit-content;
    margin: 2rem 0;
    h2 {
      letter-spacing: 4px;
      font-weight: 100;
      /* border-bottom: 3px solid red; */
      width: 100%;
      &::after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        position: relative;
        bottom: -5px;
        transition: all 0.8s cubic-bezier(0.53, 0.08, 0.18, 1.37);
        background-color: red;
      }
    }
    &:hover {
      h2::after {
        width: 100%;
      }
    }
  }

  display: flex;
  padding: 5.3rem 2rem;
  flex-direction: column;
  justify-content: center;
  background-color: #6b6b6b;
  background-image: url("home-background.png");
  background-size: contain;
  color: #fff;
  h1 {
    font-size: 3rem;
  }
  h2 {
    z-index: 10;
  }

  @media (max-width: 768px) {
    padding: 0rem 1rem;
    .animate {
      z-index: 20;
      margin: 0;
      font-size: 0.7rem;
    }
  }
`;

const MovieWrapper = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2.5rem;
  grid-row-gap: 5rem;
  width: 100%;
  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    position: relative;

    a {
      position: relative;

      &::after {
        transition: all 0.6s cubic-bezier(0.53, 0.08, 0.18, 1.37);
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0%;
        width: 100%;
        height: 0%;
        margin: 0;
        padding: 0rem;
      }

      &:hover {
        &::after {
          height: 80%;
          width: 100%;

          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(122, 122, 122, 0.7) 29%,
            rgba(80, 80, 80, 0.7) 66%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }
      }
    }
    img {
      width: 200px;
      height: 300px;
      object-fit: cover;
    }
    h3 {
      position: absolute;
      left: 0;
      bottom: 0%;
      width: 100%;
      height: 50%;
      margin: 0;
      padding: 0rem;
      z-index: 20;
      font-size: 0rem;
      font-weight: 100;
      letter-spacing: 4px;
      transition: all 0.5s ease-in-out;
    }
    &:hover {
      h3 {
        /* height: 70%; */
        font-size: 1rem;
      }
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 0.5rem;
    grid-row-gap: 0rem;
    margin: 1rem 0;
    .movie {
      img {
        width: 120px;
        height: 180px;
      }
    }
  }
`;

const SliderStyle = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  img {
    /* image-rendering: pixelated; */
    object-fit: cover;
    /* width: 100vw; */
    height: 100%;
    width: 100%;
  }
`;

const SliderMovieWrapper = styled.div`
  .splide__list {
    /* margin: 0rem !important; */
    padding: 0 !important;
  }
`;
