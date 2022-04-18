class Galleries {

    get AllGalleriesTitle() {
        return cy.get('h1')
    }

    get CreateGalleryBtn() {
        return cy.get('a[href="/create"]')
    }

    get CreateGalleryTitle() {
        return cy.get('h1')
    }

    get CreateGalleryHeading() {
        return cy.get('h1')
    }

    get TitleInput() {
        return cy.get('input[id="title"]')
    }

    get DescriptionInput() {
        return cy.get('input[id="description"]')
    }

    get ImageInput() {
        return cy.get('input[type="url"]')
    }

    get SubmitButton() {
        return cy.contains('Submit')
    }

    get FirstImage() {
        return cy.get('h2 > .box-title').first()
    }

    get GalleryTitle() {
        return cy.get('h1')
    }

    get GalleryDescription() {
        return cy.get('p')
    }

    get GalleryImage() {
        return cy.get('img')
    }

    get AddImageBtn() {
        return cy.contains('Add image')
    }

    get EditGalleryBtn() {
        return cy.contains('Edit Gallery')
    }

    get EditGalleryTitle() {
        return cy.get('h1')
    }

    get ErrorMessage() {
        return cy.get('p[class="alert alert-danger"]')
    }

    get TrashBtn() {
        return cy.get('button > .fa-trash')
    }

    Gallery(title,description,url) {

        if(title) {
            this.TitleInput.type(title)
        }

        if(description) {
            this.DescriptionInput.type(description)
        }

        if(url) {
            this.ImageInput.type(url)
        }

        this.SubmitButton.click()
    }
}

export const galleries = new Galleries()