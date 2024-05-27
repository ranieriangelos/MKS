// Home.tsx
import React from 'react';
import ProductCard from '../../components/ProductCard';
import { Container, ListProduct } from './style';
import Checkout  from '../../components/Checkout';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
    return (
        <>
            <Container>
                <ListProduct>
                    <ProductCard />
                </ListProduct>
            </Container>
            <Footer></Footer>
        </>
       
    );
};

export default Home;
