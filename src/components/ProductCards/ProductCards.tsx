import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Product} from "../../data/Products"
import { useDispatch, useSelector } from "react-redux";
import { RootReducer, rootReducer } from "../../redux/roote-reducer";

interface ProductCardsProps {
    product: Product;
}

export const ProductCards: React.FC<ProductCardsProps> = ({product}) => {
    //para verificar se tem no carrinho
    const {cart} = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
    
    //variavel boleana
    const isProductOnCart = 
        cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

    const dispatch = useDispatch();

    function handleAddProductToCart(){
        //despachar a action de adicionar o produto no carrinho
        dispatch({
            type: 'cart/add-product',
            payload: product
        });
    }

    function handleRemoveProductFromCart(){
        dispatch({
            type: 'cart/remove-product',
            payload: product
        });
    }

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
                {isProductOnCart ? (
                    <S.RemoveToCardButton onClick={handleRemoveProductFromCart}>
                        Remover do Carrinho
                        <FiShoppingCart />
                    </S.RemoveToCardButton>
                ) : (
                    <S.AddToCardButton onClick={handleAddProductToCart}>
                        Adicionar ao Carrinho
                        <FiShoppingCart />
                    </S.AddToCardButton>
                )}
            </S.AddToCardButtonWrapper>
        </S.Card>
    );
}