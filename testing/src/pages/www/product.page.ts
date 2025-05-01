import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly productsLink: Locator;
    readonly searchBar: Locator;
    readonly searchButton: Locator;
    readonly addToCart: Locator;
    readonly addedProduct: Locator;
    readonly viewCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsLink = page.locator('//a[@href="/products"]');
        this.searchBar = page.locator('role=textbox[name="Search Product"]');
        this.searchButton = page.locator('//button[@id="submit_search"]');
        this.addToCart = page.locator('(//a[contains(@class,"add-to-cart")])[1]');
        this.addedProduct = page.locator('role=heading[name="Added!"]');
        this.viewCart = page.locator('role=link[name="View Cart"]');
    }

    async goToProductsPage(): Promise<void> {
        await this.productsLink.click();
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchBar.click();
        await this.searchBar.fill(productName);
        await this.searchButton.click();
    }

    async verifySearchResults(productName: string): Promise<void> {
        await expect(this.page).toHaveURL(/\/products\?search=Tshirt/);
    }

    async addFirstProductToCart(): Promise<void> {
        await this.addToCart.click();
        await expect(this.addedProduct).toBeVisible();
    }

    async viewCartProduct(): Promise<void> {
        await this.viewCart.click();
        await expect(this.page.locator('//td[@class="cart_quantity"]/button[text()="1"]')).toBeVisible();
    }
}