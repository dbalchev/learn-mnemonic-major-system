import { expect, test } from '@playwright/test';

test('home page has a link to single word quiz', async ({ page }) => {
	await page.goto('/');
	const singleWordQuizLocator = page.getByText('Single Word quiz');
	await expect(singleWordQuizLocator).toBeVisible();
	await singleWordQuizLocator.click();
	await page.waitForURL(/single-word$/);
	expect(page.url()).toMatch(/single-word$/);
});

test('singe word quiz works', async ({ page }) => {
	await page.goto('/single-word?type=testing');
	await expect(page.getByText('quiz 0')).toBeVisible();
	await expect(page.getByText('test')).toBeVisible();
	await expect(page.getByText('Successes: 0')).toBeVisible();
	await page.keyboard.type('101');
	await expect(page.getByText('Successes: 1')).toBeVisible();
	await expect(page.getByText('spec')).toBeVisible();
	await expect(page.getByText('Fails: 0')).toBeVisible();
	await page.keyboard.type('098');
	await expect(page.getByText('Fails: 1')).toBeVisible();
	await expect(page.getByText('no more quiz items')).toBeVisible();
});
