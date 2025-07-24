import React from "react";
import * as S from "./style";
import { ProductCards } from "../ProductCards/ProductCards";
import {Products} from "../../data/Products"

export const ProductsList:React.FC = () =>{
    //pode usar um useEfect de uma API
    
    return(
        <S.Container>
            {Products.map((product) => {
                return <ProductCards key={product.id} product={product}/>
            }) }
         
        </S.Container>
    );
}