import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage';
import { LoginPage } from '../../pages/login.page';
import users from '../../fixtures/users.json';

test('Login with correct credentials', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.open();
  await home.openLogin();
  await login.login(users.invalidUser.email, users.invalidUser.password);

  await expect(page.locator('[id="#modal"]')).toBeHidden();
});
