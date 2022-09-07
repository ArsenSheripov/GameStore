import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGame } from "../../types/IGame";

interface GameState {
	game: IGame | null;
	isLoading: boolean;
	error: string;
}

const initialState: GameState = {
	game: null,
	isLoading: false,
	error: "",
};

const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		gameFetching(state) {
			state.isLoading = true;
		},
		gameFetchingSucces(state, action: PayloadAction<IGame>) {
			state.isLoading = false;
			state.error = "";
			state.game = action.payload;
		},
		gameFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { gameFetching, gameFetchingError, gameFetchingSucces } =
	gameSlice.actions;
export default gameSlice.reducer;
