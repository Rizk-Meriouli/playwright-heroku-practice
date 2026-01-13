import { test } from '@playwright/test';

test('Home page loads', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

