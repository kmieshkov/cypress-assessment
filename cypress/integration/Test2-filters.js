/// <reference types="Cypress" />
/// <reference types="cypress-real-events/support" />

import ReactShoppingCartPage from '../support/POM/ReactShoppingCart'

describe('Filters Test Suite', function () {
	before(() => {
		cy.visit("https://react-shopping-cart-67954.firebaseapp.com/");
	})

	beforeEach(() => {
		// AJAX with products data
		cy.intercept({
			method: 'GET',
			url: 'https://react-shopping-cart-67954.firebaseio.com/products.json',
		}).as('getData');
	});

	it('Test#1 - Verify XS-size filter', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// verify XS size - should be equal 1
		rsc.getSizeXS().click();
		cy.wait('@getData')
		rsc.getProductContainers().should('have.length', rsc.xs, { timeout: 1000 });
		rsc.getSizeXS().click();
		cy.wait('@getData')
	});

	it('Test#2 - Verify S-size filter', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// verify S size - should be equal 2
		rsc.getSizeS().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.s, { timeout: 1000 });
		rsc.getSizeS().click();
		cy.wait('@getData');
	});

	it('Test#3 - Verify M-size filter', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// verify M size - should be equal 1
		rsc.getSizeM().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.m, { timeout: 1000 });
		rsc.getSizeM().click();
		cy.wait('@getData');
	});

	it('Test#4 - Verify ML-size filter', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// verify ML size - should be equal 2
		rsc.getSizeML().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.ml, { timeout: 1000 });
		rsc.getSizeML().click();
		cy.wait('@getData');
	});

	it('Test#5 - Verify L-size filter', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// verify L size - should be equal 10
		rsc.getSizeL().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.l, { timeout: 1000 });
		rsc.getSizeL().click();
		cy.wait('@getData');
	});

	it('Test#6 - Verify XL-size filter', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// verify XL size - should be equal 10
		rsc.getSizeXL().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.xl, { timeout: 1000 });
		rsc.getSizeXL().click();
		cy.wait('@getData');
	});

	it('Test#7 - Verify XXL-size filter', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// verify XXL size - should be equal 4
		rsc.getSizeXXL().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.xxl, { timeout: 1000 });
		rsc.getSizeXXL().click();
		cy.wait('@getData');
	});
})