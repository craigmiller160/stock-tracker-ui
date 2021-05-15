import MockAdapter from 'axios-mock-adapter';
import { simpleUser } from '../modelmocks/auth';

const GET_AUTH_USER = '/stock-tracker/api/oauth/user';

export const mockGetAuthUser = (api: MockAdapter): MockAdapter =>
	api.onGet(GET_AUTH_USER).reply(200, simpleUser);

export const mockFailGetAuthUser = (api: MockAdapter): MockAdapter =>
	api.onGet(GET_AUTH_USER).reply(500);
