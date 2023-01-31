import styled from "styled-components";
import { device } from "../../styles/devices";

export const BoxAllLists = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;

    @media ${device.tablet}{
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const BoxImgAllLists = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
    background-color: var(--blue);

    img{
        height: 15vh;
    }

    @media ${device.tablet}{ 
        height: 90vh;
        width: 25vw;
    }
`;

export const BoxContentLists = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 65vh;
    overflow-y: auto;

    @media ${device.tablet}{
        width: 75vw;
        height: 90vh;
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
    height: 90vh;
    
    h5{
        color: var(--blue);
    }

    @media ${device.mobileL}{
        h5{
            font-size: 18px;
        }
    }

    @media ${device.tablet}{
        flex-direction: row;
    }
`;

export const BoxImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    background-color: var(--blue);
    width: 100vw;

    img{
        height: 20vh;
    }

    @media ${device.tablet}{
        height: 90vh;
    }
`;

export const BoxMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100vw;

    @media ${device.tablet}{
        height: 90vh;
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