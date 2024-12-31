describe('Header Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should display navigation menu', () => {
        cy.get('nav').should('be.visible');
        cy.get('nav a').should('have.length', 6);
    });

    it('should display the Algemeen page', () => {
        cy.contains('Algemeen').should('be.visible');
    });

    it('should navigate to the Sport page', () => {
        cy.get('a[href="/nieuws/sport"]').click();
        cy.url().should('include', '/nieuws/sport');
    });

    it('should navigate to the Home page', () => {
        cy.get('a[href="/"]').click();
        cy.url().should('include', '/');
        cy.contains('Nieuws').should('be.visible');
    });

    it('should navigate to the Economie page', () => {
        cy.get('a[href="/nieuws/economie"]').click();
        cy.url().should('include', '/nieuws/economie');
        cy.contains('Not found').should('be.visible');
    });

    it('should navigate to the Politiek page', () => {
        cy.get('a[href="/nieuws/politiek"]').click();
        cy.url().should('include', '/nieuws/politiek');
        cy.contains('Not found').should('be.visible');
    });

    it('should navigate to the Lifestyle page', () => {
        cy.get('a[href="/nieuws/lifestyle"]').click();
        cy.url().should('include', '/nieuws/lifestyle');
        cy.contains('Not found').should('be.visible');
    });

    it('should navigate to the Uitzendingen page', () => {
        cy.get('a[href="/nieuws/uitzendingen"]').click();
        cy.url().should('include', '/nieuws/uitzendingen');
        cy.contains('Not found').should('be.visible');
    });
});