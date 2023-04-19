import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    height: 69px;
    display: flex;
    margin-bottom: 30px;

    box-shadow: rgba(0, 0, 0, 0.151) 0px 5px 15px;

    h1 {
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        margin: auto 20px;
    }

    span {
        color: #FD377E;
    }

    @media (min-width: 1350px) {
        height: 100px;

        h1 {
            font-size: 40px;
            margin-left: 100px;
        }
    }
`