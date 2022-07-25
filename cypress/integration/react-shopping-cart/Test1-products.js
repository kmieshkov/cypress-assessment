/// <reference types="Cypress" />
/// <reference types="cypress-real-events/support" />

import ReactShoppingCartPage from '../../support/POM/ReactShoppingCart'

describe('React Shopping Cart - Products Test Suite', function () {
	before(() => {
		cy.visit(Cypress.env('shoppingCart'));
	})

	beforeEach(() => {
		// load data from the fixture
		cy.fixture('example').then(function (data) {
			this.data = data;
		});
	})

	it('Test#1 - Product change picture on mouse hover', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		var before = null;
		rsc.getProductContainers().eq(0).find('.sc-124al1g-1').then(el => {
			// get css property before :hover
			before = el.css('background-image');
		});

		// hover the element
		rsc.getProductContainers().eq(0).find('.sc-124al1g-1').realHover().then(elem => {
			//get css property after :hover
			const after = elem.css('background-image');
			expect(before).not.equal(after);
		})
	});

	it('Test#2 - Products with no free shipping', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		const noFreeShupping = this.data.noFreeShipping;
		rsc.getProductNames().each(($el, index, $list) => {
			// check if product has free shipping
			if (noFreeShupping.indexOf($el.text()) == -1) {
				rsc.getShippingLabel(index).should('be.visible');
			}
		})

	});

	it('Test#3 - Split prices matche full prices', function () {
		// React Shopping Cart page objects
		const rsc = new ReactShoppingCartPage();

		const noSplittedPrice = this.data.noSplittedPrice;

		var price = 0;
		cy.get(".sc-124al1g-2 > p").each(($el, index, $list) => {
			// verify that price has splitted option
			if (noSplittedPrice.indexOf($el.text()) == -1) {
				// resolve promise and find full price
				rsc.getProductPrice(index).then(elem => {
					price = parseFloat(elem[0].innerText.replace(/[^\d.]/g, ''));
				})

				//resolve promise and find splitted price
				rsc.getSplitProductPrice(index).then(item => {
					const multiplier = parseFloat((item[0].innerText.split('x')[0]).replace(/[^\d.]/g, ''));
					const splitted = parseFloat((item[0].innerText.split('x')[1]).replace(/[^\d.]/g, ''));
					const result = multiplier * splitted;

					// assertion - if difference less than $0.05 -> PASS
					expect(Math.abs(price - result)).to.be.lessThan(0.05);
				})
			}
		})
	});
})