/// <reference types="Cypress" />
/// <reference types="cypress-real-events/support" />

import ReactShoppingCartPage from '../support/POM/ReactShoppingCart'

describe('Reat Shopping Cart Test Suite', function () {
	beforeEach(() => {
		cy.visit("https://react-shopping-cart-67954.firebaseapp.com/");
		cy.fixture('example').then(function (data) {
			this.data = data;
		});
	})

	it('Test#1 - User can add and remove products from the cart', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// add items to the cart
		this.data.products.forEach(product => {
			rsc.getProductNames().each(($el, index, $list) => {
				if ($el.text() === product) {
					rsc.getAddToCart(index).click({ force: true });
				}
			})
		})
		rsc.getCartItems().should('have.length', 2);

		// remove items from the cart
		rsc.getCartItems().each(($el, index, $list) => {
			rsc.getRemoveFromCart().eq(0).click();
		})
		rsc.getCartItems().should('have.length', 0);
	});


	it('Test#2 - Verify total amount in the cart', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// add items to the cart
		this.data.products.forEach(product => {
			rsc.getProductNames().each(($el, index, $list) => {
				if ($el.text() === product) {
					rsc.getAddToCart(index).click({ force: true });
				}
			})
		})

		// add prices of products in the cart
		var sum = 0;
		rsc.getCartItems().each(($el, index, $list) => {
			rsc.getCartProductPrice(index).then(element => {
				const amount = parseFloat(element.text().replace(/[^\d.]/g, ''));
				sum += amount;
			})
		})

		// get subtotal from the cart
		rsc.getSubtotal().then((element) => {
			const subtotal = parseFloat(element.text().replace(/[^\d.]/g, ''));
			expect(subtotal).to.be.equal(sum);
		})
	});

	it('Test#3 - Verify qty of products in the cart', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// add items to the cart
		this.data.products.forEach(product => {
			rsc.getProductNames().each(($el, index, $list) => {
				if ($el.text() === product) {
					rsc.getAddToCart(index).click({ force: true });
				}
			})
		})

		const qty = this.data.products.length;

		rsc.getCartItems().should('have.length', qty);
		rsc.getCartQtyLabel().should('have.text', qty);
		rsc.getCloseCartBtn().click();
		rsc.getProductsInCart().should('have.text', qty);
	});

	it('Test#4 - User can change qty in the cart', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		// add items to the cart
		this.data.products.forEach(product => {
			rsc.getProductNames().each(($el, index, $list) => {
				if ($el.text() === product) {
					rsc.getAddToCart(index).click({ force: true });
				}
			})
		})

		// increase items qty in the cart
		rsc.getCartItems().each(($el, index, $list) => {
			rsc.getPlus(index).click();
			rsc.getCartItems().eq(index).contains('Quantity: ').then(el => {
				const qty = parseInt(el.text().split(':')[1].replace(/[^\d.]/g, ''));
				expect(qty).to.be.equal(2);
			})
		})

		// decrease items qty in the cart
		rsc.getCartItems().each(($el, index, $list) => {
			rsc.getMinus(index).click();
			rsc.getCartItems().eq(index).contains('Quantity: ').then(el => {
				const qty = parseInt(el.text().split(':')[1].replace(/[^\d.]/g, ''));
				expect(qty).to.be.equal(1);
			})
		})

		// item qty can't be less than 1
		rsc.getCartItems().each(($el, index, $list) => {
			rsc.getMinus(index).should('be.disabled');
		})

	});
})