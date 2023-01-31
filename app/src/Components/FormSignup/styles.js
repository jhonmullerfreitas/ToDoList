import styled from "styled-components";
import { device } from "../../styles/devices";

export const BoxFormSignup = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2{
        color: var(--blue);
    }

    @media ${device.tablet}{
        height: 90vh;
        justify-content: center;
        width: 50vw;
    }
`;

export const FormSignupInputs = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 45vh;
`;

export const SpanError = styled.span`
    color: red;
    font-size: 14px;
`;

export const ButtonSignup = styled.button`
    height: 5vh;
    width: 25vw;
    background-color: var(--blue);
    border: 1px solid transparent;
    border-radius: 5px;
    color: var(--white);
    font-weight: 600;

    &:hover{
        background-color: var(--white);
        color: var(--blue);
        border-color: var(--blue);
    }

    @media ${device.tablet}{
        width: 10vw;
    }
`;