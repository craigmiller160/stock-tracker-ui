import { createApi } from '@craigmiller160/ajax-api-fp-ts';
import createAjaxErrorHandler from '@craigmiller160/ajax-error-handler';
import { AxiosResponse } from 'axios';
import store from '../store';
import { showErrorReduxAlert } from '@craigmiller160/react-material-ui-common';
import authSlice from '../store/auth/slice';
import * as O from 'fp-ts/es6/Option';

const ajaxErrorHandler = createAjaxErrorHandler({
	responseMessageExtractor: (response: AxiosResponse) => {
		if (response.data.message) {
			return response.data.message;
		}
		return '';
	},
	errorMessageHandler: (message: string) =>
		store.dispatch(showErrorReduxAlert(message)),
	unauthorizedHandler: () =>
		store.dispatch(authSlice.actions.setUserData(O.none))
});

export default createApi({
	baseURL: '/stock-tracker/api',
	useCsrf: true,
	defaultErrorHandler: ajaxErrorHandler
});
