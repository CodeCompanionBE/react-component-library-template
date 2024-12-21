import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './index.js';

describe('<Button />', () => {
	test("it should render the button with it's children", () => {
		render(<Button>Click me</Button>);

		expect(screen.getByRole('button')).toHaveTextContent('Click me');
	});

	test('it should spread button props', () => {
		render(
			<Button data-testid="button" type="button">
				Click me
			</Button>,
		);

		expect(screen.getByTestId('button')).toHaveAttribute('type', 'button');
	});
});
