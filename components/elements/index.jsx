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
    font-size: 1em;
    white-space:nowrap;
`;