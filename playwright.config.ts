import { defineConfig } from '@playwright/test';
import { ENV } from './utils/env';

export default defineConfig({
  // Where Playwright looks for tests
  testDir: './tests',

  // Global timeout per test
  timeout: 60 * 1000,

  // Expect timeout
  expect: {
    timeout: 10 * 1000,
  },

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build if test.only is left in CI
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Workers
  workers: process.env.CI ? 2 : undefined,

  // Reporter
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  // Shared settings for all projects
  use: {
    baseURL: ENV.baseURL, // 🔥 THIS IS THE IMPORTANT PART
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  // Browsers
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' }
    }
  ]
});
