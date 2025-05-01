import { test, expect } from '@playwright/test';
import { register } from '../../pages/www/register.page';
import { ProductPage } from '../../pages/www/product.page';
import { CheckoutPage } from '../../pages/www/checkout.page';

test('Order', async ({ page }) => {

    //User Registration
    const registerPage = new register(page);
    await registerPage.registerRandomUser();
    console.log('User registered sucessfully');

    //Add product to cart
    const productPage = new ProductPage(page);
    await productPage.goToProductsPage();
    await productPage.searchProduct('Tshirt');
    await productPage.verifySearchResults('Tshirt');
    await productPage.addFirstProductToCart();
    await productPage.viewCartProduct();
    console.log('Product added to cart and verified sucessdully');

    //Checkout
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.checkout();
    await checkoutPage.fillCardDetails();
    console.log('Order in process');

    //Order Confirmed
    await checkoutPage.confirmOrderAndVerify();
    console.log('Order Confirmed');
});
