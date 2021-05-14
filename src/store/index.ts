import { combineReducers } from 'redux';
import { reduxAlertReducer } from '@craigmiller160/react-material-ui-common';
import authSlice from './auth/slice';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	alert: reduxAlertReducer, // TODO need to add alert component
	auth: authSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = (): EnhancedStore =>
	configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== 'production'
	});

export default createStore();
