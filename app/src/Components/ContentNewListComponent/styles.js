import styled from "styled-components";

export const BoxList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 90vh;
    width: 100vw;

    h3{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        color: var(--blue);
    }
`;

export const HeaderList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh;
    width: 90vw;
    background-color: var(--blue);
    color: var(--white);

    p{
        width: 50vw;
        text-align: center;
    }
`;

export const BoxInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 90vw;
    margin-top: 10px;
    border-bottom: 2px solid var(--blue);
    color: var(--blue);
`;

export const AddItemInput = styled.input`
    height: 7vh;
    padding: 5px;
    border: 1px solid var(--blue);
    width: 60vw;
`;

export const BoxItens = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 55vh;
    width: 90vw;

    overflow-y: auto;
    margin-top: 10px;
`;