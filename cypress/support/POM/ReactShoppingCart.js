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
const cartBtn = "//div[@title='Products in cart quantity']/parent::div/parent::button";
const productsInCart = "//div[@title='Products in cart quantity']";
const github = "a[href*=github]";
const checkoutBtn = "//button[text()='Checkout']";
const subtotal = "//p[text()='SUBTOTAL']/following-sibling::div/p[1]";
const splitSubtotal = "//p[text()='SUBTOTAL']/following-sibling::div/p[2]";
const productContainers = ".sc-124al1g-2";
const productNames = ".sc-124al1g-2 > p";
const addToCart = "Add to cart";
const shippingLabel = "Free shipping";
const plus = "//button[text()='+']";
const minus = "//button[text()='-']";
const cartProductPrice = ".sc-11uohgb-4 p";
const cartItems = ".sc-11uohgb-0";
const removeFromCart = "button[title='remove product from cart']";
const productPrices = ".sc-124al1g-6";
const splitProductPrices = ".sc-124al1g-7";
const cartQtyLabel = ".sc-1h98xa9-3";
const closeCartBtn = "//span[text()='X']";
const emptyCart = ".sc-7th5t8-1";

class ReactShoppingCart {
    constructor(){
		this.xs = 1;
		this.s = 2;
		this.m = 1;
		this.ml = 2;
		this.l = 10;
		this.xl = 10;
		this.xxl = 4;
    }
	getGitHub() {
		return cy.get(github);
	}

	getSizeXS() {
		return cy.get(xsSize).parent(parentSize);
	}

	getSizeS() {
		return cy.get(sSize).parent(parentSize);
	}

	getSizeM() {
		return cy.get(mSize).parent(parentSize);
	}

	getSizeML() {
		return cy.get(mlSize).parent(parentSize);
	}

	getSizeL() {
		return cy.get(lSize).parent(parentSize);
	}

	getSizeXL() {
		return cy.get(xlSize).parent(parentSize);
	}

	getSizeXXL() {
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

	getProductNames() {
		return cy.get(productNames);
	}

	getAddToCart(index) {
		return this.getProductContainers().eq(index).contains(addToCart);
	}

	getShippingLabel(index) {
		return this.getProductContainers().eq(index).contains(shippingLabel);
	}

	getCartItems() {
		return cy.get(cartItems);
	}

	getMinus(index) {
		return cy.xpath(minus).eq(index);
	}

	getPlus(index) {
		return cy.xpath(plus).eq(index);
	}

	getCartProductPrice(index) {
		return cy.get(cartProductPrice).eq(index);
	}

	getRemoveFromCart() {
		return cy.get(removeFromCart);
	}

	getProductPrice(index) {
		return cy.get(productPrices).eq(index);
	}

	getSplitProductPrice(index) {
		return this.getProductContainers().eq(index).find(splitProductPrices);
	}

	getCartQtyLabel() {
		return cy.get(cartQtyLabel);
	}

	getCloseCartBtn() {
		return cy.xpath(closeCartBtn);
	}

	getEmptyCart() {
		return cy.get(emptyCart);
	}
}

export default ReactShoppingCart;