import MockAdapter from 'axios-mock-adapter';
import { simpleUser } from '../modelmocks/auth';

export const mockGetAuthUser = (api: MockAdapter) =>
    api.onGet('/stock-tracker/api/oauth/user')
        .reply(200, simpleUser);
