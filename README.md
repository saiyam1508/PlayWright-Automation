
This project uses **Playwright** with **TypeScript** to automate end-to-end UI tests for [https://automationexercise.com](https://automationexercise.com). It covers user registration, product search, cart operations, and order checkout.

---

## ✅ Project Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Browsers (if not already)
```bash
npx playwright install
```

---

## 🛠️ Framework Chosen and Why

### ✅ **Playwright + TypeScript**
- **Playwright** provides powerful browser automation with built-in support for multiple browsers (Chromium, Firefox, WebKit).
- **TypeScript** offers static typing and IDE support.
- Playwright comes with a built-in **test runner**, **HTML reporting**, and rich debugging tools.

---

## 📋 Test Case Summary

| Test Case | File Location | Description |
|----------|----------------|-------------|
| ✅ User Registration | `tests/www/register.test.ts` | Registers a new user using Faker data |
| 🔍 Product Search & Add to Cart | `tests/www/product.test.ts` | Searches for products and adds to cart |
| 🧾 Checkout Flow | `tests/www/checkout.test.ts` | Handles address, review, and place order |
| 💳 Payment | `pages/www/checkout.page.ts` | Inputs card details and confirms the order |

> 🔄 Locators are separated into Page Object classes in `pages/www/` for maintainability.

---

## 🚀 How to Run Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/www/register.test.ts
```

### Generate & View HTML Report
```bash
npx playwright test
npx playwright show-report
```

---

## 📁 Folder Structure

```
/src
  └── /pages/www
        ├── register.page.ts
        ├── product.page.ts
        └── checkout.page.ts

/tests
  └── www/
        ├── register.test.ts
        ├── product.test.ts
        └── checkout.test.ts

/playwright.config.ts
/testData/testData.json
/README.md
```

---

## 🧰 Tools & Libraries

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Faker.js](https://fakerjs.dev/) – For generating fake user data
- [Node.js](https://nodejs.org/) – Runtime

---

## 📞 Support

For any issues or contributions, feel free to raise an [Issue](https://github.com/your-repo/issues) or submit a pull request.

---
