import styled from "styled-components";

export const ListStyled = styled.div`
  width: 100%;

  .title {
    margin: 0px 0px 20px 30px;

    font-size: 18px;
    font-weight: 600;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 5px 0px 20px 30px;

    font-size: 18px;
    font-weight: 600;
  }

  @media (min-width: 1350px) {
    margin-top: 20px;

    .title {
      margin-left: 50px;
    }

    p {
      margin: 5px 0px 20px 50px;

      font-size: 20px;
      font-weight: 600;
    }
  }
`;
