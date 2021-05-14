import { Dispatch } from 'redux';
import { pipe } from 'fp-ts/es6/function';
import * as O from 'fp-ts/es6/Option';
import * as TE from 'fp-ts/es6/TaskEither';
import * as E from 'fp-ts/es6/Either';
import authSlice from './slice';
import { getAuthUser } from '../../services/AuthService';
import { AuthUser } from '../../types/auth';

export const loadAuthUser =
	() =>
	(dispatch: Dispatch): Promise<E.Either<Error, AuthUser>> =>
		pipe(
			getAuthUser(),
			TE.map((authUser) => {
				dispatch(authSlice.actions.setUserData(O.some(authUser)));
				return authUser;
			}),
			TE.mapLeft((ex: Error) => {
				dispatch(authSlice.actions.setUserData(O.none));
				return ex;
			})
		)();
