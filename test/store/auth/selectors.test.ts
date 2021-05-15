import authSlice from '../../../src/store/auth/slice';
import * as O from 'fp-ts/es6/Option';
import { isAuthorized } from '../../../src/store/auth/selectors';
import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { simpleUser } from '../../testutils/modelmocks/auth';

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
			store.dispatch(authSlice.actions.setUserData(O.some(simpleUser)));
			const result = isAuthorized(store.getState());
			expect(result).toEqual(true);
		});

		it('false', () => {
			const result = isAuthorized(store.getState());
			expect(result).toEqual(false);
		});
	});
});
