import React, { useState } from "react";


import { FiLogIn, FiShoppingCart, FiLogOut } from 'react-icons/fi';

import * as S from "./styles"
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
    const [showCart, setShowCart] = useState(false);
    const isLoged = false;

    return(
        <S.StyledHeader>
            <S.Wreapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonsWrapper>
                    <S.AuthButton isLoged= {isLoged}>
                        {isLoged ? "Logout" : "Login"}
                        {isLoged ? <FiLogOut /> : <FiLogIn />}
                    </S.AuthButton>

                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho
                        <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonsWrapper>
            </S.Wreapper>

            <Cart showCart = {showCart}/>
        </S.StyledHeader>
    );
}