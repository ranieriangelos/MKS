import React from "react";
import { Card, ProductImg, TitleProduction, Price, Description, BuyButton, Pruduct} from './style';
import useBuscaProduto from '../../hooks/useBuscaProduto'
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/cartSlice";
import shoppingBag from '../../assets/shopping-bag.svg';
import {motion} from 'framer-motion';

export interface CartItem {
    id: string;
    name: string;
    photo: string;
    price: number;
    description: string;
    quantidade: number;
}

export interface CartState {
    cart: CartItem[];
  }
  
  export interface RootState {
    cart: CartState;
  }

const ProductCard: React.FC = () => {
    
    const produtos = useBuscaProduto();
    const dispatch = useDispatch();
 
    

    return (
        <>
            {produtos.map(produto =>(
                 <Card key={produto.id} as={motion.div} drag>
                    <ProductImg><img src={produto.photo} alt={produto.name} /></ProductImg>
                    <Pruduct>
                        <TitleProduction>{produto.name}</TitleProduction>
                        <Price>R$ {produto.price}</Price>
                        <Description>{produto.description}</Description>
                    </Pruduct>
                    <BuyButton onClick={() => dispatch(addtoCart({
                        id: produto.id,
                        name: produto.name,
                        photo: produto.photo,
                        price: produto.price,
                        description: "",
                        quantidade: 0
                    }))}>
                            <img className='img-buy' src={shoppingBag} alt='comprar' />
                            <h3>Comprar</h3>
                    </BuyButton>
                </Card>
            ))}
        </>
    );
};

   

export default ProductCard;
