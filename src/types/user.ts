export interface UserState {
	id: number;
	email: string;
	token: string;
	error: null | string;
	loading: boolean;
}

export enum UserActionTypes {
	SET_USER = 'SET_USER',
	SET_USER_SUCCESS = 'SET_USER_SUCCESS',
	SET_USER_ERROR = 'SET_USER_ERROR',
	REMOVE_USER = 'REMOVE_USER',
}

interface SetUserAction {
	type: UserActionTypes.SET_USER;
}

interface SetUserSuccesAction {
	type: UserActionTypes.SET_USER_SUCCESS;
	payload: any
}

interface SetUserErrorAction {
	type: UserActionTypes.SET_USER_ERROR;
	payload: string
}

interface RemoveUserAction {
	type: UserActionTypes.REMOVE_USER;
}

export type UserAction = SetUserAction | SetUserSuccesAction | SetUserErrorAction | RemoveUserAction;