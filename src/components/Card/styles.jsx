import styled from "styled-components";

export const CardStyled = styled.li`
    width: 95%;
    height: 165px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border-radius: 10px;
    background: linear-gradient(90deg, ${props => props.type === "Entrada" ? "var(--color-green)" : "var(--color-gray-1)"} 8px, var(--color-gray-0) 8px);

    .card__title {
        margin: 15px;

        font-size: 18px;
        font-weight: 600;
    }

    span {
        margin-left: 15px;
    }

    p {
        margin: 10px 0px 10px 15px;
    }

    button {
        width: 30px;
        height: 30px;
        margin: 0px 0px 10px 15px;

        border: none;
        border-radius: 5px;
        background-color: var(--color-gray-1);
        cursor: pointer;
    }
`