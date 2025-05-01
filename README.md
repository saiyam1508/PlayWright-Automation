
# Playwright Automation with TypeScript

This project uses **Playwright** with **TypeScript** to automate end-to-end UI tests for [https://automationexercise.com](https://automationexercise.com). It covers user registration, product search, cart operations, and order checkout.

---

## Project Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/saiyam1508/PlayWright-Automation.git
cd your-repo
```

### 2. Install Dependencies
npm install
```

### 3. Install Playwright
npx playwright install
```

---

## Framework Chosen and Why

**Playwright + TypeScript**  
- Playwright provides reliable browser automation with support for Chromium, Firefox, and WebKit.  
- TypeScript enables static typing and better tooling support.  
- Built-in test runner, HTML reporting, and debugging make it ideal for E2E testing.

---

## Test Case Summary

| Test Case                      | File Location                   | Description                                     |
|------------------------------- |---------------------------------|-------------------------------------------------|
| User Registration              | `tests/www/register.page.ts`    | Registers a new user using Faker data            |
| Product Search & Add to Cart   | `tests/www/product.page.ts`     | Searches for a product and adds it to cart      |
| Checkout Flow                  | `tests/www/checkout.page.ts`    | Fills address, reviews order, and places it     |

All test locators are structured using Page Object Model under `pages/www/`.

---

## How to Run Tests

### Run All Tests
```bash
npx playwright test
```

### Generate and View HTML Report
```bash
npx playwright test
npx playwright show-report
```

---

## Folder Structure

```
/src
  └── /pages/www
        ├── register.page.ts
        ├── product.page.ts
        └── checkout.page.ts

/tests
  └── www/
        ├── test.spec.ts

/playwright.config.ts
/TestData/testData.json
/README.md
```

---

## Tools and Libraries

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Faker.js](https://fakerjs.dev/)
- [Node.js](https://nodejs.org/)

---

## Report Path Screenshot
![alt text](image.png)