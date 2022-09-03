import { IGame } from "../../types/IGame";
import { createSlice } from "@reduxjs/toolkit";

interface GameState {
	currentGame: IGame | null;
}

const initialState: GameState = {
	currentGame: null,
};

const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {
		setCurrentGame: (state, action) => {
			state.currentGame = action.payload;
		},
	},
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
