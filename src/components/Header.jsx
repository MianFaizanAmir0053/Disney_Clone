import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = ({ overview }) => {
  return (
    <Wrapper background={overview}>
      <nav>
        <img src="logo.svg" alt="" />
        <span>
          <img src="home-icon.svg" alt="" />
          <NavLink to={"/home"}>Home</NavLink>
        </span>
        <span>
          <img src="search-icon.svg" alt="" />
          <NavLink to={"/home"}>Search</NavLink>
        </span>
        <span>
          <img src="watchlist-icon.svg" alt="" />
          <NavLink to={"/home"}>Watch List</NavLink>
        </span>
        <span>
          <img src="original-icon.svg" alt="" />
          <NavLink to={"/home"}>Originals</NavLink>
        </span>
        <span>
          <img src="movie-icon.svg" alt="" />
          <NavLink to={"/home"}>Movies</NavLink>
        </span>
        <span>
          <img src="series-icon.svg" alt="" />
          <NavLink to={"/home"}>Series</NavLink>
        </span>
      </nav>

      <div>
        <NavLink to={"/home"}>Login</NavLink>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  background-color: ${(props) => (props.background ? "black" : "trasnparent")};
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 60rem;
    /* span {
      display: none;
    } */
  }

  @media (max-width: 768px) {
    nav {
      span {
        display: none;
      }
    }
  }
  img {
    width: 6rem;
  }

  div {
    a {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      border: 0.1px solid white;
      border-radius: 0.3rem;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    a {
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
      a::after {
        width: 100%;
      }
    }
    a {
      font-size: 1.2rem;
      padding: 0.5rem;
    }

    img {
      width: 1.5rem;
    }
  }
`;
