import styled from "styled-components";
import { device } from "../../styles/devices";

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100vw;
    
    background: var(--gradientBackground);

    filter: var(--boxShadowHeader);
`;

export const ImgLogo = styled.img`
    margin-left: 20px;
    cursor: pointer;
`;

export const MenuHeaderUserLogged = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;
    width: 55vw;
    color: var(--white);

    ul {
        display: flex;
        justify-content: space-evenly;
        width: 40vw;
        padding: 0;
        list-style: none;
        font-size: 18px;

        li {
            cursor: pointer;

            &:hover{
                color: var(--colorHover);
            }
        }
    }

    img {
        height: 20px;
        width: 20px;

        cursor: pointer;
    }

    @media ${device.mobileL}{
        width: 35vw;
    }
    
    @media ${device.tablet}{
        width: 30vw;

        ul {
            width: 30vw;
        }
    }

    @media ${device.laptop}{
        width: 25vw;

        ul {
            width: 20vw;
            font-size: 20px;
        }

        img {
            height: 30px;
            width: 30px;
        }
    }
`;

export const MenuHeaderUserNotLogged = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 50vw;
    list-style: none;
    color: var(--white);
    font-size: 18px;

    li {
        cursor: pointer;

        &:hover {
            color: var(--colorHover);
        }
    }

    @media ${device.mobileL}{
        width: 35vw;
    }
    
    @media ${device.tablet}{
        width: 25vw;
    }

    @media ${device.laptop}{
       width: 20vw;
       font-size: 20px;
    }
`;