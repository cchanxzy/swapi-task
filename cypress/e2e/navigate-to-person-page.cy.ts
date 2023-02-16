describe('navigate to character', () => {
  before(() => {
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

    cy.visit('http://localhost:3000/');
  });

  it('clicking on character name navigates to character page', () => {
    cy.get('main a').eq(0).should('have.text', 'Luke Skywalker').click();

    cy.get('h1')
      .should('have.length', 1)
      .eq(0)
      .should('have.text', 'Luke Skywalker');
  });
});
