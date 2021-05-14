import MockAdapter from 'axios-mock-adapter';
import ajaxApi from '../../src/services/AjaxApi';
import { AuthUser } from '../../src/types/auth';
import { getAuthUser } from '../../src/services/AuthService';

const mockAjaxApi = new MockAdapter(ajaxApi.instance);

const authUser: AuthUser = {
    username: 'user',
    firstName: 'first',
    lastName: 'last',
    roles: []
};

describe('AuthService', () => {
    it('getAuthUser', async () => {
        mockAjaxApi
            .onGet('/stock-tracker/api/oauth/user')
            .reply(200, authUser);
        const result = await getAuthUser()();
        expect(result).toEqualRight(authUser);
    });
});