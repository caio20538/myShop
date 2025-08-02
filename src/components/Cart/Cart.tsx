import React from "react";
import * as S from "./style";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer, rootReducer } from "../../redux/roote-reducer";
import { Product } from "../../data/Products";


interface CardProps{
    showCart: boolean
}


export const Cart: React.FC<CardProps> = ({showCart}) => {
    const {cart} = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);

    const calcTotalProductsOnCart = cart.reduce((total, product) => {
        return total + product.price;
    }, 0);

    const dispatch = useDispatch();

    function handleRemoveProductFromCart(product: Product){
        dispatch({
            type: 'cart/remove-product',
            payload: product
        });
    }
    return(
        <S.Container $showCart = {showCart}>
            <S.Tittle>
                Carrinho
                <FiShoppingCart />
            </S.Tittle>

            <S.CartProductList>
                {cart.map(product => (
                    <S.CartProductItem key={product.id}>
                        {product.title} - ${product.price}
                        <FiTrash2 color="red" onClick={() => handleRemoveProductFromCart(product)}/>
                    </S.CartProductItem>
                ))}
            </S.CartProductList>

            <S.CartTotal>
                Total: ${calcTotalProductsOnCart.toFixed(2)}
            </S.CartTotal>

        </S.Container>
    );
}