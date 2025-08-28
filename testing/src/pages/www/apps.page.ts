import { Page, Locator, expect } from '@playwright/test';

export class AppsPage {
    private page: Page;
    public appList: Locator;
    public redBullApp: Locator;
    public addToFav: Locator;

    constructor(page: Page) {
        this.page = page;
        // Locator for the main Apps heading container to ensure correct page section
        this.appList = page.locator('//div[@aria-label="Apps"]');
        // Locator for the specific "Red Bull TV" app
        this.redBullApp = page.locator('//div[@data-testid="Red Bull TV"]');
        // Locator for the "Add to Favourites" button text
        this.addToFav = page.locator('//button[contains(., "Add to Favourites")]');
    }

    /**
     * Navigates via keyboard to the Apps menu, selects an app by index,
     * and toggles it in favourites (adds or removes).
     * @param index The horizontal index to navigate to the desired app
     */
    async addAppToFavouritesByKeyboard(index: number): Promise<void> {
        // Move focus two times up to reach the top navigation bar
        for (let i = 0; i < 2; i++) {
            await this.page.keyboard.press('ArrowUp');
            await this.page.waitForTimeout(1000);
        }

        // Navigate right 5 times to highlight the "Apps" tab in the menu
        for (let i = 0; i < 5; i++) {
            await this.page.keyboard.press('ArrowRight');
            await this.page.waitForTimeout(1000);
        }

        // Press Enter to open the Apps section
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);

        // Move focus down twice to get into the app list area
        for (let i = 0; i < 2; i++) {
            await this.page.keyboard.press('ArrowDown');
            await this.page.waitForTimeout(4000);
        }

        // Navigate right by the index to highlight the desired app (e.g Red Bull App)
        for (let i = 0; i < index; i++) {
            await this.page.keyboard.press('ArrowRight');
            await this.page.waitForTimeout(1000);
        }

        // Focus the Red Bull TV app element (adjust if targeting dynamic app)
        await this.redBullApp.first().focus();

        // Press Enter to either open app details
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);

        // Check if the "Remove from Favourites" button is visible (indicating app is already favourite) then remove the app from favourites
        if (await this.page.locator('button:has-text("Remove from Favourites")').isVisible()) {
            // Press Enter to remove from favourites
            await this.page.keyboard.press('Enter');
            await this.page.waitForTimeout(2000);
        } else {
            // Otherwise, press Enter to add to favourites
            await this.page.keyboard.press('Enter');
            await this.page.waitForTimeout(2000);
        }
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector('//div[@data-testid="Red Bull TV"]', { state: 'visible', timeout: 10000 });

    }
}
