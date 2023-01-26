import styled from "styled-components";

export const BoxItem = styled.li`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 7vh;
    width: 80vw;
    margin-top: 5px;
    border: 1px solid var(--blue);
    border-radius: 4px;
    color: var(--blue);
`;

export const NameItem = styled.p`
    text-align: center;
    width: 40vw;
    text-decoration: ${props => props.done ? "line-through":"none"};
`;