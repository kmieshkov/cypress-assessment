# About

Testing framework  on JS with Cypress

Project covers functionality of 2 web-app:
1. <a href="https://react-shopping-cart-67954.firebaseapp.com/">React Shopping Cart</a>
2. <a href="https://demoqa.com/frames">DemoQA</a>

# Dependencies used
**cypress** testing framework

**cypress-xpath** to locating elements with *xpath*

**cypress-real-events** to simulate *.hover()* function

**cypress-iframe** to work with iframes

**mocha**, **mochawesome** and **mochawesome-merge** for reporting needs

# Installation

To install and configure project:
```
git clone https://github.com/kmieshkov/cypress-assessment.git
cd cypress-assessment
npm install
```

This project has custom scripts
```npm run test``` to execute test run in headless mode (by default)

```npm run headed``` to execute test run in headed

```npm run headed``` to execute test run in headed

```npm run report```  to execute test run in headedless mode with reports created in the reports/output.html file (<a href="https://github.com/kmieshkov/cypress-assessment/blob/main/cypress/reports/output.html">example</a>). **This command includes mochawesome repor tool, merge reports from all the test suites into one file and clean those temorary files** 


# Functionality

React Shopping Cart include three main Test Suites that focused on:
1. Products Test Suite
   * Product should change image on mouse hover
   * Products with free shipping should have "Free shipping" labels, and otherwise - products with no free shipping option should not have "Free shipping" labels
   * Products with split payments should have the same price for both, one-payment and split price (a delta of $0.05 is OK)
2. Filters Test Suite
   * All products could be filtered by size (XS, S, M, ML, L, XL, XXL)
   * Qty of filtered products should match displayed qty of products
3. Cart Test Suite
   * Users are able to arr and remove products from the cart
   * Sum of all products in the cart should correspond subtotal amount in the cart
   * Qty of added products in the cart should match label cart qty (for both, open and closed cart), and qty products in the cart
   * Users are able to change qty of products in the cart
   * Product qty in the cart cannot be negative or 0

DemoQA include one Test Suites with 2 test cases that focused on **iframes**:
1. Verify background color and heading in the frame
2. Verify size and css property of the iframe