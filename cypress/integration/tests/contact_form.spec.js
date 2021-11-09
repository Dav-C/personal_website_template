describe('Contact form', () => {

    // It is recommended to include tests for the contact form POST requests here.
    // These tests will be dependant on your specific architecture and therefore are not included.


    it('types invalid values for the email and message inputs and clicks out of ' +
        'the fields, triggering error messages' , () => {
        cy.visit('http://localhost:3000/#contact');
        cy.wait(500);
        cy.get('input[name=email]').type('invalid email', {delay: 10});
        cy.get('textarea[name=message]').click();
        cy.contains('please enter a valid email').should('be.visible');
        cy.get('textarea[name=message]').type('short', {delay: 10});
        cy.get('input[name=email]').click();
        cy.contains('please enter a message').should('be.visible');

    });
    it('focuses the email input, enters no data, blurs the input and re-focuses the input, ' +
        'triggering error messages' , () => {
        cy.visit('http://localhost:3000/#contact');
        cy.wait(500);
        cy.get('input[name=email]').click();
        cy.get('textarea[name=message]').click();
        cy.contains('please enter a valid email').should('be.visible');
        cy.get('input[name=email]').click();
        cy.contains('please enter a valid email').should('be.visible');
    });
    it('focuses the message input, enters no data, blurs the input and re-focuses the input, ' +
        'triggering error messages' , () => {
        cy.visit('http://localhost:3000/#contact');
        cy.wait(500);
        cy.get('textarea[name=message]').click();
        cy.get('input[name=email]').click();
        cy.contains('please enter a message').should('be.visible');
        cy.get('textarea[name=message]').click();
        cy.contains('please enter a message').should('be.visible');

    });
    it('focuses the email input, blurs the input, then re-focuses the input and enters a valid email', () => {
        cy.visit('http://localhost:3000/#contact');
        cy.wait(500);
        cy.get('input[name=email]').click();
        cy.get('textarea[name=message]').click();
        cy.get('input[name=email]').click();
        cy.contains('please enter a valid email').should('be.visible');
        cy.get('input[name=email]').type('test@email.net', {delay: 10});
        cy.contains('please enter a valid email').should('not.exist');
    });
    it('focuses the message input, blurs the input, then re-focuses the input and enters a valid message', () => {
        cy.visit('http://localhost:3000/#contact');
        cy.wait(500);
        cy.get('textarea[name=message]').click();
        cy.get('input[name=email]').click();
        cy.get('textarea[name=message]').click();
        cy.contains('please enter a message').should('be.visible');
        cy.get('textarea[name=message]').type('a valid test message', {delay: 10});
        cy.contains('please enter a message').should('not.exist');
    });
});