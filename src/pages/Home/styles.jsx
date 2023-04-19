import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2a2831;
  font-family: Arial, Helvetica, sans-serif;

  .div__text {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 20px;

    span {
      color: #fd377e;
    }

    h1 {
      font-size: 30px;
      font-weight: 600;
      color: #fff;
    }

    h2 {
      width: 365px;
      font-size: 35px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #fff;
    }

    p {
      font-size: 18px;
      color: #fff;
    }

    button {
      width: 86%;
      padding: 18px 0px;

      border: none;
      border-radius: 10px;
      background-color: #fd377e;
      cursor: pointer;

      font-size: 18px;
      text-align: center;
      color: #fff;
    }
  }

  .div__img {
    display: none;
  }

  @media (min-width: 1000px) {
    .div__img {
      display: block;
    }
  }
`;
