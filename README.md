# Playwright Automation Framework for Saucedemo

I chosen typescript language automation framework built using Playwright, a modern and reliable end-to-end testing library for automating web applications.
## Features

- **Page Object Model (POM)**: The framework follows the Page Object Model design pattern, which promotes code reusability, maintainability, and separation of concerns.
- **Parallel Test Execution**: Tests can be executed in parallel across multiple browsers and devices, reducing overall execution time.
  
- **Reporting**: The framework generates detailed HTML reports  making it easier to analyze and debug issues.
- **Cross-Browser Testing**: Tests can be run across multiple browsers 
  - Chrome
  - Firefox
  - Safari(Webkit)

## Getting Started

### Prerequisites

- Node.js (v20.9.0)

### Project Structure
```
├── pages/                            # Page Object Model classes
│   ├── login.ts
│   └── ...
├── tests/                            # Test files
│   ├── saucedemo
│     └── addProductToCart.spec.ts
├── playwright-html-report/            # Generated test reports
├── playwright.config.ts               # Playwright configuration file
├── package.json
```
### Installation

1. Clone the repository:
2. `npm install` 

### Running Tests with ui 

```
npx playwright test --ui
```


### Running Tests headless

```
npx playwright test
```

### Running Tests headless

```
 npx playwright show-report

```

### Test Results

