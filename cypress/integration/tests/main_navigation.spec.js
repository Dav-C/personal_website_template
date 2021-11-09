describe('Test the main page navigation', () => {
    it('navigate to the intro section using a nav button and return ' +
        'to the top of the page with the page with the to top button', () => {
        cy.visit('http://localhost:3000');
        cy.contains('INTRO').click();
        cy.url().should('include', '/#intro');
        cy.wait(500);
        cy.contains('to top').click();
        cy.url().should('not.include', '/#intro');
    });
    it('navigate to the projects section using a nav button and return' +
        'to the top of the page with the page with the to top button', () => {
        cy.visit('http://localhost:3000');
        cy.contains('PROJECTS').click();
        cy.url().should('include', '/#projects');
        cy.wait(500);
        cy.contains('to top').click();
        cy.url().should('not.include', '/#projects');
    });
    it('navigate to the contact section using a nav button and return ' +
        'to the top of the page with the page with the to top button', () => {
        cy.visit('http://localhost:3000');
        cy.contains('CONTACT').click();
        cy.url().should('include', '/#contact');
        cy.wait(500);
        cy.contains('to top').click();
        cy.url().should('not.include', '/#contact');
    });
    it('navigate to the intro section using a nav button and continue down the ' +
        'page using the small nav buttons in the intro and projects sections', () => {
        cy.visit('http://localhost:3000');
        cy.contains('INTRO').click();
        cy.url().should('include', '/#intro');
        cy.wait(1500);
        cy.get('[data-cy=next-section-projects]').click();
        cy.wait(1500);
        cy.url().should('include', '/#projects');
        cy.get('[data-cy=next-section-contact]').click();
        cy.wait(2000);
        cy.url().should('include', '/#contact');
    });
});
