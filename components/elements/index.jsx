import styled from "styled-components";

export const SAtagu = styled.a`
    -webkit-text-stroke: .6px #000;
    color: transparent;
    font-size: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    transition: .3s;
    :hover {
        font-size: 2rem;
        color: black;
    }
`;

export const SText = styled.div`
    padding: 1rem;
    font-size: 1rem;
    white-space:wrap;
    margin: .5rem;
`;

export const SAppText = styled.div`
    padding: 1rem;
    font-size: .8rem;
`;

export const SAppName = styled.div`
    padding: 0 1rem;
    font-size: 2rem;
    white-space:wrap;

    -webkit-text-stroke: .6px #000;
    color: transparent;
    font-size: 1.4rem;

    transition: .3s;
    &:hover {
        font-size: 1.8rem;
        color: black;
    }
`

export const SLangName = styled.div`
    padding: 0 1rem;
    font-size: 2rem;
    white-space:nowrap;

    -webkit-text-stroke: .6px #000;
    color: transparent;
    font-size: 2rem;
`

export const SSubmit = styled.input`
    margin: 1rem 1rem;
    white-space:wrap;
    background-color: transparent;

    -webkit-text-stroke: .6px #000;
    color: transparent;
    font-size: 1.4rem;

    transition: .3s;
    &:hover {
        font-size: 1.8rem;
        color: black;
    }
`