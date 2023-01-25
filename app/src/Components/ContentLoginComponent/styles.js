import styled from "styled-components";
import { device } from "../../styles/devices";

export const BoxContentLogin = styled.div`
    display: flex;
    height: 90vh;
`;

export const BoxBigLogo = styled.div`
    display: none;

    @media ${device.tablet}{
        display: flex;
        justify-content: center;
        align-items: center;
    
        height: 100%;
        width: 50%;
    
        background-color: var(--blue);
    }
`;