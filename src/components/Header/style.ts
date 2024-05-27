import styled from "styled-components";
import vectorImage from '../../assets/Vector.svg';

export const Container = styled.div`
    background-color: var(--azul) ;
    height: 5em;
    margin: 0 0 50px 0;

`

export const Logo = styled.div`
    color:#fff;
    display: flex;
    float: left;
    margin: 30px 20px;
    h1{
        font-size: 40px;
        font-weight: 600;
        line-height: 19px;
    }
    h2{
        font-size: 20px;
        font-weight: 300;
        line-height: 19px;
        margin: 5px 0 0 5px;
    }
`
export const Input = styled.input``

export const CartButton = styled.button`
    width: 60px;
    height: 32px;
    background-color: #fff;
    border-radius: 8px;
    float: right;
    margin: 25px 20px 0;
    display: flex;
    padding: 6px 0 0 13px;
    border: 0;
    :hover{
        cursor: pointer;
    }
`

export const Vector = styled.div`
    background-image: url(${vectorImage});
    background-repeat: no-repeat;
    width: 40%;
    height: 3vh;
    margin: 0 7px 0 0;
`

export const ItemCount = styled.div`
    float:left;
    font-weight: bold;
    margin-top: 2px;
`


