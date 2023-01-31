import styled from "styled-components";
import { device } from "../../styles/devices";

export const BoxProfile = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--blue);
`;

export const FormEditEmail = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
`;

export const ButtonEditEmail = styled.button`
    height: 5vh;
    width: 20vw;
    border: 1px solid var(--blue);
    border-radius: 4px;

    &:hover{
        color: var(--white);
        background-color: var(--blue);
    }

    @media ${device.tablet}{
        width: 10vw;
    }
`;