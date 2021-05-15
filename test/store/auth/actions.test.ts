import { loadAuthUser } from '../../../src/store/auth/actions';
import { createStore } from '../../../src/store';
import { EnhancedStore } from '@reduxjs/toolkit';
import * as O from 'fp-ts/es6/Option';
import authSlice from '../../../src/store/auth/slice';
import MockAdapter from 'axios-mock-adapter';
import ajaxApi from '../../../src/services/AjaxApi';
import {
	mockFailGetAuthUser,
	mockGetAuthUser
} from '../../testutils/ajaxmocks/AuthServiceMocks';
import { simpleUser } from '../../testutils/modelmocks/auth';

const mockAjaxApi = new MockAdapter(ajaxApi.instance);

describe('auth actions', () => {
	let store: EnhancedStore;
	beforeEach(() => {
		mockAjaxApi.reset();
		store = createStore();
		jest.resetAllMocks();
	});

	describe('loadAuthUser', () => {
		it('success', async () => {
			mockGetAuthUser(mockAjaxApi);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			await store.dispatch<any>(loadAuthUser());
			expect(store.getState().auth.userData).toEqualSome(simpleUser);
		});

		it('fail', async () => {
			store.dispatch(authSlice.actions.setUserData(O.some(simpleUser)));
			mockFailGetAuthUser(mockAjaxApi);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			await store.dispatch<any>(loadAuthUser());
			expect(store.getState().auth.userData).toBeNone();
		});
	});
});
