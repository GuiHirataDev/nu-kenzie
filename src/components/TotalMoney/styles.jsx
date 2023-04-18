import styled from "styled-components";

export const TotalMoneyStyled = styled.div`
    width: 95%;
    height: 96px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;

    border: 1px solid rgba(0, 0, 0, 0.2);

    div {
        display: flex;
        justify-content: space-between;
        margin: 20px;
    }

    div h2 {
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
    }

    div p {
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: #FD377E;
    }

    span {
        margin: 0px 20px;
    }

    @media (min-width: 750px) {
        width: 355px;
        margin: 20px 10px 0px 10px;
    }

    @media (min-width: 1350px) {
        width: 500px;
        margin: 20px 10px 0px 100px;
    }
    
`