from playwright.sync_api import sync_playwright
import os

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Get the absolute path to the HTML file
        file_path = os.path.abspath('index.html')

        # Go to the local HTML file
        page.goto(f'file://{file_path}')

        # Simulate login
        page.click('#login-btn')

        # Verify Case 1
        page.click('#case1')
        page.wait_for_selector('#case-opening-screen', state='visible')
        page.screenshot(path='jules-scratch/verification/case1_verification.png')
        page.click('#back-to-main-btn')

        # Verify Case 2
        page.click('#case2')
        page.wait_for_selector('#case-opening-screen', state='visible')
        page.screenshot(path='jules-scratch/verification/case2_verification.png')

        browser.close()

if __name__ == '__main__':
    run_verification()
