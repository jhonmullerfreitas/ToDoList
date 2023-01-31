import styled from "styled-components";
import { device } from "../../styles/devices";

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;

    @media ${device.tablet}{
        flex-direction: row;
    }
`;

export const BoxImgProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    background-color: var(--blue);

    img{
        height: 15vh;
    }

    @media ${device.tablet}{
        height: 90vh;
        width: 50vw;

        img{
            height: 30vh;
        }
    }
`;

export const BoxProfile = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--blue);

    @media ${device.tablet}{
        width: 50vw;
        height: 90vh;
    }
`;

export const FormEditEmail = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
`;

export const ButtonEditEmail = styled.button`
    height: 5vh;
    width: 20vw;
    border: 1px solid var(--blue);
    border-radius: 4px;

    &:hover{
        color: var(--white);
        background-color: var(--blue);
    }

    @media ${device.tablet}{
        width: 10vw;
    }
`;