import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../index';

describe('Counter', () => {
	test('Should render correct counter', async () => {
		const user = userEvent.setup();
		render(<Counter />);
		const counterButton = screen.getByRole('button');
		expect(counterButton).toHaveTextContent('Count: 0');
		await user.click(screen.getByRole('button'));
		expect(counterButton).toHaveTextContent('Count: 1');
	});
});
