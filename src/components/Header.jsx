// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Header = ({ overview }) => {
  // const handleAuth = () => {
  //   auth.signInWithPopup(provider).catch((error) => {
  //     alert(error.message);
  //   });
  // };
  // const navigate = useNavigate();
  // const handleAuth = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };
  // const [user, setUser] = useState(null);
  // auth.onAuthStateChanged((authUser) => {
  //   if (authUser) {
  //     // user has logged in
  //     setUser(authUser);
  //   } else {
  //     // user has logged out
  //     setUser(null);
  //   }
  // });

  // const auth = getAuth();
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     console.log(result.user);
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

  return (
    <Wrapper background={overview}>
      <nav>
        <img src="src/assets/images/logo.svg" alt="" />
        <span>
          <img src="src/assets/images/home-icon.svg" alt="" />
          <a href="">Home</a>
        </span>
        <span>
          <img src="src/assets/images/search-icon.svg" alt="" />
          <a href="">Search</a>
        </span>
        <span>
          <img src="src/assets/images/watchlist-icon.svg" alt="" />
          <a href="">Watch List</a>
        </span>
        <span>
          <img src="src/assets/images/original-icon.svg" alt="" />
          <a href="">Originals</a>
        </span>
        <span>
          <img src="src/assets/images/movie-icon.svg" alt="" />
          <a href="">Movies</a>
        </span>
        <span>
          <img src="src/assets/images/series-icon.svg" alt="" />
          <a href="">Series</a>
        </span>
      </nav>

      <div>
        <a href="home">Login</a>
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
  background-color: ${(props) => (!props.background ? "black" : "transparent")};
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
