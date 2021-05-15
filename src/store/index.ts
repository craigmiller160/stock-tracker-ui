import { combineReducers } from 'redux';
import { reduxAlertReducer } from '@craigmiller160/react-material-ui-common';
import authSlice from './auth/slice';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	alert: reduxAlertReducer,
	auth: authSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = (
	preloadedState: Partial<RootState> = {}
): EnhancedStore<RootState> =>
	configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== 'production',
		preloadedState
	});

export default createStore();
