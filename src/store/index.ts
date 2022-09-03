import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'


export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
