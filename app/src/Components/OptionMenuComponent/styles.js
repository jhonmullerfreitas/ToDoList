import styled from "styled-components";
import { device } from "../../styles/devices";

export const OptionMenuLateral = styled.button`
    width: 35vw;
    height: 5vh;
    border-radius: 30px;
    border: 1px solid var(--white);
    background-color: transparent;
    color: var(--white);
    margin-bottom: 10px;

    &:hover{
        background-color: var(--blue-2);
    }

    @media ${device.mobileL}{
        width: 25vw;
    }

    @media ${device.tablet}{
        width: 20vw;
    }

    @media ${device.laptop}{
        width: 10vw;
    }
`;