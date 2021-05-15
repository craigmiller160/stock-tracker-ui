import * as O from 'fp-ts/es6/Option';
import { AuthUser } from '../../types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateType {
	userData: O.Option<AuthUser>;
	hasChecked: boolean;
}

export const initialState: StateType = {
	userData: O.none,
	hasChecked: false
};

const setUserData = (
	draft: StateType,
	action: PayloadAction<O.Option<AuthUser>>
) => {
	draft.userData = action.payload;
	draft.hasChecked = true;
};

export default createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserData
	}
});
