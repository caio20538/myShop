import styled from "styled-components";

export const Card = styled.article`
    width: 100%;
    background-color: white;
    padding: 1rem;
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
   

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductImage = styled.img`
    width: 90%;
    height: 400px;

    object-fit: contain;
`;

export const ProductTitle = styled.h2`
    font-size: 1.2rem;
    margin: 1rem;

    min-height: 3rem;
`;

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Review = styled.span`
    display: flex;

    font-size: 0.75rem;

    svg{
        font-size: 1rem;
    }
`;

export const Price = styled.strong``;

export const AddToCardButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const AddToCardButton = styled.button`
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    background-color: blue;
    font-size: 0.8rem;
    color: white;
    margin: 1rem;
    justify-content: center;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg{
        font-size: 0.8rem;
    }
`;

export const RemoveToCardButton = styled.button`
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    background-color: violet;
    font-size: 0.8rem;
    color: black;
    margin: 1rem;
    justify-content: center;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg{
        font-size: 0.8rem;
    }
`;