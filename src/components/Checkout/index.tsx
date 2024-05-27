import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ProductCard";
import {Carrinho, Close} from './style'
import { removefromCart, decrementQuantity, incrementQuantity } from "../../redux/cartSlice";


interface CheckoutProps {
  onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({onClose}) => {
  
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch()
  
  const valorTotal = cartItems.reduce((total, item) => total + item.price * item.quantidade, 0)

  return (
    <Carrinho>
      <div className="content-topCart">
        <h2>Carrinho <p/>de compras</h2>
        <button className="closeCheckout" onClick = {onClose}><h2>X</h2></button>
      </div>
      <ul className="listCheckout">
        {cartItems.map((item, index) => (
          <li className="listCheckoutItem" key={index}>
            <img className="imgCheckout" src={item.photo} alt={item.name} />
            <div className="contentCheckout">
              <h4 className="productName">{item.name}</h4>


              <div className="quantityControl">
                <h4 className="legendaQuatidade">Qntd:</h4>
                <button className="buttonIncDec" onClick={()  => dispatch(decrementQuantity({id: item.id}))}>-</button>
                <span className="valorQuantidade">{item.quantidade}</span>
                <button className="buttonIncDec" onClick={()  => dispatch(incrementQuantity({id: item.id}))}>+</button>
              </div>

              <h4 className="productPrice">R$ {item.price}</h4>
            </div>
            <Close 
              onClick={() => dispatch(removefromCart({id: item.id}))}
            >
              <h2 className="removeItem">X</h2>
            </Close>
          </li>
        ))}
      </ul>
    
      <div className="valorTotal"><h2>Total</h2> <h2 className="total">R$ {valorTotal}</h2></div>
      <button className="finalizarCompra"><h2>Finalizar compra</h2></button>
    </Carrinho>


  );
}

export default Checkout;
