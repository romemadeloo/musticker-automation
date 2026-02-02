import { test, expect } from '@playwright/test';
import { ENV } from '../../utils/env';
import users from '../../fixtures/users.json';

test('Login with correct email and password', async ({ page }) => {
  // 1. Open homepage
  await page.goto(ENV.baseURL);

  // 2. Click on "My Account"
  await page.getByRole('link', { name: 'My Account' }).click();

  // 3. Click on "Sign in to Account"
  await page.getByRole('button', { name: 'Sign in to Account' }).click();

  // 4. Fill email
  const emailInput = page.locator('[id="#modal"] input[type="text"]');
  await expect(emailInput).toBeVisible();
  await emailInput.fill(users.validUser.email);

  // 5. Fill password
  const passwordInput = page.locator('[id="#modal"] input[type="password"]');
  await passwordInput.fill(users.validUser.password);

  // 6. Submit
  await page.getByRole('button', { name: 'Sign In' }).click();

  // 7. Assertion (IMPORTANT 🔥)
  await expect(page.locator('[id="#modal"]')).toBeHidden({ timeout: 10000 });
});
