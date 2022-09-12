import styled from "styled-components";

export const SAtagu = styled.a`
    -webkit-text-stroke: .6px #000;
    color: transparent;
    font-size: 20px;

    height: 40px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    transition: .3s;
    :hover {
        font-size: 30px;
        color: black;
    }
`;

export const SText = styled.div`
    padding: 1rem;
    font-size: 1rem;
    white-space:wrap;
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
    font-size: 20px;

    transition: .3s;
    &:hover {
        font-size: 30px;
        color: black;
    }
`

export const SLangName = styled.div`
    padding: 0 1rem;
    font-size: 2rem;
    white-space:nowrap;

    -webkit-text-stroke: .6px #000;
    color: transparent;
    font-size: 30px;
`

export const SSubmit = styled.input`
    margin: 1rem 1rem;
    white-space:wrap;
    background-color: transparent;

    -webkit-text-stroke: .6px #000;
    color: transparent;
    font-size: 20px;

    transition: .3s;
    &:hover {
        font-size: 30px;
        color: black;
    }
`