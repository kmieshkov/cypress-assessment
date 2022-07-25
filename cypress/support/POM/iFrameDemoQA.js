/// <reference types="Cypress" />"
/// <reference types="cypress-xpath" />

const iframe1 = "#frame1";
const iframe2 = "#frame2";
const heading = "#sampleHeading";

class iFrameDemoQA {
	constructor() {
		this.iframe1 = iframe1;
		this.iframe2 = iframe2;
		this.heading = heading;
	}
}

export default iFrameDemoQA;