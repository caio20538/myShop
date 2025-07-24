import styled from "styled-components";

export const Container = styled.main`
    max-width: 1240px;
    //isso e arrumando a altura do container deixa todas os cards na msm altura
    height: 100%;
    margin: 4rem auto;
    padding: 0 2rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    //joga os itens para o topo sem esticar
    align-items: stretch;
    gap: 2rem;

    //assim diz que tudo abaixo ou dentro vai ter esse estilo   
    & > article{
        //estica o maximo tendo no minimo 300px senão quebra em conjunto ao flexwrap
        flex: 1 300px;
    }
`;