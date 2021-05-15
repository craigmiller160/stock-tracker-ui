import React from 'react';
import { screen } from '@testing-library/react';
import Root from '../../../src/components/Root';
import { mockGetAuthUser } from '../../testutils/ajaxmocks/AuthServiceMocks';
import MockAdapter from 'axios-mock-adapter';
import ajaxApi from '../../../src/services/AjaxApi';
import renderComponent from '../../testutils/rendering/renderComponent';

const mockAjaxApi = new MockAdapter(ajaxApi.instance);

describe('Root component', () => {
	it('renders after auth check', async () => {
		mockGetAuthUser(mockAjaxApi);
		await renderComponent({
			component: Root
		});
		expect(screen.queryByText('Stock Tracker')).toBeInTheDocument();
		expect(screen.queryByText('Content')).toBeInTheDocument();
	});
});
