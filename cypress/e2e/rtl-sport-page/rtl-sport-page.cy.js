describe('Sport page', () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3000/api/articles?*').as('fetchArticles');
        cy.visit('http://localhost:3000/nieuws/sport');
    });

    it("successfully loads", () => {
        cy.request('GET', 'http://localhost:3000/api/articles?page=1&limit=12')
            .its('status')
            .should('eq', 200);

        cy.request('GET', 'http://localhost:3000/api/articles?page=1&limit=12')
            .its('body')
            .should((body) => {
                expect(body).to.have.property('data', body.data);
                expect(body).to.have.property('total', 217);
                expect(body).to.have.property('currentPage', 1);
                expect(body).to.have.property('totalPages', 19);
            });

    });

    it('should display the Sport page', () => {
        cy.get('[data-testid="teaser-section"]').should('be.visible');
        cy.get('[data-testid="teaser-list"]').children().should('have.length', 4);
    });

    it('should navigate to the article "Test article no paragraphs 1"', () => {
        cy.contains('Test article no paragraphs 1').click();

        cy.url().should('include', '/artikel/5476030/test-article-no-paragraphs-1');

        cy.contains('test-article-no-paragraphs-1').should('be.visible');
    });

    it("should scroll to the bottom of the page and load more articles", () => {
        cy.scrollTo('bottom', { duration: 2000 });

        cy.get('[data-testid="grid-ssr"]').children().should('have.length', 12);
        cy.get('[data-testid="grid-client"]').children().should('have.length', 12);

        cy.scrollTo('bottom', { duration: 1500 });
        cy.contains('Test article no paragraphs 24').should('be.visible');
    });

});