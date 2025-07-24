import styled from "styled-components";

interface ContainerProps{
    showCart: boolean
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => props.showCart ? "0" : "-350px"};

    width: 350px;
    height: 100vh;
    background-color: white;
    padding: 2rem;
    box-shadow: ${(props) => props.showCart ? "-5px 0 15px rgba(0, 0, 0, 0.25)" : "none"};

    transition: 0.5s;
`;

export const Tittle = styled.h1``;