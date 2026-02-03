import { test } from '@playwright/test';

test('capture screenshots', async ({ page }) => {
  // Wait for server to be ready
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'verification/home.png', fullPage: true });

  await page.goto('http://localhost:3000/feast');
  await page.screenshot({ path: 'verification/feast.png', fullPage: true });

  await page.goto('http://localhost:3000/culturals');
  await page.screenshot({ path: 'verification/culturals.png', fullPage: true });

  await page.goto('http://localhost:3000/sports');
  await page.screenshot({ path: 'verification/sports.png', fullPage: true });

  // Mobile view
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'verification/home_mobile.png', fullPage: true });
});
