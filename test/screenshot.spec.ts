import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const baseUrl = 'http://localhost:5000'
const disabledA11yRules = ['color-contrast', 'page-has-heading-one']

test('index screenshot test', async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page).toHaveScreenshot('index.png');
});

test('index accessibility test', async ({ page }) => {
    await page.goto(baseUrl);

    const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(disabledA11yRules)
        .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});
