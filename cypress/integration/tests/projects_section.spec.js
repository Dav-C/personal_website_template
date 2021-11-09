describe('Test the projects section', () => {
    it('open the projects section, open the first project and check that a modal opens', () => {
        cy.visit('http://localhost:3000/#projects');
        cy.get('[data-cy=projects-modal-content-box]').should('not.exist');
        cy.get('[data-cy=project1-button]').click();
        cy.get('[data-cy=projects-modal-content-box]').should('be.visible');
    });
    it('open the first project modal, open the first image and then close the image ' +
        'by clicking on the image', () => {
       cy.visit('http://localhost:3000/#projects');
       cy.get('[data-cy=project1-button]').click();
       cy.get('[data-cy=large-image-viewer]').should('not.exist');
       cy.get('[data-cy=project-image-thumbnail-1]').click();
       cy.get('[data-cy=large-image-viewer]').should('be.visible');
       cy.get('[data-cy=large-image]').click();
       cy.get('[data-cy=large-image-viewer]').should('not.exist');
    });
    it('open the first project modal, open the first image and then close the image ' +
        'by clicking the arrow button', () => {
       cy.visit('http://localhost:3000/#projects');
       cy.get('[data-cy=project1-button]').click();
       cy.get('[data-cy=large-image-viewer]').should('not.exist');
       cy.get('[data-cy=project-image-thumbnail-1]').click();
       cy.get('[data-cy=large-image-viewer]').should('be.visible');
       cy.get('[data-cy=image-close-button]').click();
       cy.get('[data-cy=large-image-viewer]').should('not.exist');
    });
    it('open the first project modal, click on the code and try it buttons, then close the modal', () => {
       cy.visit('http://localhost:3000/#projects',  {
            onBeforeLoad (win) {
              cy.stub(win, 'open').as('open');
            }
        });
       cy.get('[data-cy=projects-modal-content-box]').should('not.exist');
       cy.get('[data-cy=project1-button]').click();
       cy.get('[data-cy=projects-modal-content-box]').should('be.visible');
       cy.get('[data-cy=project-code-button]').click();
       cy.get('@open').should('have.been.calledOnce');
       cy.get('[data-cy=project-tryit-button]').click();
       cy.get('@open').should('have.been.calledTwice');
       cy.get('[data-cy=modal-close-button]').click();
       cy.get('[data-cy=projects-modal-content-box]').should('not.exist');
    });
    it('open the second project modal, open the first image and then close the image', () => {
       cy.visit('http://localhost:3000/#projects');
       cy.get('[data-cy=project2-button]').click();
       cy.get('[data-cy=large-image-viewer]').should('not.exist');
       cy.get('[data-cy=project-image-thumbnail-1]').click();
       cy.get('[data-cy=large-image-viewer]').should('be.visible');
       cy.get('[data-cy=large-image]').click();
       cy.get('[data-cy=large-image-viewer]').should('not.exist');
    });
    it('open the second project modal, then close the modal', () => {
       cy.visit('http://localhost:3000/#projects');
       cy.get('[data-cy=projects-modal-content-box]').should('not.exist');
       cy.get('[data-cy=project2-button]').click();
       cy.get('[data-cy=projects-modal-content-box]').should('be.visible');
       cy.get('[data-cy=modal-close-button]').click();
       cy.get('[data-cy=projects-modal-content-box]').should('not.exist');
    });
    it('open the third project modal, open the first image and then close the image', () => {
       cy.visit('http://localhost:3000/#projects');
       cy.get('[data-cy=project3-button]').click();
       cy.get('[data-cy=large-image-viewer]').should('not.exist');
       cy.get('[data-cy=project-image-thumbnail-1]').click();
       cy.get('[data-cy=large-image-viewer]').should('be.visible');
       cy.get('[data-cy=large-image]').click();
       cy.get('[data-cy=large-image-viewer]').should('not.exist');
    });
    it('open the third project modal, then close the modal', () => {
       cy.visit('http://localhost:3000/#projects');
       cy.get('[data-cy=projects-modal-content-box]').should('not.exist');
       cy.get('[data-cy=project3-button]').click();
       cy.get('[data-cy=projects-modal-content-box]').should('be.visible');
       cy.get('[data-cy=modal-close-button]').click();
       cy.get('[data-cy=projects-modal-content-box]').should('not.exist');
    });
});