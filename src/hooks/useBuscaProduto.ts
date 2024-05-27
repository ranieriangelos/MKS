import axios from 'axios';
import {useState, useEffect} from 'react';

interface Produto{
    id: string;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
}

const useBuscaProduto = () =>{
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() =>{
        axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
        .then(response => {
            setProdutos(response.data.products);
            })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
    }, [])

    return produtos;
}

export default useBuscaProduto;