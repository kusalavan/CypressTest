it('Assertions Demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
      .should('contain', 'Button')
      .and('have.id', 'query-btn')
      .and('be.visible')
      .and('be.enabled')
      expect(true).to.be.true
      let name = cy.get('h1')
      cy.log(name)
      assert.equal(4, '4','NOT EQUAL')
      assert.strictEqual(4, 4, 'NOT')
  })