import React, { ComponentType } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { createStore, RootState } from '../../../src/store';
import { EnhancedStore } from '@reduxjs/toolkit';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export interface RenderConfig {
	component: ComponentType<any>;
	preloadedState?: Partial<RootState>;
	props?: any;
}

export interface RenderResult {
	store: EnhancedStore<RootState>;
	history: MemoryHistory;
}

const renderComponent = async (config: RenderConfig): Promise<RenderResult> => {
	const store = createStore(config.preloadedState ?? {});
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
