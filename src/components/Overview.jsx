const imgApi = "https://image.tmdb.org/t/p/w1280/";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect, Link } from "react-router-dom";
import api from "../API/api";
import styled from "styled-components";
import Header from "./Header";

const serialApi =
  "https://api.themoviedb.org/3/discover/tv?api_key=44ca6748d561037c21b26e7e1d17ec3e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";
const trendingApi =
  "https://api.themoviedb.org/3/trending/all/day?api_key=44ca6748d561037c21b26e7e1d17ec3e";
const movieApi = api;

const Overview = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id, type } = useParams();

  let Myapi = "";
  if (type === "movie") {
    Myapi = movieApi;
  } else if (type === "serial") {
    Myapi = serialApi;
  } else if (type === "trending") {
    Myapi = trendingApi;
  }

  useEffect(() => {
    axios
      .get(Myapi)
      .then((res) => {
        res.data.results.find((item) => {
          if (item.id === +id) {
            setMovie(item);
            console.log(item);
          }
        });

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Header overview={true} />
      <OverviewWrapper backgroundUrl={movie.backdrop_path}>
        <div className="overlay"></div>
        <div className="overviewData">
          <h3>{movie.original_title ? movie.original_title : movie.name}</h3>
          <div className="overviewBtns">
            <div className="btn">
              <span>
                <img src="/play-icon-white.png" alt="" />
                <a href="#">watch now</a>
              </span>
              <span>
                <img src="/play-icon-white.png" alt="" />
                <a href="#">trailer</a>
              </span>
            </div>
            <div>
              {/* <div className="twoIcons">
                <div>
                  <img src="/play-icon-white.png" alt="" />
                </div>
                <div>
                  <img src="/play-icon-white.png" alt="" />
                </div>
              </div> */}
            </div>
          </div>
          <p className="movieOverview">{movie.overview}</p>
        </div>
        <Link to="/home">Button</Link>
      </OverviewWrapper>
    </>
  );
};

export default Overview;

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${imgApi}${(props) => props.backgroundUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: #fff;
  height: 100vh;
  padding: 0 2rem 0 4rem;
  margin: 0;

  .overviewBtns {
    display: flex;
    align-items: center;
    width: 100%;
  }
  h3 {
    font-size: 2.2rem;
    letter-spacing: 10px;
  }
  .overviewData {
    z-index: 6;
    max-width: 48rem;
    padding: 0 0rem;
  }
  .btn {
    display: flex;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #fff;
      margin: 1rem 1rem 1rem 0;
      padding: 1rem;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .twoIcons {
    display: flex;
    div {
      border: 1px solid #fff;
      margin: 1rem 0rem 1rem 1rem;
      border-radius: 20rem;
      padding: 0.4rem;
    }
  }

  .movieOverview {
    letter-spacing: 4px;
    line-height: 1.8;
  }

  .overlay {
    background-image: radial-gradient(
      farthest-side at 73% 21%,
      transparent,
      rgb(33 35 51)
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  @media (max-width: 768px) {
    padding: 25rem 1rem 0 2rem;
    font-size: 0.8rem;
    height: 100%;

    .btn {
      flex-direction: column;
      width: 100%;
    }
    .movieOverview {
      font-size: 0.8rem;
      letter-spacing: 2px;
      line-height: 1.5;
    }
    .overviewBtns {
      flex-direction: column;
    }
    h3 {
      font-size: 1rem;
      letter-spacing: 4px;
    }

    .overlay {
      position: fixed;
    }
  }
`;
