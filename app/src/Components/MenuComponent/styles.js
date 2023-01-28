import styled from "styled-components";
import { device } from "../../styles/devices";

export const BoxMenuLateral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40vw;
    height: 100vh;
    background-color: var(--blue);

    @media ${device.mobileL}{
        width: 35vw;
    }

    @media ${device.tablet}{
        width: 25vw;
    }

    @media ${device.laptop}{
        width: 15vw;
    }
`;

export const OptionsMenuLateral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 25vh;
    margin-top: 10px;
`;