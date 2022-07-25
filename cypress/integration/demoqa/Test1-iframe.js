/// <reference types="Cypress" />
/// <reference types="cypress-real-events/support" />
/// <reference types="cypress-iframe" />"

import iFrameDemoQA from '../../support/POM/iFrameDemoQA'

describe('GlobalSQA iFrame Test Suite', function () {
	beforeEach(() => {
		cy.fixture('demoqa').then(function (data) {
			this.data = data;
		});
		cy.visit(Cypress.env('demoqa'));
	})

	// convert hex to rgb()
	const hex2rgb = hex => {
		const arr = ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
		const rgb = "rgb(" + arr[0] + ", " + arr[1] + ", " + arr[2] + ")";
		return rgb;
	}

	it('Test#1 - Verify 1st iframe heading and color', function () {
		// Demo QA page objects
		const demoqa = new iFrameDemoQA();
		const frame1 = this.data.frame1;

		// 1st iframe
		cy.frameLoaded(demoqa.iframe1);
		cy.iframe(demoqa.iframe1).find(demoqa.heading).then(element => {
			// verify iframe heading
			expect(element.text()).to.be.equal(frame1.heading);
		});

		cy.iframe(demoqa.iframe1).find(demoqa.heading).parent().then(element => {
			// verify iframe color
			const rgb = hex2rgb(frame1["background-color"]);
			expect(element.css('background-color')).to.be.equal(rgb);
		});
	});

	it('Test#2 - Verify 2nd iframe size and overflow property', function () {
		// Demo QA page objects
		const demoqa = new iFrameDemoQA();
		const frame2 = this.data.frame2;

		// verify iframe size
		cy.get(demoqa.iframe2).invoke('attr', 'width').should('eq', frame2.width);
		cy.get(demoqa.iframe2).invoke('attr', 'height').should('eq', frame2.height);

		// 2nd iframe
		cy.frameLoaded(demoqa.iframe2);
		cy.iframe(demoqa.iframe2).then(el => {
			// verify overflow property
			expect(el.css('overflow')).to.be.equal(frame2.overflow);
		})
	});
})