import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCards: React.FC = () => {
    return(
        <S.Card>
            <S.ProductImage src = "https://images.tcdn.com.br/img/img_prod/275189/camisa_azul_royal_100_poliester_para_sublimacao_m_2701_1_20200722153204.jpg" alt = ""/>

            <S.ProductTitle>Produto 1</S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>4.1</S.Review>

                <S.Price>R$20,00</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCardButtonWrapper>
                <S.AddToCardButton>
                    Adicionar ao Carrinho
                    <FiShoppingCart />
                </S.AddToCardButton>
            </S.AddToCardButtonWrapper>
        </S.Card>
    );
}