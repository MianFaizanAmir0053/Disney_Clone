import styled from "styled-components";

const ImageVideo1 = () => {
  return (
    <Wrapper>
      <div className="pos">
        <video src="1564674844-disney.mp4" autoPlay loop playsInline></video>
        <img src="viewers-disney.png" alt="" />
      </div>
      <div className="pos">
        <video src="1564676115-marvel.mp4" autoPlay loop playsInline></video>
        <img src="viewers-marvel.png" alt="" />
      </div>
      <div className="pos">
        <video src="1608229455-star-wars.mp4" autoPlay loop playsInline></video>
        <img src="viewers-starwars.png" alt="" />
      </div>
      <div className="pos">
        <video
          src="1564676296-national-geographic.mp4"
          autoPlay
          loop
          playsInline
        ></video>
        <img src="viewers-national.png" alt="" />
      </div>
    </Wrapper>
  );
};

export default ImageVideo1;

const Wrapper = styled.div`
  div {
    position: relative;
    /* transition: all 0.5s ease-in-out; */
  }

  /* transition: all 0.5s ease-in-out; */

  position: relative;
  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    visibility: hidden;
    /* transition: all 0.5s ease-in-out; */
  }
  .pos {
    background: linear-gradient(#30323e, #1e1f2a) 0% 0% / cover;
  }
  .pos:hover {
    video {
      visibility: visible;
    }
  }

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 3rem;
  padding: 3rem 0rem;
  .pos {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      border: 3.5px solid #3e404c;
      /* 3.5px solid #3e404c */

      /* main shadow */
      /* rgba(0,0,0,0.69) 0px 26px 30px -10px,rgba(0,0,0,0.73) 0px 16px 10px -10px; */
      transition: all 0.2s ease-in-out;
      padding: 0;
      margin: 0;
      &:hover {
        transform: scale(1.05);
        border: 3.5px solid #fff;
      }
    }

    &:hover {
      video {
        transition: all 0.5s ease-in-out;

        visibility: visible;
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 1rem;
    padding: 1rem 0rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      /* transition: all 0.5s ease-in-out; */
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
