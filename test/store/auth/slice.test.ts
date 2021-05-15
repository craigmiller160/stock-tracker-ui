import authSlice, {
	initialState as authInitState
} from '../../../src/store/auth/slice';
import * as O from 'fp-ts/es6/Option';
import { simpleUser } from '../../testutils/modelmocks/auth';

describe('auth slice', () => {
	it('setUserData', () => {
		const result = authSlice.reducer(
			authInitState,
			authSlice.actions.setUserData(O.some(simpleUser))
		);
		expect(result).toEqual({
			...authInitState,
			userData: O.some(simpleUser),
			hasChecked: true
		});
	});
});
