// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries: 2, //rerun the test 2 times, if 1st gets failed
  //workers: 1, //it will specify how many workers we need to run, eg: webkit is one worker here, chrome is another
  /* Run tests in files in parallel */
 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  timeout: 40*1000,   //default time is 30s but we set 40s
  expect: {timeout: 50*1000 },  //time for  assertion 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects: [{  // to run tests in multiple browsers
      name:'webkit',
      use: {
      browserName: "webkit",
      headless: false,
      screenshot: 'on',
      trace: 'on',    //to get report of page
      video: 'on',
      permissions: ['geolocation'], //to access location in the web,
      ignoreHTTPSErrors: true, //it will ignore ssl certificate error,
      //viewport: {width: 700, height: 700}, // to check the response of the screen.i.e screen size
      ...devices['Galaxy A55'] //both viewport and device won't work together
      }
  },
  {
  name: 'chrome',
    use: {
      browserName: "chromium",
      headless: true,
      screenshot: 'on',
      trace: 'on',    //to get report of page
      video: 'on'
      }
}],

  /* Configure projects for major browsers */

});

