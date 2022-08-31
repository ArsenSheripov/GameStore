import { configureStore, createReducer } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer: {
        cart: createReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
