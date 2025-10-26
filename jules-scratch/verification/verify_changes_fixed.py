
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Navigate to the login page
    page.goto("http://localhost:8080")
    page.screenshot(path="jules-scratch/verification/01_login_page_fixed.png")

    # Click the login button
    page.click("#login-btn")

    # Wait for the main container to be visible
    page.wait_for_selector("#main-container", state="visible")
    page.screenshot(path="jules-scratch/verification/02_main_page_fixed.png")

    # Click the first case
    page.click("#case1")

    # Wait for the case opening screen to be visible
    page.wait_for_selector("#case-opening-screen", state="visible")
    page.screenshot(path="jules-scratch/verification/03_case_opening_screen_fixed.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
