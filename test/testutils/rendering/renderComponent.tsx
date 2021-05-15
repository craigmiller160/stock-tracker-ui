import React, { ComponentType } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { createStore, RootState } from '../../../src/store';
import { EnhancedStore } from '@reduxjs/toolkit';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export interface RenderConfig {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component: ComponentType<any>;
}

export interface RenderResult {
	store: EnhancedStore<RootState>;
	history: MemoryHistory;
}

const renderComponent = async (config: RenderConfig): Promise<RenderResult> => {
	const store = createStore();
	const history = createMemoryHistory();
	const CompToRender = config.component;
	await waitFor(() =>
		render(
			<Provider store={store}>
				<Router history={history}>
					<CompToRender />
				</Router>
			</Provider>
		)
	);
	return {
		store,
		history
	};
};

export default renderComponent;
