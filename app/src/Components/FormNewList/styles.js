import styled from "styled-components";
import { device } from "../../styles/devices";

export const ContainerCreateList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90vh;

    @media ${device.tablet}{
        flex-direction: row;
    }
`;

export const BoxImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    width: 100vw;
    background-color: var(--blue);
    
    img{
        height: 20vh;
    }

    @media ${device.tablet}{
        height: 90vh;
    }
`;

export const BoxCreateList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40vh;
    width: 100vw;
    
    h3{
        color: var(--blue)
    }
`

export const FormCreateList = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 30vh;
`;

export const ButtonCreateList = styled.button`
    width: 30vw;
    height: 7vh;
    border: 1px solid var(--blue);
    border-radius: 4px;
    background-color: transparent;
    font-weight: 600;
    color: var(--blue);

    &:hover{
        background-color: var(--blue-detail-list);
    }

    @media ${device.mobileL}{
        width: 25vw;
    }

    @media ${device.tablet}{
        width: 20vw;
    }

    @media ${device.laptop}{
        width: 10vw;
        height: 5vh;
    }
`;