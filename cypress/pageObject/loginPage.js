class LoginPage {

    get LoginTitle() {
        return cy.get('h1')
    }

    get EmailInput() {
        return cy.get('input[id="email"]')
    }

    get PasswordInput() {
        return cy.get('input[id="password"]')
    }

    get SubmitBtn() {
        return cy.get('button[type="submit"]')
    }

    Login(email,password) {
        this.EmailInput.type(email)
        this.PasswordInput.type(password)
        this.SubmitBtn.click()
    }
}

export const loginPage = new LoginPage()