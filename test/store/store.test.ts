import { createStore } from '../../src/store';
import * as O from 'fp-ts/es6/Option';

describe('redux store', () => {
	it('has correct initial state without preloaded state', () => {
		const store = createStore();
		expect(store.getState()).toEqual(
			expect.objectContaining({
				auth: {
					userData: O.none,
					hasChecked: false
				}
			})
		);
	});

	it('has correct initial state with preloaded state', () => {
		const store = createStore({
			auth: {
				userData: O.none,
				hasChecked: true
			}
		});
		expect(store.getState()).toEqual(
			expect.objectContaining({
				auth: {
					userData: O.none,
					hasChecked: true
				},
				alert: {
					show: false,
					type: 'success',
					message: ''
				}
			})
		);
	});
});
