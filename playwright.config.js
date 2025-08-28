// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './testing',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never' }]],
  use: {
    javaScriptEnabled: true, // default is true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      timeout: 120000,
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      timeout: 120000,
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      timeout: 120000,
    }
  ]
});