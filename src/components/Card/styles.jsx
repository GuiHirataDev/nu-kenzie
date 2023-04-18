import styled from "styled-components";

export const CardStyled = styled.div`
    width: 95%;
    height: 156px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border-radius: 10px;
    background: linear-gradient(90deg, ${props => props.type === "Entrada" ? "#03B898" : "#bababbd5"} 8px, #e6e8e9d6 8px);

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
        width: 30px;
        height: 30px;
        margin-left: 15px;

        border: none;
        border-radius: 5px;
        background-color: #bababbd5;
        cursor: pointer;
    }
`