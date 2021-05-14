import { configureMockStore, MockStoreEnhanced } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { loadAuthUser } from '../../../src/store/auth/actions';
import { RootState } from '../../../src/store';

const createMockStore = configureMockStore([thunk]);



describe('auth actions', () => {
	let store: MockStoreEnhanced<{}>;
	beforeEach(() => {
		store = createMockStore({});
	});

	it('loadAuthUser', () => {
		store.dispatch(loadAuthUser());
	});
});
