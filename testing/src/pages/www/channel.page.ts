import { Page, expect } from '@playwright/test';

export class ChannelPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate from current focus to the Channel page using keyboard arrows.
     * Then open it by pressing Enter.
     */
    async navigateToChannelPage(): Promise<void> {
        // moving focus up twice
        await this.page.keyboard.press('ArrowUp');
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('ArrowUp');
        await this.page.waitForTimeout(1000);

        // Move right twice to reach the category selection
        await this.page.keyboard.press('ArrowRight');
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('ArrowRight');
        await this.page.waitForTimeout(1000);

        // Press Enter to open the category page
        await this.page.keyboard.press('Enter');
        // Wait for the popup event before pressing Enter (open new tab)
        const popupPromise = this.page.waitForEvent('popup');

        // Press Enter to open the selected item
        await this.page.keyboard.press('Enter');

        // Wait for the popup page to be available
        const popupPage = await popupPromise;

        // Wait for the new tab's URL to be the expected channels one
        await popupPage.waitForURL('**/channels', { timeout: 10000 });

        // Assert URL contains '/channels'
        await expect(popupPage).toHaveURL(/\/channels/);

        //log the validated channel URL on console
        console.log(`Navigated to channels page`);
    }

    /**
     * Waits for popup after opening, performs interactions and checks visibility of channel text and elements
     */
    async verifyPlayerOverlayAndChannels(popup: Page): Promise<void> {
        // Click on the player overlay control in the popup page
        await popup.getByTestId('player-overlay').click();

        // Verify the "CNNi" text is visible
        await expect(popup.getByText('CNNi').nth(1)).toBeVisible();

        // Verify channel switcher containing "CNNiCNNiNewsCH" is visible
        await expect(popup.getByTestId('channels-switcher')
            .locator('div')
            .filter({ hasText: 'CNNiCNNiNewsCH' })
            .first()).toBeVisible();
    }

}