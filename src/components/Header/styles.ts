import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #1E90FF;
`;

export const Wreapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 60px;
`;

export const HeaderTitle = styled.h1`
    color: whitesmoke;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

interface AuthButtonProps{
    isLoged: boolean
}

export const AuthButton = styled.button<AuthButtonProps>`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: ${(props) => props.isLoged ? "red": "green"};
    color: white;
    font-size: 0.8rem;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg{
        font-size: 0.8rem;
    }
`;

export const CartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: violet;
    font-size: 0.8rem;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg{
        font-size: 0.8rem;
    }
`;