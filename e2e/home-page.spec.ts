import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:2022');
	});

	test('Should have `Welcome to Boilertowns` headline', async ({ page }) => {
		const headline = page.getByText('Welcome to Boilertowns');
		await expect(headline).toBeVisible();
	});

	test('Should have count button and click to increase value', async ({
		page,
	}) => {
		await expect(page.getByRole('button', { name: 'Count: 0' })).toBeVisible();
		await page.getByRole('button', { name: 'Count: 0' }).click();
		await expect(page.getByRole('button', { name: 'Count: 1' })).toBeVisible();
	});
});
