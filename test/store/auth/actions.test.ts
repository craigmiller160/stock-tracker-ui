import { loadAuthUser } from '../../../src/store/auth/actions';
import { createStore } from '../../../src/store';
import { EnhancedStore } from '@reduxjs/toolkit';
import * as TE from 'fp-ts/es6/TaskEither';
import * as O from 'fp-ts/es6/Option';
import { AuthUser } from '../../../src/types/auth';
import { getAuthUser } from '../../../src/services/AuthService';
import authSlice from '../../../src/store/auth/slice';

jest.mock('../../../src/services/AuthService', () => ({
	getAuthUser: jest.fn()
}));

const getAuthUserMock = getAuthUser as jest.Mock;

const authUser: AuthUser = {
	username: 'user',
	firstName: 'first',
	lastName: 'last',
	roles: []
};

describe('auth actions', () => {
	let store: EnhancedStore;
	beforeEach(() => {
		store = createStore();
		jest.resetAllMocks();
	});

	describe('loadAuthUser', () => {
		it('success', async () => {
			getAuthUserMock.mockImplementation(() => TE.right(authUser));
			await store.dispatch<any>(loadAuthUser());
			expect(store.getState().auth.userData).toEqualSome(authUser);
		});

		it('fail', async () => {
			store.dispatch(authSlice.actions.setUserData(O.some(authUser)));
			getAuthUserMock.mockImplementation(() => TE.left(new Error));
			await store.dispatch<any>(loadAuthUser());
			expect(store.getState().auth.userData).toBeNone();
		});
	});
});
