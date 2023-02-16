describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://swapi.dev/api/people', {
      fixture: 'people.json',
    });
    cy.intercept('GET', 'https://swapi.dev/api/people/*', {
      fixture: 'person.json',
    });
    cy.intercept('GET', 'https://swapi.dev/api/planets/*', {
      fixture: 'planet.json',
    });
    cy.intercept('GET', 'https://swapi.dev/api/films/*', {
      fixture: 'film.json',
    });
  });

  describe('layout', () => {
    it('should have header', () => {
      cy.visit('http://localhost:3000/');
      cy.get('h2')
        .should('have.length', 1)
        .eq(0)
        .should('have.text', 'Star Wars');
    });

    it('should have list of characters', () => {
      cy.visit('http://localhost:3000/');
      cy.get('main a').should('have.length', 10);
    });
  });
});
