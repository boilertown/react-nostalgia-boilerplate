import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:2022');
	});

	test('Should have `Welcome to Boilertowns` headline', async ({ page }) => {
		const headline = page.locator('h1');
		await expect(headline).toContainText('Welcome to Boilertowns');
	});

	test('Should have count button and click to increase value', async ({
		page,
	}) => {
		const countButton = page.locator('button');
		await expect(countButton).toContainText('Count: 0');

		// click to increase value
		await countButton.click();
		await countButton.click();
		await expect(countButton).toContainText('Count: 3');
	});
});
