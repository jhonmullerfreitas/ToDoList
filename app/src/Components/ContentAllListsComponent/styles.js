import styled from "styled-components";
import { device } from "../../styles/devices";

export const TitlePage = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    color: var(--blue);

    @media ${device.tablet}{
        font-size: 22px;
    }
`;

export const BoxContentLists = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
    overflow-y: auto;

    @media ${device.tablet}{
        width: 95vw;
        margin: 0 auto;
    }

    @media ${device.laptop}{
        width: 70vw;
    }
`;

export const VoidList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    
    h5{
        color: var(--blue);
    }

    @media ${device.mobileL}{
        h5{
            font-size: 18px;
        }
    }
`;

export const NewListButton = styled.button`
    margin-top: 20px;

    border: 2px solid var(--blue);
    border-radius: 15px;
    background-color: transparent;
    height: 5vh;
    width: 30vw;
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
        width: 15vw;
        height: 7vh;
        border-radius: 20px;
        font-size: 15px;
    }
`;