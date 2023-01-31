import styled from "styled-components";
import { device } from "../../styles/devices";

export const FormEditNameList = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 20vh;
`;

export const ButtonSubmitEdit = styled.button`
    width: 20vw;
    height: 5vh;
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: 4px;
    color: var(--blue);

    &:hover{
        background-color: var(--blue);
        color: var(--white)
    }

    @media ${device.tablet}{
        width: 15vw;
    }

    @media ${device.laptop}{
        width: 10vw;
    }
`;