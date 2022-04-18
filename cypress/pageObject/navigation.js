class Navigation {

    get LoginBtn() {
        return cy.get('a[href="/login"]')
    }

    get RegisterBtn() {
        return cy.get('a[href="/register"]')
    }

    get LogoutBtn() {
        return cy.contains('Logout')
    }
}

export const navigation = new Navigation()