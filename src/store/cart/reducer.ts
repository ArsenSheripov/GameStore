import {IGame} from '../../types/IGame'
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    itemsInCart: IGame[]
}

const initialState: CartState = {
    itemsInCart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItemInCart: (state,action)=>{
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart:(state,action)=>{
            state.itemsInCart = state.itemsInCart.filter(game=>game.id !==action.payload)
        }
    }
});

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;