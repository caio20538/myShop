import styled from "styled-components";

export const Card = styled.article`
    width: 100%;
    background-color: white;
    padding: 1rem;
    margin: 0 auto;
`;

export const ProductImage = styled.img`
    width: 90%;
   
`;

export const ProductTitle = styled.h2`
    font-size: 1.2rem;
`;

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const AddToCardButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const AddToCardButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: blue;
    font-size: 0.8rem;
    color: white;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg{
        font-size: 0.8rem;
    }
`;