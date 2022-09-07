import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import gamesReducer from "./games/gamesSlice";
import gameReducer from "./game/gameSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		game: gameReducer,
		games: gamesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
