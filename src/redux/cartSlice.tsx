import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    name: string,
    photo: string,
    price: number,
    description: string,
    quantidade: number
    
}

interface CartState{
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addtoCart: (state, action: PayloadAction<CartItem>) =>{
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantidade += 1;
            } else {
                state.cart.push({...action.payload, quantidade: 1})
            }
        },

        removefromCart: (state, action: PayloadAction<{ id: string }>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantidade += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item && item.quantidade > 1) {
                item.quantidade -= 1;
            } else {
                state.cart = state.cart.filter(item => item.id !== action.payload.id);
            }
        }
    }
});

export default cartSlice.reducer;
export const {addtoCart, removefromCart, decrementQuantity, incrementQuantity} = cartSlice.actions;