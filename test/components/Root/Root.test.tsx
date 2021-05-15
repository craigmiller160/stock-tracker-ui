import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Root from '../../../src/components/Root';
import { createStore } from '../../../src/store';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { mockGetAuthUser } from '../../testutils/ajaxmocks/AuthServiceMocks';
import MockAdapter from 'axios-mock-adapter';
import ajaxApi from '../../../src/services/AjaxApi';

const mockAjaxApi = new MockAdapter(ajaxApi.instance);

const doRender = () => {
	const store = createStore();
	const history = createMemoryHistory();
	return waitFor(() =>
		render(
			<Provider store={store}>
				<Router history={history}>
					<Root />
				</Router>
			</Provider>
		)
	);
};

describe('Root component', () => {
	it('renders after auth check', async () => {
		mockGetAuthUser(mockAjaxApi);
		await doRender();
		expect(screen.queryByText('Stock Tracker')).toBeInTheDocument();
		expect(screen.queryByText('Content')).toBeInTheDocument();
	});
});
