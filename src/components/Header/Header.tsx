import React from "react";


import { FiLogIn, FiShoppingCart } from 'react-icons/fi';

import * as S from "./styles"

export const Header: React.FC = () => {
    return(
        <S.StyledHeader>
            <S.Wreapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonsWrapper>
                    <S.AuthButton>
                        Login
                        <FiLogIn />
                    </S.AuthButton>

                    <S.CartButton>
                        Carrinho
                        <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonsWrapper>
            </S.Wreapper>
        </S.StyledHeader>
    );
}