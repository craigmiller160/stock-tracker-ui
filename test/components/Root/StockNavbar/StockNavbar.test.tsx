import React from 'react';
import renderComponent from '../../../testutils/rendering/renderComponent';
import StockNavbar from '../../../../src/components/Root/StockNavbar';
import * as O from 'fp-ts/es6/Option';
import { simpleUser } from '../../../testutils/modelmocks/auth';
import { screen } from '@testing-library/react';

describe('StockNavbar', () => {
	it('renders correctly', async () => {
		await renderComponent({
			component: StockNavbar,
			preloadedState: {
				auth: {
					userData: O.some(simpleUser),
					hasChecked: true
				}
			}
		});

		screen.debug(); // TODO delete this

		expect(screen.queryByText('Stock Tracker'))
			.toBeInTheDocument();
		expect(screen.queryByText('Logout'))
			.toBeInTheDocument();
	});
});
