import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    private page: Page;
    public favouriteApps: Locator;

    constructor(page: Page) {
        this.page = page;
        // Locator for all favourite app tiles (adjust selector per your markup)
        this.favouriteApps = page.locator('//div[@id="favourite-apps"]/div');
    }

    /**
     * Iterates favourite apps, tries to remove via cross icon; prints name if not removable.
     */
    async handleFavouriteAppsWithKeyboard(): Promise<void> {
        const count = await this.favouriteApps.count();

        console.log(`Total favourite apps: ${count}`);

        // Assuming focus starts on the first app tile
        for (let i = 0; i < count; i++) {
            // Wait before interacting with each app for UI stability
            await this.page.waitForTimeout(2000);

            if (i > 0) {
                // Move focus right to the next app tile after first iteration
                await this.page.keyboard.press('ArrowRight');
                await this.page.waitForTimeout(2000); // Smooth focus transition
            }

            // Retrieve the visible app name inside the focused app tile
            let appName = '';
            try {
                appName = (await this.favouriteApps.nth(i).innerText()).trim();
            } catch {
                appName = `App #${i + 1}`; // Fallback naming
            }

            console.log(`Processing app: ${appName}`);

            // Simulate a long press of the Enter key (keydown + delay + keyup)
            await this.page.keyboard.down('Enter');
            await this.page.waitForTimeout(2000); // Hold duration for long press
            await this.page.keyboard.up('Enter');
            await this.page.waitForTimeout(2000); // Allow UI changes to take effect

            // Locate the cross (remove) icon on the currently focused app tile
            const crossIcon = this.favouriteApps
                .nth(i)
                .locator('//div[@data-testid="editmode-remove-app" and @data-focused="focused"]');

            const isCrossVisible = await crossIcon.isVisible();

            if (isCrossVisible) {
                console.log(`Remove icon visible for app: ${appName}`);

                // Navigate down to the cross icon and press Enter to remove app
                await this.page.keyboard.press('ArrowDown');
                await this.page.keyboard.press('Enter');

                // Verify the app tile disappears after removal
                await expect(this.favouriteApps.nth(i)).not.toBeVisible();

                console.log(`Removed app: ${appName}`);
            } else {
                console.log(`Cannot remove app (no remove icon): ${appName}`);
            }
        }

        console.log('Finished processing all favourite apps.');
    }



}
