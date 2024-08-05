import { expect, test } from '@playwright/test';

test('home page has a link to single word quiz', async ({ page }) => {
	await page.goto('/');
	const singleWordQuizLocator = page.getByText('Single Word quiz');
	await expect(singleWordQuizLocator).toBeVisible();
	await singleWordQuizLocator.click();
	await expect(page.getByText('quiz 0')).toBeVisible();
});
