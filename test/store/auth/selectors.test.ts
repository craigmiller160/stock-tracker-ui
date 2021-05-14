import authSlice from '../../../src/store/auth/slice';
import { AuthUser } from '../../../src/types/auth';
import * as O from 'fp-ts/es6/Option';
import { isAuthorized } from '../../../src/store/auth/selectors';
import {
	combineReducers,
	configureStore,
	EnhancedStore
} from '@reduxjs/toolkit';

const authUser: AuthUser = {
	username: 'user',
	firstName: 'firstName',
	lastName: 'lastName',
	roles: []
};

const rootReducer = combineReducers({
	auth: authSlice.reducer
});

describe('auth selectors', () => {
	let store: EnhancedStore;
	beforeEach(() => {
		store = configureStore({
			reducer: rootReducer
		});
	});

	describe('isAuthorized', () => {
		it('true', () => {
			store.dispatch(authSlice.actions.setUserData(O.some(authUser)));
			const result = isAuthorized(store.getState());
			expect(result).toEqual(true);
		});

		it('false', () => {
			const result = isAuthorized(store.getState());
			expect(result).toEqual(false);
		});
	});
});
