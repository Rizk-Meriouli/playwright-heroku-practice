import { test, expect } from '@playwright/test';

test('checkboxes can be toggled', async ({ page }) => {
    await page.goto('/checkboxes');

    const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);
    const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);

    const firstWasChecked = await firstCheckbox.isChecked();

    if (firstWasChecked) {
        await firstCheckbox.uncheck();
        await expect(firstCheckbox).not.toBeChecked();
    } else {
        await firstCheckbox.check();
        await expect(firstCheckbox).toBeChecked();
    }

    const secondWasChecked = await secondCheckbox.isChecked();

    if (secondWasChecked) {
        await secondCheckbox.uncheck();
        await expect(secondCheckbox).not.toBeChecked();
    } else {
        await secondCheckbox.check();
        await expect(secondCheckbox).toBeChecked();
    }    
});