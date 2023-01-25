import styled from "styled-components";
import { device } from "../../styles/devices";

export const BoxContentSignup = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    
    @media ${device.tablet}{
        flex-direction: row;
    }
`;

export const BoxBigLogo = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30vh;
        width: 100vw;
        background-color: var(--blue);

        img{
            width: 40vw;
        }

    @media ${device.tablet}{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50%;
        background-color: var(--blue);
    }
`;