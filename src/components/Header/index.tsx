import React from "react";
import {Container, Logo, CartButton, Vector, ItemCount, Input} from './style';
import { useSelector } from "react-redux";
import { RootState } from "../ProductCard";
import Checkout from "../Checkout";


const Header: React.FC = () =>{
const cartItems = useSelector((state:RootState) => state.cart.cart)
    
const [show, setShow] = React.useState(false);

    return( 
        <Container>
            <Logo>
                <h1>MKS</h1>
                <h2>Sistemas</h2>
            </Logo>
            {
                show?<Checkout onClose = {() => setShow(false)}></Checkout>: null
            }
            <CartButton onClick={() =>setShow(true)}>
                    <Vector/>
                    <ItemCount>{cartItems.length}</ItemCount>

            </CartButton>
        </Container>
    )
}

export default Header;