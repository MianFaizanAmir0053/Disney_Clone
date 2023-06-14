import styled from "styled-components";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Header overview={false}></Header>
      <Content>
        <div>
          <img src="cta-logo-one.svg" alt="" />
        </div>
        <div>
          <Button>
            <NavLink to={"home"}>GET ALL THERE</NavLink>
          </Button>
        </div>

        <p>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <div>
          <img src="cta-logo-two.png" alt="" />
        </div>
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-image: url("login-background.jpg");
  background-position: center;
  background-size: cover;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  overflow: visible;
  overflow-x: hidden;
`;
const Content = styled.div`
  height: 100%;
  max-width: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  img {
    width: 80vw;
    max-width: 35rem;
  }
  p {
    margin: 1.5rem 0;
    letter-spacing: 1.8px;
    font-size: 0.66rem;
  }
`;

const Button = styled.div`
  background-color: #0063e5;
  display: flex;
  height: 3.5rem;
  margin: 0.5rem 0;
  font-weight: bold;
  width: 80vw;
  max-width: 35rem;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
