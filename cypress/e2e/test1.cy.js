/// <reference types="cypress"/>

it('Google Search', function(){
    
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by Step{Enter}')
    cy.wait(5000)
    cy.contains('Videos').click()

})