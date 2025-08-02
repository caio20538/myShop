import React, { useState } from "react";
import { FiLogIn, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import * as S from "./styles";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/roote-reducer";

export const Header: React.FC = () => {
    const { user } = useSelector((state: RootReducer) => state.userReducer);
    const dispatch = useDispatch();

    const [showCart, setShowCart] = useState(false);
    const isLogged = user != null; // ou qualquer lógica real de autenticação

    function handleUserAuth(){
        if(user === null){
            //despachar action de login
            dispatch({
                type: 'user/login',
                payload:{
                    name: "caio",
                    email: "caio@gmail.com"
                }
            }); 
        } else {
            dispatch({
                type: 'user/logout',
                    
            });
        }
    }
    
    return (
        <S.StyledHeader>
            <S.Wreapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonsWrapper>
                    <S.AuthButton $isLogged={isLogged} onClick={handleUserAuth}>
                        {isLogged ? "Logout" : "Login"}
                        {isLogged ? <FiLogOut /> : <FiLogIn />}
                    </S.AuthButton>

                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho
                        <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonsWrapper>
            </S.Wreapper>

            <Cart showCart={showCart} />
        </S.StyledHeader>
    );
};
