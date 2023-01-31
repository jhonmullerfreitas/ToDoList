import styled from "styled-components";
import { device } from "../../styles/devices"

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;

    @media ${device.tablet}{
        flex-direction: row;
    }
`;

export const BoxLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    background-color: var(--blue);
    img{
        height: 15vh;
    }

    @media ${device.tablet}{
        width: 50vw;
        height: 90vh;
    }
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    color: var(--blue);
    font-weight: 600;

    @media ${device.tablet}{
        width: 50vw;
        height: 90vh;

        p{
            font-size: 25px;
        }
    }

`;

export const ButtonCreateList = styled.button`
    height: 5vh;
    width: 25vw;
    border: 1px solid var(--blue);
    background-color: transparent;
    border-radius: 4px;
    font-weight: 600;
    margin-top: 10px;
    color: var(--blue);

    &:hover{
        background-color: var(--blue);
        color: var(--white);
    }

    @media ${device.mobileL}{
        width: 15vw;
    }

     @media ${device.tablet}{
        width: 10vw;
    }
`;