import { IGame } from "../../types/IGame";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
	games: IGame[] | null;
	isLoading: boolean;
	error: string;
	currentGame?: any;
}

const initialState: GameState = {
	games: [],
	isLoading: false,
	error: "",
};

const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {
		gamesFetching(state) {
			state.isLoading = true;
		},
		gamesFetchingSucces(state, action: PayloadAction<IGame[]>) {
			state.isLoading = false;
			state.error = "";
			state.games = action.payload;
		},
		gamesFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { gamesFetching, gamesFetchingSucces, gamesFetchingError } =
	gamesSlice.actions;
export default gamesSlice.reducer;
