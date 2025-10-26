
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:8080');

    // 1. Click the login button
    await page.click('#login-btn');

    // 2. Click on the "Caixa Espectral" case
    await page.click('[data-case="case1"]');

    // 3. Wait for the case opening screen to appear
    await page.waitForSelector('#case-opening-screen', { state: 'visible' });

    // 4. Click the "Abrir Caixa" button
    await page.click('#open-case-button');

    // 5. Wait for the winning skin modal to appear
    await page.waitForSelector('#winning-skin-modal[style*="opacity: 1"]', { timeout: 9000 });

    // 6. Take a screenshot
    await page.screenshot({ path: 'jules-scratch/verification/improvements.png' });

    console.log('Screenshot saved to jules-scratch/verification/improvements.png');
  } catch (error) {
    console.error('An error occurred during verification:', error);
  } finally {
    await browser.close();
  }
})();
