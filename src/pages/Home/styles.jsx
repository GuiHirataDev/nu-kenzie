import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2a2831;

  .div__text {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 20px;

    span {
      color: var(--color-pink);
    }

    h1 {
      font-size: 30px;
      font-weight: 600;
      color: var(--color-white-fixed);
    }

    h2 {
      width: 365px;
      font-size: 35px;
      font-weight: 600;
      letter-spacing: 1px;
      color: var(--color-white-fixed);
    }

    p {
      font-size: 18px;
      color: var(--color-white-fixed);
    }

    button {
      width: 86%;
      padding: 18px 0px;

      border: none;
      border-radius: 10px;
      background-color: var(--color-pink);
      cursor: pointer;

      font-size: 18px;
      text-align: center;
      color: var(--color-white-fixed);
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
