import styled from "styled-components";

export const FormStyled = styled.form`
    width: 95%;
    height: 434px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(0, 0, 0, 0.2);

    label {
        margin: 20px 0px 10px 20px;
    }

    input {
        width: 86%;
        margin: 0px 20px 0px 20px;
        padding: 18px 0px;

        border: none;
        border-radius: 10px;
        background-color: var(--color-gray-0);
        outline: none;

        font-size: 18px;
        text-align: center;

    }

    span {
        margin: 10px 0px 0px 20px;

        font-size: 14px;
        color: var(--color-gray-2);
    }

    select {
        width: 86%;
        margin: 0px 20px 0px 20px;
        padding: 18px 0px;

        border: none;
        border-radius: 10px;
        background-color: var(--color-gray-0);
        outline: none;

        font-size: 18px;
        text-align: center;
    }

    button {
        width: 86%;
        margin: 25px 20px 0px 20px;
        padding: 18px 0px;

        border: none;
        border-radius: 10px;
        background-color: var(--color-pink);
        cursor: pointer;

        font-size: 18px;
        text-align: center;
        color: #FFF;
    }

    @media (min-width: 750px) {
        width: 355px;
        margin: 0px 10px 0px 10px;
    }

    @media (min-width: 1350px) {
        width: 500px;
        height: 500px;
        margin: 20px 10px 0px 100px;

        label {
            font-size: 20px;
        }

        button {
            margin-top: 40px;
        }
    }
`