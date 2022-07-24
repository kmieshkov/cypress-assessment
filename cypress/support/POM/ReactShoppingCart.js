/// <reference types="Cypress" />"
/// <reference types="cypress-xpath" />

const xsSize = "input[type=checkbox][value='XS']";
const sSize = "input[type=checkbox][value='S']";
const mSize = "input[type=checkbox][value='M']";
const mlSize = "input[type=checkbox][value='ML']";
const lSize = "input[type=checkbox][value='L']";
const xlSize = "input[type=checkbox][value='XL']";
const xxlSize = "input[type=checkbox][value='XXL']";
const parentSize = "label";
const xs = 1;
const s = 2;
const m = 1;
const ml = 2;
const l = 10;
const xl = 10;
const xxl = 4;
const cartBtn = "//div[@title='Products in cart quantity']/parent::div/parent::button";
const productsInCart = "//div[@title='Products in cart quantity']";
const github = "a[href*=github]";
const checkoutBtn = "//button[text()='Checkout']";
const subtotal = "//p[text()='SUBTOTAL']/following-sibling::div/p[1]";
const splitSubtotal = "//p[text()='SUBTOTAL']/following-sibling::div/p[2]";
const productContainers = ".sc-124al1g-2";
const addToCart = "Add to cart";
const shippingLabel = "//div[text()='Free shipping']";
const plus = "//button[text()='-']";
const minus = "//button[text()='+']";
const cartProductPrice = ".sc-11uohgb-4 p";
const cartItems = ".sc-11uohgb-0";

class ReactShoppingCart {
    constructor(){
		this.xs = xs;
		this.s = s;
		this.m = m;
		this.ml = ml;
		this.l = l;
		this.xl = xl;
		this.xxl = xxl;
    }
	getGitHub() {
		return cy.get(github);
	}

	getXSSize() {
		return cy.get(xsSize).parent(parentSize);
	}

	getSSize() {
		return cy.get(sSize).parent(parentSize);
	}

	getMSize() {
		return cy.get(mSize).parent(parentSize);
	}

	getMLSize() {
		return cy.get(mlSize).parent(parentSize);
	}

	getLSize() {
		return cy.get(lSize).parent(parentSize);
	}

	getXLSize() {
		return cy.get(xlSize).parent(parentSize);
	}

	getXXLSize() {
		return cy.get(xxlSize).parent(parentSize);
	}

	getCartBtn() {
		return cy.xpath(cartBtn);
	}

	getProductsInCart() {
		return cy.xpath(productsInCart);
	}

	getCheckoutBtn() {
		return cy.xpath(checkoutBtn);
	}

	getSubtotal() {
		return cy.xpath(subtotal);
	}

	getSplitSubtotal() {
		return cy.xpath(splitSubtotal);
	}

	getProductContainers() {
		return cy.get(productContainers);
	}

	getAddToCart(index) {
		return this.getProductContainers().eq(index).find(addToCart).eq(index);
	}

	getShippingLabel(index) {
		return this.getProductContainers().eq(index).find(shippingLabel).eq(index);
	}

	getCartItems() {
		return cy.get(cartItems);
	}

	getMinus() {
		return cy.xpath(minus);
	}

	getPlus() {
		return cy.xpath(plus);
	}

	getCartProductPrice() {
		return cy.get(cartProductPrice);
	}
}

export default ReactShoppingCart;