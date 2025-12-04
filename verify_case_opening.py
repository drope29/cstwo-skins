import os
import time
from playwright.sync_api import sync_playwright

def verify_case_opening():
    os.makedirs('verification_screenshots', exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # Load page
        page.goto('http://localhost:8080/index.html')

        # Login
        page.click('#header-login-btn')
        page.fill('#email-input', 'test@example.com')
        page.fill('#password-input', 'password')
        page.click('#login-btn')

        # Verify login success
        page.wait_for_selector('.user-info', state='visible')
        print("Logged in successfully.")

        # Open Case 1
        page.click('#case1')

        # Verify Case Opening Screen
        page.wait_for_selector('#case-opening-screen', state='visible')
        print("Case opening screen visible.")

        # Verify Navbar is visible on top of case opening screen
        # Check if header is visible and z-index is higher (visual check via screenshot)
        page.screenshot(path='verification_screenshots/1_case_screen_before_spin.png')

        # Start Roulette
        page.click('#open-case-button')
        print("Roulette started.")

        # Wait for animation (approx 7.5s + buffer)
        print("Waiting for animation...")
        page.wait_for_timeout(8000)

        # Verify State after spin
        # 1. Open button should be hidden
        open_btn_display = page.evaluate("document.getElementById('open-case-button').style.display")
        if open_btn_display == 'none':
            print("PASS: Open button is hidden.")
        else:
            print(f"FAIL: Open button is {open_btn_display}.")

        # 2. Result buttons should be visible
        result_btns_display = page.evaluate("document.getElementById('result-buttons').style.display")
        if result_btns_display != 'none' and result_btns_display != '':
             print(f"PASS: Result buttons display is {result_btns_display}.")
        else:
             print(f"FAIL: Result buttons display is {result_btns_display}.")

        # 3. Modal should NOT be visible (we removed it, but check ID just in case)
        modal_visible = page.is_visible('#winning-skin-modal')
        if not modal_visible:
            print("PASS: Modal is not visible.")
        else:
            print("FAIL: Modal IS visible.")

        # 4. Winner item should have class .winner
        winner_exists = page.query_selector('.roulette-item.winner')
        if winner_exists:
            print("PASS: Winner item highlighted.")
        else:
            print("FAIL: No winner item found.")

        page.screenshot(path='verification_screenshots/2_after_spin.png')

        # Test Keep Button
        page.click('#keep-skin-btn')
        print("Clicked Keep.")

        # Should reset screen
        page.wait_for_timeout(1000)

        # Verify Open button is back
        open_btn_display_after = page.evaluate("document.getElementById('open-case-button').style.display")
        if open_btn_display_after != 'none':
            print("PASS: Open button is visible again.")
        else:
             print("FAIL: Open button did not reappear.")

        page.screenshot(path='verification_screenshots/3_after_keep.png')

        browser.close()

if __name__ == "__main__":
    verify_case_opening()
