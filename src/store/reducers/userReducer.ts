import { error } from "console";
import { UserAction, UserActionTypes, UserState } from "../../types/user";


const initialState: UserState = {
	id: 0,
	email: '',
	token: '',
	error: null,
	loading: false,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return {
				...state,
				id: state.id,
				email: state.email,
				token: state.token,
				loading: true
			}
		case UserActionTypes.SET_USER_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				email: action.payload.email,
				token: action.payload.token,
				loading: false
			}
		case UserActionTypes.SET_USER_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			}

		case UserActionTypes.REMOVE_USER:
			return {
				...state,
				id: 0,
				email: '',
				token: '',
				error: '',
				loading: false
			}
		default:
			return state;
	}
}