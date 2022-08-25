import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";

export const setUser = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.SET_USER })
		} catch (e) {
			dispatch({ type: UserActionTypes.SET_USER_ERROR, payload: 'Произошла ошибка' })
		}
	}
}