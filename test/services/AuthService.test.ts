import MockAdapter from 'axios-mock-adapter';
import ajaxApi from '../../src/services/AjaxApi';
import { getAuthUser } from '../../src/services/AuthService';
import { mockGetAuthUser } from '../testutils/ajaxmocks/AuthServiceMocks';
import { simpleUser } from '../testutils/modelmocks/auth';

const mockAjaxApi = new MockAdapter(ajaxApi.instance);

describe('AuthService', () => {
	beforeEach(() => {
		mockAjaxApi.reset();
	});

	it('getAuthUser', async () => {
		mockGetAuthUser(mockAjaxApi);
		const result = await getAuthUser()();
		expect(result).toEqualRight(simpleUser);
	});
});
