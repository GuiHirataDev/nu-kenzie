import styled from "styled-components";

export const CardStyled = styled.div`
    width: 95%;
    height: 156px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border-radius: 10px;
    background-color: #e6e8e9d6;

    .card__title {
        margin: 15px;

        font-size: 18px;
        font-weight: 600;
    }

    span {
        margin-left: 15px;
    }

    p {
        margin-left: 15px;
    }

    button {
        width: 60px;
        height: 25px;
        margin-left: 15px;

        border: none;
        border-radius: 5px;
        background-color: #bababbd5;
        cursor: pointer;
    }
`