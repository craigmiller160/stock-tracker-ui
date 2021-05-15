import * as TE from 'fp-ts/es6/TaskEither';
import { AuthUser } from '../types/auth';
import { pipe } from 'fp-ts/es6/function';
import ajaxApi from './AjaxApi';
import { isAxiosError } from '@craigmiller160/ajax-api-fp-ts';
import { AxiosResponse } from 'axios';

export const getAuthUser = (): TE.TaskEither<Error, AuthUser> =>
	pipe(
		ajaxApi.get<AuthUser>({
			uri: '/oauth/user',
			errorMsg: 'Error getting authenticated user',
			suppressError: (ex: Error) => {
				if (isAxiosError(ex)) {
					return ex.response?.status === 401;
				}
				return false;
			}
		}),
		TE.map((res: AxiosResponse<AuthUser>) => res.data)
	);
