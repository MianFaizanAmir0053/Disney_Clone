import { useState } from "react";
import styled from "styled-components";

const Crousal = () => {
  const [x, setX] = useState(0);
  // const [widthO, setWidthO] = useState(0);

  const goLeft = () => {
    setX((prev) => (prev += 100));
  };
  const goRight = () => {
    setX((prev) => (prev -= 100));

    // setWidthO((prev) => (prev +=   ));
  };

  return (
    <Wrap>
      <button className="prev" onClick={goLeft}>
        <div className="text">&#8249;</div>
      </button>
      <WrapItem X={x}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="image"
        />
        <img src="https://links.papareact.com/gi1" alt="image" />
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="image"
        />
        <img src="https://links.papareact.com/gi1" alt="image" />
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="image"
        />
        <img src="https://links.papareact.com/gi1" alt="image" />
      </WrapItem>
      <button className="next" onClick={goRight}>
        <div className="text">&#8250;</div>
      </button>
    </Wrap>
  );
};

export default Crousal;

const Wrap = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  img {
    object-fit: cover;
    aspect-ratio: 16/9;
    flex: 0 0 25%;
    width: 25%;
    padding: 0.25rem;
    border-radius: 0.75rem;
    overflow: hidden;

    @media (max-width: 768px) {
      flex: 0 0 50%;
      width: 50%;
    }
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    width: 5rem;
    background-color: rgb(0, 0, 0, 0.5);
    background-color: #ff00007e;
    margin: 0.25rem 0rem;
    z-index: 10;
    font-size: 5rem;
    color: white;
  }

  .prev {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  .next {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  button:hover {
    .text {
      transform: scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
`;

const WrapItem = styled.div`
  margin: 0;
  padding: 0;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.X}%);
  display: flex;
  margin: 0 0.25rem;
  flex-direction: row;
  width: calc(100% - 5rem);
`;
