# About

Testing framework  on JS with Cypress

Project covers functionality of 2 web-app:
1. <a href="https://react-shopping-cart-67954.firebaseapp.com/">React Shopping Cart</a>
2. <a href="https://demoqa.com/frames">DemoQA</a>

### Report stored in ```./cypress/reports/output.html```, live example located <a href="https://kmieshkov.github.io/">here</a>

### Functionality covered:
* Page Objects model framework for tests execution
* Custom commands in the support folder and additional dependencies to enhance the functionality of the testing framework
* Merging reports for every test suite for one report file **output.html**
* Work with fixtures to configure data validation
* Configuration of **cypress.config.js** file to establish env variables, and enhance reporting capability
* Custom scripts to delete temp files and custom functions to use in the test suites (refactor **hex** color to **rgb** format, **regex** to parse prices)

### Project structure:
<img src="https://github.com/kmieshkov/cypress-assessment/blob/main/cypress/examples/project-structure.jpg" width="400px"/>

# Dependencies used
**cypress** testing framework

**cypress-xpath** to locating elements with *xpath*

**cypress-real-events** to simulate *.hover()* function

**cypress-iframe** to work with iframes

**mocha**, **mochawesome** and **mochawesome-merge** for reporting needs

# Installation and Execution

To install and configure project:
```
git clone https://github.com/kmieshkov/cypress-assessment.git
cd cypress-assessment
npm install
```

<h3>Execution can be done thru custom scripts</h3>

```npm run report```  to execute test run in headedless mode with reports created in the reports/output.html file (<a href="https://github.com/kmieshkov/cypress-assessment/blob/main/cypress/reports/output.html">raw</a> and <a href="https://kmieshkov.github.io/">web-page</a>). **This command includes mochawesome repor tool, merge reports from all the test suites into one file and clean those temorary files** 

```npm run test``` to execute test run in headless mode (by default)

```npm run headed``` to execute test run in headed mode

<h4>Example:<h4>
<img src="https://github.com/kmieshkov/cypress-assessment/blob/main/cypress/examples/npm-run-report.gif" width="500px"/>

<h3>Execution could be done thru Cypress Gui</h3>

```./node_modules/.bin/cypress open``` to open *Cypress GUI* and perform text execution from there

<h4>Example:<h4>
<img src="https://github.com/kmieshkov/cypress-assessment/blob/main/cypress/examples/cypress-gui.gif" width="500px"/>

# Test cases descriprion

**React Shopping Cart include three main Test Suites that focused on:**
1. Products Test Suite
   * Product should change image on mouse hover
   * Products with free shipping should have "Free shipping" labels, and otherwise - products with no free shipping option should not have "Free shipping" labels
   * Products with split payments should have the same price for both, one-payment and split price (a delta of $0.05 is OK)
2. Filters Test Suite
   * All products could be filtered by size (XS, S, M, ML, L, XL, XXL)
   * Qty of filtered products should match displayed qty of products
3. Cart Test Suite
   * Users are able to add and remove products from the cart
   * Sum of all product prices in the cart should correspond subtotal amount in the cart
   * Qty of added products in the cart should match label cart qty (for both, open and closed cart), and qty products in the cart
   * Users are able to change qty of products in the cart
   * If qty in the cart is equal 1, the minus button is disabled (user cannot set qty less than 1)


**DemoQA include one Test Suites with 2 test cases that focused on *iframes***:
1. Verify background color and heading in the frame
2. Verify size and css property of the iframe
