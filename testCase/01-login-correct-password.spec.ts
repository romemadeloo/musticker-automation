import { test, expect } from '@playwright/test';

// Credentials 
const EMAIL = 'trainee81.glophics@gmail.com';
const PASSWORD = '1234567';

test('Login with correct email and password', async ({ page }) => {
  // 1. Open homepage
  await page.goto('https://www.ozstickerprinting.com/');
  // 2. Click on "My Account" link
  await page.getByRole('link', { name: 'My Account' }).click();
  // 3. Click on "Sign in to Account" button
  await page.getByRole('button', { name: 'Sign in to Account' }).click();
  // 4. Fill in email
  await page.locator('[id="#modal"] input[type="text"]').click();
  await page.locator('[id="#modal"] input[type="text"]').fill(EMAIL);
  // 5. Fill in password
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill(PASSWORD);
  // 6. Click on "Sign In" button
  await page.getByRole('button', { name: 'Sign In' }).click();
});
