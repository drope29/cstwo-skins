const { test, expect } = require('@playwright/test');

test.describe('Image Path Verification', () => {
  test('should verify all image paths are correct after fix', async ({ page }) => {
    // Navigate to the local server.
    await page.goto('http://localhost:8080');

    // 1. Simulate login
    await page.click('#header-login-btn');
    await page.click('#login-btn');
    await expect(page.locator('#main-container')).toBeVisible();

    // 2. Verify case images on the main page
    const case1Image = page.locator('#case1 img');
    await expect(await case1Image.getAttribute('src')).toBe('images/caixa1.png');
    const case2Image = page.locator('#case2 img');
    await expect(await case2Image.getAttribute('src')).toBe('images/caixa2.png');

    // 3. Click on the first case to open the case screen
    await page.click('#case1');
    await expect(page.locator('#case-opening-screen')).toBeVisible();

    // 4. Verify the paths of the skin images inside the grid
    const skinImages = page.locator('#case-items-grid .case-skin-item img');
    const firstSkinImage = skinImages.first();

    // Check the src of the first image to ensure it's correct
    const firstSkinImagePath = await firstSkinImage.getAttribute('src');
    expect(firstSkinImagePath).toContain('images/caixa1/awp_asiimov.png');

    // Log all image paths for debugging
    const allImagePaths = await skinImages.evaluateAll(images => images.map(img => img.src));
    console.log('Skin image paths found:', allImagePaths);

    // Ensure none of the paths contain the old '/skins/' subdirectory
    for (const path of allImagePaths) {
      expect(path).not.toContain('/skins/');
      expect(path).toContain('/images/'); // Check for the correct directory in the URL
    }

    // 5. Take a screenshot to visually confirm
    await page.screenshot({ path: 'verification_screenshot.png' });

    console.log('All image paths have been successfully verified.');
  });
});
