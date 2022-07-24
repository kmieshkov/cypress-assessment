/// <reference types="Cypress" />

import ReactShoppingCartPage from '../support/POM/ReactShoppingCart'

describe('Reat Shopping Cart Test Suite', function () {

	it('Test#1 - Verify that user can sort items by size', function () {
		cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');

		// AJAX with products data
		cy.intercept({
			method: 'GET',
			url: 'https://react-shopping-cart-67954.firebaseio.com/products.json',
		}).as('getData');

		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// verify XS size - should be equal 1
		rsc.getXSSize().click();
		cy.wait('@getData')
		rsc.getProductContainers().should('have.length', rsc.xs);
		rsc.getXSSize().click();
		cy.wait('@getData')


		// verify S size - should be equal 2
		rsc.getSSize().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.s);
		rsc.getSSize().click();
		cy.wait('@getData');


		// // verify M size - should be equal 1
		rsc.getMSize().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.m);
		rsc.getMSize().click();
		cy.wait('@getData');

		// // verify ML size - should be equal 2
		rsc.getMLSize().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.ml);
		rsc.getMLSize().click();
		cy.wait('@getData');

		// verify L size - should be equal 10
		rsc.getLSize().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.l);
		rsc.getLSize().click();
		cy.wait('@getData');

		// verify XL size - should be equal 10
		rsc.getXLSize().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.xl);
		rsc.getXLSize().click();
		cy.wait('@getData');

		// verify XXL size - should be equal 4
		rsc.getXXLSize().click();
		cy.wait('@getData');
		rsc.getProductContainers().should('have.length', rsc.xxl);
		rsc.getXXLSize().click();
		cy.wait('@getData');
	});
})