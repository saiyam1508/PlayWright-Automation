
## Project Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/saiyam1508/PlayWright-Automation.git
cd your-repo
```

### 2. Install Dependencies
npm install

### 3. Install Playwright
npx playwright install

---


## Test Case Summary


Add app to favourites
Located in: testing/src/functional/www/test.spec.ts
Description: Automates adding an app to favourites using keyboard navigation on Titanos.tv.

Full search and category navigation flow
Located in: testing/src/functional/www/test.spec.ts
Description: Performs a full search and navigates through category tabs, verifying expected UI elements and search counts.

Favourite apps management from Home Page
Located in: pages/www/home.page.ts
Description: Iterates the favourite apps list on the home page, performs long press keyboard actions to detect and remove removable apps or logs apps that cannot be removed.

Delete favourite apps from Home Screen
Located in: pages/www/home.page.ts (or the relevant test file)
Description: Simulates keyboard navigation to the Home Screen, performs long press on favourite apps to remove them, handling UI errors and validation gracefully.


All test locators are structured using Page Object Model under `pages/www/`.

---

## How to Run Tests

## Prerequisites
Node.js installed (version >= 14 recommended)
VS Code with Playwright Runner and Playwright Test Explorer extensions installed.

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

PLAYWRIGHTTEST/
│
├── playwright-report/          # Test run HTML reports
├── test-results/               # Output of test/runs
│
├── testing/
│   └── src/
│       └── functional/
│           ├── TestData/             
│           └── www/
│               └── test.spec.ts       # Test files
│
├── pages/
│   └── www/
│       ├── apps.page.ts
│       ├── channel.page.ts
│       ├── home.page.ts
│       └── search.page.ts
│
├── playwright.config.js/ts      # Playwright config for project
├── package.json                 # Node.js dependencies
├── README.md                    # Project instructions and info


---

## Tools and Libraries

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

