import { AppDispatch } from ".";
import GameService from "../API/GameService";
import {
	gameFetching,
	gameFetchingError,
	gameFetchingSucces,
} from "./game/gameSlice";
import gamesSlice, {
	gamesFetching,
	gamesFetchingError,
	gamesFetchingSucces,
} from "./games/gamesSlice";

export const fetchGames = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(gamesFetching());
		const response = GameService.getAll();
		dispatch(gamesFetchingSucces((await response).data));
	} catch (e: any) {
		dispatch(gamesFetchingError(e.message));
	}
};

export const fetchGame = (id: any) => async (dispatch: AppDispatch) => {
	try {
		dispatch(gameFetching());
		const response = GameService.getById(id);
		dispatch(gameFetchingSucces((await response).data));
	} catch (e: any) {
		dispatch(gameFetchingError(e.message));
	}
};
