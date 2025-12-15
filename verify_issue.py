
import os
from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        try:
            # Go to the page
            page.goto("http://localhost:8080")

            # Login
            page.click("#header-login-btn")
            # Skipping input fill as it's not required by logic
            page.click("#login-btn")

            # Wait for login
            page.wait_for_selector(".user-info", state="visible")

            # Click on Case 3 (Knife case - likely has the issue or just test case 1)
            # User image showed "Caixa de Facas" (Knife Case)
            page.click("div[data-case='case3']")

            # Wait for case opening screen
            page.wait_for_selector("#case-opening-screen", state="visible")

            # Scroll to "You can win" section
            page.locator("#case-items-grid").scroll_into_view_if_needed()

            # Take screenshot of the grid
            os.makedirs("verification_screenshots", exist_ok=True)
            page.screenshot(path="verification_screenshots/case_items_grid_before.png")

            # Check visibility of names
            items = page.query_selector_all(".case-skin-item span")
            print(f"Found {len(items)} items in grid.")
            visible_count = 0
            for i, item in enumerate(items):
                if item.is_visible():
                    visible_count += 1
            print(f"Visible names: {visible_count}/{len(items)}")

            # Simulate a spin to check the winner border
            page.click("#open-case-button")

            # Wait for winner class to appear (approx 7.5s animation)
            # Use a generous timeout
            page.wait_for_selector(".roulette-item.winner", timeout=15000)

            # Wait a bit for the pulse animation to settle or be captured
            time.sleep(1)

            # Take screenshot of roulette
            page.screenshot(path="verification_screenshots/roulette_winner_before.png")
            print("Winner screenshot taken.")

        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="verification_screenshots/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify()
