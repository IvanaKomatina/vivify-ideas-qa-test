import { loginPage } from "../pageObject/loginPage.js"
import { navigation } from "../pageObject/navigation.js"
import user from "../fixtures/user.json"

describe('Logout', () => {
    before(() => {
        cy.visit('')
        navigation.LoginBtn.click()
        loginPage.Login(user.email,user.password)
    })

    it('Logout', () => {
        cy.wait(5000)
        navigation.LogoutBtn.click()
        navigation.LoginBtn.should('be.visible')
        navigation.RegisterBtn.should('be.visible')
    })
})
