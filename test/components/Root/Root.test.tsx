import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Root from '../../../src/components/Root';
import { createStore } from '../../../src/store';

const doRender = () => {
	const store = createStore();
	return render(
		<Provider store={store}>
			<Root />
		</Provider>
	);
};

describe('Root component', () => {
	it('test', () => {
		throw new Error();
	});
});
