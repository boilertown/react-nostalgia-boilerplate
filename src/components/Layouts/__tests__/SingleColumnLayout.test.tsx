import { render, screen } from '@testing-library/react';
import { SingleColumnLayout } from '../index';

describe('SingleColumnLayout', () => {
	test('Should render SingleColumnLayout without crashing', () => {
		render(
			<SingleColumnLayout
				renderHeader={<div>Header</div>}
				renderMain={<div>Main</div>}
				renderFooter={<div>Footer</div>}
			/>,
		);

		expect(screen.getByRole('banner')).toHaveTextContent('Header');
		expect(screen.getByRole('main')).toHaveTextContent('Main');
		expect(screen.getByRole('contentinfo')).toHaveTextContent('Footer');
	});
});
