/// <reference types="cypress"/>

before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read files using Fixture', function(){

    cy.log(this.test_data.name)
    cy.log(this.test_data.email)

})

it('read file using readFile function()', function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
})

it('write file using writeFile function()', function(){

    cy.writeFile('./cypress/fixtures/sample.txt', 'Hello, I am Krishna\n')
    cy.writeFile('./cypress/fixtures/sample.txt', 'I am learning Cypress', {flag: 'a+'})

})