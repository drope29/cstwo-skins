
from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the local HTML file
    file_path = os.path.abspath('index.html')
    page.goto(f'file://{file_path}')

    # Login
    page.click('#login-btn')

    # Wait for the main container to be visible
    page.wait_for_selector('#main-container', state='visible')

    # Give images time to load
    page.wait_for_timeout(1000)

    # Take a screenshot of the main page
    page.screenshot(path='jules-scratch/verification/verification_generated_images.png')

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
