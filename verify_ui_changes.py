import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Start server (assuming it's running on 8080)
        page.goto("http://localhost:8080")

        # 1. Login
        page.click("#header-login-btn")
        page.fill("#email-input", "test@test.com")
        page.click("#login-btn")
        page.wait_for_selector("#user-avatar")

        # 2. Capture Main Menu with Hover on Case
        # Hover over Case 1
        page.hover("#case1")
        page.wait_for_timeout(500) # Wait for transition
        os.makedirs("verification_screenshots", exist_ok=True)
        page.screenshot(path="verification_screenshots/1_main_menu_hover.png")

        # 3. Capture Inventory Page
        page.goto("http://localhost:8080/inventory.html")
        page.wait_for_selector(".inventory-header")
        page.screenshot(path="verification_screenshots/2_inventory_page.png")

        # 4. Capture Back Button Style in Inventory
        page.screenshot(path="verification_screenshots/3_inventory_back_btn.png", clip={"x": 0, "y": 70, "width": 200, "height": 100})

        browser.close()

if __name__ == "__main__":
    run()
