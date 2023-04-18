// Mocha and Chai functions
describe('First Test', () => {
  it('Visits the Kitchen sink website', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    //https://docs.cypress.io/guides/references/assertions#Chai
    cy.url().should('include', '/commands/actions')

    // We normally don't suggest selecting and finding elements by their class names, but we do so here since we are querying an external site, and sometimes that is all we have to work with.
    cy.get('.action-email').type('fake@email.com')

    cy.get('.action-email').should('have.value', 'fake@email.com')
  
  
  
  
  })
})