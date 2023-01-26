import styled from "styled-components";
import { device } from "../../styles/devices";

export const BoxCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    height: 30vh;
    width: 40vw;
    
    border-radius: 10px;
    margin: 20px 0 10px 0;
    box-shadow: 4px 4px 5px var(--blue);
    background-color: var(--blue-card);

    @media ${device.mobileL}{
        width: 30vw;
    }

    @media ${device.tablet}{
        width: 20vw;
    }
    
    @media ${device.laptop}{
        width:15vw;
    }
`;

export const TitleList = styled.h4`
    color: var(--white)
`;

export const OptionsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 30vw;
    height: 15vh;

    @media ${device.mobileL}{
        width: 20vw;
    }

    @media ${device.tablet}{
        width: 15vw;
    }

    @media ${device.laptop}{
        width: 10vw;
    }
`;

export const ButtonDetail = styled.button`
    width: 25vw;
    height: 5vh;
    border-radius: 5px;
    border-color: transparent;
    background-color: var(--blue-detail-list);
    font-weight: 600;
    color: var(--blue);

    @media ${device.mobileL}{
        width: 15vw;
    }

    @media ${device.tablet}{      
        width: 10vw;
    }
`;

export const ButtonDelete = styled.button`
    width: 25vw;
    height: 5vh;

    border-radius: 5px;
    border-color: transparent;
    font-weight: 600;
    color: red;

    @media ${device.mobileL}{
        width: 15vw;  
    }
    
    @media ${device.tablet}{    
        width: 10vw;
    }
`;