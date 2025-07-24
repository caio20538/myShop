import React from "react";
import * as S from "./style";

interface CardProps{
    showCart: boolean
}


export const Cart: React.FC<CardProps> = ({showCart}) => {
    return(
        <S.Container showCart = {showCart}>
            <S.Tittle>Carrinho</S.Tittle>
        </S.Container>
    );
}