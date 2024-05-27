import styled from "styled-components";


export const Carrinho = styled.div`
width: 50%;
height: 100%;
background-color: var(--azul);
position: absolute;
display: columns;
margin: 0px 0 0 50%;
border-radius: 5px;
padding: 30px;
    h2{
        color: var(--branco);
        font-size: 30px;
        font-weight: 500;
        float: left;
        line-height: 25pt;
    }
    .content-topCart{
        width: 100%;
        float: left;
        display: block;
    }
    .imgCheckout{
        height: 8vh;
        float: left;
        border-radius: 5px;
        margin: 0 30px 0 0;
    }

    .listCheckout{
        width: 100%;
        height: 78vh;
        float: left; 
        display: columns; 
    }

    .listCheckoutItem{
        float: left;
        width: 100%;
        background-color: var(--branco);
        border-radius: 5px;
        margin: 20px 0 0 0;
        padding: 10px;
    }

    .closeCheckout{
        float: right;
        border: none;
        padding: 8px 18px;
        border-radius: 30px;
        background-color: #000;
    } .closeCheckout:hover{cursor: pointer;}

    .closeCheckout h2{
        font-size: 14pt;
    }

    .productName{
        font-size: 20px;
        width: 150px;
        float: left;
        margin: 15px 0;
    }

    .quantityControl{
        float: left;
        margin: 20px 20%;
    }

    .legendaQuatidade{
        font-size: 9px;
        font-weight: lighter;
        margin: 0 0 3px;
    }

    .buttonIncDec{
        border-radius: 2px;
        border: 1px;

    }

    .valorQuantidade{
        padding: 15px;
        font-size: 12px;
    }

    .productPrice{
        float: right;
        font-weight: bold;
        font-size: 21px;
        margin: 27px 0;
    }

    .valorTotal{
        margin: 0% 0;
        width: 93%;
        float: left;
    } 
    .total{
        float: right; 
        font-weight: bold;
        }

    .finalizarCompra{
        background-color: #000;
        float: left;
        border: none;
        width: 100%;
        margin: 20px 0;
        border-radius: 10px;
        padding: 5px 42%;
    } .finalizarCompra h2{
        font-size: 13pt;
        font-weight: bold;
    }.finalizarCompra:hover{cursor: pointer;}
`

export const Close = styled.div`
    float: right;
    margin: -20px 0 0 42vw;
    text-align: center;
    background-color:#000;
    color: var(--branco);
    border-radius: 20px;
    position: absolute;
    .removeItem{
        font-size: 13px; 
        margin: 0px 0 0 0;
        padding: 0 12px;
    }
    :hover{cursor: pointer;}
`

