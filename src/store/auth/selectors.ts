import * as O from 'fp-ts/es6/Option';
import { AuthUser } from '../../types/auth';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

const userDataSelector = (state: RootState): O.Option<AuthUser> =>
	state.auth.userData;

export const isAuthorized = createSelector(
	userDataSelector,
	(userData: O.Option<AuthUser>) => O.isSome(userData)
);
