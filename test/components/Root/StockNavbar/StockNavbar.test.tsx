import React from 'react';
import renderComponent from '../../../testutils/rendering/renderComponent';
import StockNavbar from '../../../../src/components/Root/StockNavbar';
import * as O from 'fp-ts/es6/Option';
import { simpleUser } from '../../../testutils/modelmocks/auth';
import { screen } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';

// TODO make this re-usable
const createMatchMedia = (width: number) => {
	return (query: string): MediaQueryList => ({
		matches: mediaQuery.match(query, { width }),
		addEventListener: () => {},
		removeEventListener: () => {},
		media: '',
		onchange: () => {},
		addListener: () => {},
		removeListener: () => {},
		dispatchEvent: () => false
	});
};

describe('StockNavbar', () => {
	beforeEach(() => {
		window.matchMedia = createMatchMedia(window.innerWidth);
	});

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

		expect(screen.queryByText('Stock Tracker')).toBeInTheDocument();
		expect(screen.queryByText('Logout')).toBeInTheDocument();
	});
});
