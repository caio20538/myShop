import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Product} from "../../data/Products"

interface ProductCardsProps {
    product: Product;
}

export const ProductCards: React.FC<ProductCardsProps> = ({product}) => {
    return(
        <S.Card>
            <S.ProductImage src = {product.image} alt = {product.description}/>

            <S.ProductTitle>{product.title}</S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>

                    { Array.from({length: 5}).map((_, index) => {
                        // _ signfica que estou ignorando o valor dele e pegando so o index fo array
                        return index < Math.round(product.rating.rate) ? <AiFillStar key={index}/> : <AiOutlineStar key={index}/>
                    })}
                    ({product.rating.rate})
                </S.Review>

                <S.Price>{product.price}</S.Price>
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