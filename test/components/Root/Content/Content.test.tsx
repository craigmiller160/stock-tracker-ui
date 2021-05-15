import renderComponent from '../../../testutils/rendering/renderComponent';
import Content from '../../../../src/components/Root/Content';
import { screen } from '@testing-library/react';

describe('Content component', () => {
	it('renders correctly', async () => {
		await renderComponent({
			component: Content
		});

		expect(screen.queryByText('Content')).toBeInTheDocument();
	});
});
