import { Page, Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import * as fs from 'fs';


export class register {
    readonly page: Page;
    readonly signup: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly signupButton: Locator;
    readonly gender: Locator;
    readonly password: Locator;
    readonly day: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly newsletter: Locator;
    readonly offers: Locator;
    readonly createAccountButton: Locator;
    readonly continueLink: Locator;
    readonly logoutLink: Locator;

    //random faker data
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address: Locator;
    readonly state: Locator;
    readonly cityZip: Locator;
    readonly zipcode: Locator;
    readonly mobile: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signup = page.getByRole('link', { name: ' Signup / Login' });
        this.name = page.getByRole('textbox', { name: 'Name' });
        this.email = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupButton = page.getByRole('button', { name: 'Signup' });
        this.gender = page.getByRole('radio', { name: 'Mr.' });
        this.password = page.getByRole('textbox', { name: 'Password *' });
        this.day = page.locator('#days');
        this.month = page.locator('#months');
        this.year = page.locator('#years');
        this.newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.offers = page.getByRole('checkbox', { name: 'Receive special offers from' });
        this.firstName = page.getByRole('textbox', { name: 'First name *' });
        this.lastName = page.getByRole('textbox', { name: 'Last name *' });
        this.company = page.getByRole('textbox', { name: 'Company', exact: true });
        this.address = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.state = page.getByRole('textbox', { name: 'State *' });
        this.cityZip = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.zipcode = page.locator('#zipcode');
        this.mobile = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.continueLink = page.getByRole('link', { name: 'Continue' });
        this.logoutLink = page.getByRole('link', { name: ' Logout' });
    }

    async registerRandomUser(): Promise<void> {
        const randomFirstName = faker.name.firstName();
        const randomLastName = faker.name.lastName();
        const randomEmail = faker.internet.email();
        const randomCompany = faker.company.name();
        const randomAddress = faker.location.streetAddress();
        const randomState = faker.location.state();
        const randomCity = faker.location.city();
        const randomZip = faker.location.zipCode('######');
        const randomMobile = '9' + faker.string.numeric(9);
        const randomPassword = faker.internet.password({ length: 10 });

        // Random date of birth
        const randomDay = faker.number.int({ min: 1, max: 28 }).toString();
        const randomMonth = faker.number.int({ min: 1, max: 12 }).toString();
        const randomYear = faker.number.int({ min: 1980, max: 2005 }).toString();

        await this.page.goto('https://automationexercise.com/');
        await this.signup.click();
        await this.name.fill(randomFirstName);
        await this.email.fill(randomEmail);
        await this.signupButton.click();
        await this.gender.check();
        await this.password.fill(randomPassword);
        await this.day.selectOption(randomDay);
        await this.month.selectOption(randomMonth);
        await this.year.selectOption(randomYear);
        await this.newsletter.check();
        await this.offers.check();
        await this.firstName.fill(randomFirstName);
        await this.lastName.fill(randomLastName);
        await this.company.fill(randomCompany);
        await this.address.fill(randomAddress);
        await this.state.fill(randomState);
        await this.cityZip.fill(randomCity);
        await this.zipcode.fill(randomZip);
        await this.mobile.fill(randomMobile);
        await this.createAccountButton.click();
        await this.continueLink.click();
        await expect(this.logoutLink).toBeVisible();

        const user = {
            name: `${randomFirstName} ${randomLastName}`,
            email: randomEmail,
            password: randomPassword,
            mobile: randomMobile,
            company: randomCompany,
            address: randomAddress,
            state: randomState,
            city: randomCity,
            zip: randomZip,
            dateOfBirth: `${randomDay}-${randomMonth}-${randomYear}`
        };

        const filePath = 'C:/PlaywrightTest/testing/src/functional/TestData/testData.json';
        fs.writeFileSync(filePath, JSON.stringify(user, null, 2));
    }

}