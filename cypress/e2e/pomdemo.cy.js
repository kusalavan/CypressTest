import {LoginPage} from './pages/login_page.js'
const loginPage = new LoginPage()

beforeEach(function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')

})

describe('All Login Tests', function(){

    it('Login with Valid Credentials', function(){

        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        //cy.get('.oxd-userdropdown-name').should('contain', 'Paul Collings')
        //cy.get('.oxd-userdropdown-tab').click()
        
    })
    
    it('Login with Invalid Username', function(){
    
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        //cy.get('.oxd-userdropdown-tab').click()
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials' )
        
    })

})

it('Login with Invalid Password', function(){
    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin456')
    loginPage.clickLogin()
    //cy.get('.oxd-userdropdown-tab').click()
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials' )
    
})