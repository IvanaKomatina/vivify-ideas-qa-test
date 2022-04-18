import { loginPage } from "../pageObject/loginPage.js"
import { navigation } from "../pageObject/navigation.js"
import user from "../fixtures/user.json"
import { galleries } from "../pageObject/galleries.js"

describe('Login', () => {
    before(() => {
        cy.visit('')
        cy.url().should('include', 'gallery-app')
        navigation.LoginBtn.click()
        cy.url().should('include', '/login')
        loginPage.LoginTitle.should('have.text', 'Please login')
        navigation.RegisterBtn.should('be.visible')
    })

    it('Login with valid credentials', () => {
        loginPage.Login(user.email,user.password)
        navigation.LogoutBtn.should('be.visible')
        navigation.RegisterBtn.should('not.exist')
        galleries.AllGalleriesTitle.should('have.text', 'All Galleries')
    })
})
