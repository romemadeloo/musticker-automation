import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly myAccountLink: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.myAccountLink = page.getByRole('link', { name: 'My Account' });
    this.signInButton = page.getByRole('button', { name: 'Sign in to Account' });
  }

  async open() {
    await this.page.goto('/');
  }

  async openLogin() {
    await this.myAccountLink.click();
    await this.signInButton.click();
  }
}
