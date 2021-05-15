/* eslint-disable @typescript-eslint/no-empty-function */
import '@relmify/jest-fp-ts';
import '@testing-library/jest-dom/extend-expect';
import mediaQuery from 'css-mediaquery';

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

beforeEach(() => {
	window.matchMedia = createMatchMedia(window.innerWidth);
});
