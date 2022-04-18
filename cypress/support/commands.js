// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('generateFixture', () => {
    const { faker } = require('@faker-js/faker')

    cy.writeFile('cypress/fixtures/gallery.json', {
        'Title': faker.name.jobTitle(),
        'Description': faker.lorem.paragraph(1),
        'Image1': 'https://krstarica.name/wp-content/uploads/2021/05/pas-1-750x430.jpg',
        'Image2': 'https://ichef.bbci.co.uk/news/640/cpsprodpb/1799D/production/_107096669_pawwavingpup.jpg',
        'InvalidImage1': 'https://krstarica.name/wp-content/uploads/2021/05/pas-1-750x430.com',
        'InvalidImage2': 'https://www.google.com.jpg'
    })
})