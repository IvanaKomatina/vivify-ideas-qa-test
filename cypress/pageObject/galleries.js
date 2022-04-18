class Galleries {

    get AllGalleriesTitle() {
        return cy.get('h1')
    }
}

export const galleries = new Galleries()