import { faker } from '@faker-js/faker';
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    private page: Page;

    // Locators
    private CheckoutButton: Locator;
    private reviewOrderHeading: Locator;
    private placeOrderButton: Locator;
    private payConfirmButton: Locator;
    private orderSuccessText: Locator;
    private downloadInvoiceLink: Locator;

    //Card
    private nameOnCard: Locator;
    private cardNumber: Locator;
    private expiryMonth: Locator;
    private expiryYear: Locator;
    private cvv: Locator;

    constructor(page: Page) {
        this.page = page;
        this.CheckoutButton = page.locator('text=Proceed To Checkout');
        this.reviewOrderHeading = page.locator('h2:has-text("Review Your Order")');
        this.placeOrderButton = page.locator('a:has-text("Place Order")');
        this.payConfirmButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.orderSuccessText = page.getByText('Order Placed! Congratulations');
        this.downloadInvoiceLink = page.getByRole('link', { name: 'Download Invoice' });

        //Card details
        this.nameOnCard = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.expiryMonth = page.locator('input[name="expiry_month"]');
        this.expiryYear = page.locator('input[name="expiry_year"]');
        this.cvv = page.locator('input[name="cvc"]');
    }

    async checkout() {
        await this.CheckoutButton.click();
        await expect(this.page).toHaveURL(/\/checkout/);
        // await expect(this.addressDetailsHeading).toBeVisible();
        await expect(this.reviewOrderHeading).toBeVisible();
        await this.placeOrderButton.click();
        console.log('Processing checkout..');

    }

    async fillCardDetails(): Promise<void> {
        const randomName = faker.name.firstName(); // Random full name
        const randomCardNumber = faker.finance.creditCardNumber(); // Random credit card number
        const randomCVV = faker.finance.creditCardCVV(); // Random CVV
        const randomExpiryMonth = faker.date.future().getMonth() + 1; // Random expiry month (1-12)
        const randomExpiryYear = faker.date.future().getFullYear(); // Random expiry year

        await this.nameOnCard.fill(randomName);
        await this.cardNumber.fill(randomCardNumber);
        await this.cvv.click();
        await this.cvv.fill(randomCVV);
        await this.expiryMonth.fill(randomExpiryMonth.toString());
        await this.expiryYear.fill(randomExpiryYear.toString());
        console.log('Card details filled successfully!');
    }

    async confirmOrderAndVerify(): Promise<void> {
        await this.payConfirmButton.click();
        await expect(this.orderSuccessText).toBeVisible();
        await expect(this.downloadInvoiceLink).toBeVisible();
        console.log('Order placed sucessfully !!');
    }


}
