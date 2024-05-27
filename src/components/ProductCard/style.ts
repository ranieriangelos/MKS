import styled from 'styled-components';

export const Card = styled.li`
    width: 251px;
    height: 338px;
    background-color: #fff;
    margin: 2vh 1vh;
    box-shadow: 5px 5px 5px 0 #dcdcdc;
    float: left;
    border-radius: 5px;
    text-align: center;
    img {
    width: auto;
    height: 138px;
    margin: 20px 0 30px 0 ;
}
    `

export const ProductImg = styled.div`
    width: 100%;
    height: 168px;
`
export const Pruduct = styled.div`
    width: 200px;   
    margin: 0 0 1px 25px;
    height: 140px;
    float: left;
`

export const TitleProduction = styled.h2`
    font-size: 17px;
    width: 112px;
    float: left;
    height: 50px;
    color: var(--cinza-font);
    text-align: left;
    margin: 0 3px 0 0;
`

export const Price = styled.h3`
    background-color: var(--cinza-escuro);
    color: var(--branco);
    font-size: 14px;
    margin: 0px 0 0 0;
    border-radius: 6px;
    text-align: center;
    padding: 3%;
    float: left;
    font-weight: bold;
`

export const Description = styled.h3`
    margin: 0 0 0 0;
    height: 60px;
    text-align: left;
    float: left;
    line-height: 12pt;
    font-size: 12px;
`

export const BuyButton = styled.button`
    background-color: var(--azul);
    text-align: center;
    float: left;
    border-radius: 5px;
    text-transform: uppercase;
    color: var(--branco);
    border: none;
    width: 100%;
    padding: 7px 75px;
    h3{
        float: left;
    }
    .img-buy{
        margin: 0 10px 0 0;
        height: 16px;
        float: left;
    }
`

