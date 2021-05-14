import authSlice, { initialState as authInitState } from '../../../src/store/auth/slice';
import { AuthUser } from '../../../src/types/auth';
import * as O from 'fp-ts/es6/Option';

describe('auth slice', () => {
	it('setUserData', () => {
		const authUser: AuthUser = {
			username: 'user',
			firstName: 'firstName',
			lastName: 'lastName',
			roles: []
		};

		const result = authSlice.reducer(
			authInitState,
			authSlice.actions.setUserData(O.some(authUser))
		);
		expect(result).toEqual({
			...authInitState,
			userData: O.some(authUser),
			hasChecked: true
		});
	});
});
