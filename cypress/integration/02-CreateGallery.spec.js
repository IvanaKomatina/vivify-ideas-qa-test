import { loginPage } from "../pageObject/loginPage.js"
import { navigation } from "../pageObject/navigation.js"
import user from "../fixtures/user.json"
import { galleries } from "../pageObject/galleries.js"

describe('Create gallery', () => {
    beforeEach(() => {
        cy.generateFixture()
        cy.visit('')
        navigation.LoginBtn.click()
        loginPage.Login(user.email,user.password)
    })

    it('Create gallery without description', () => {
        cy.fixture('gallery').then(galleryData => {
            galleries.CreateGalleryBtn.click()
            galleries.Gallery(galleryData.Title, "" , galleryData.Image1)
            galleries.FirstImage.should($el => expect($el.text().trim()).to.equal(galleryData.Title))
            galleries.FirstImage.click()
            galleries.GalleryTitle.should($el => expect($el.text().trim()).to.equal(galleryData.Title))
            galleries.GalleryImage.should('have.attr', 'src', galleryData.Image1)
        })
    })

    it('Create gallery with title,description and image', () => {
        cy.fixture('gallery').then(galleryData => {
            galleries.CreateGalleryBtn.click()
            galleries.Gallery(galleryData.Title, galleryData.Description, galleryData.Image1)
            galleries.FirstImage.should($el => expect($el.text().trim()).to.equal(galleryData.Title))
            galleries.FirstImage.click()
            galleries.GalleryTitle.should($el => expect($el.text().trim()).to.equal(galleryData.Title))
            galleries.GalleryDescription.should($el => expect($el.text().trim()).to.equal(galleryData.Description))
            galleries.GalleryImage.should('have.attr', 'src', galleryData.Image1)
        })
    })

    it('Create gallery with title and multiple images', () => {
        cy.fixture('gallery').then(galleryData => {
            galleries.CreateGalleryBtn.click()
            galleries.TitleInput.type(galleryData.Title)
            galleries.ImageInput.type(galleryData.Image1)
            galleries.AddImageBtn.click()
            galleries.ImageInput.eq(1).type(galleryData.Image2)
            galleries.SubmitButton.click()
            galleries.FirstImage.should($el => expect($el.text().trim()).to.equal(galleryData.Title))
            galleries.FirstImage.click()
            galleries.GalleryTitle.should($el => expect($el.text().trim()).to.equal(galleryData.Title))
            galleries.GalleryImage.should('have.attr', 'src', galleryData.Image1)
            galleries.GalleryImage.eq(1).should('have.attr', 'src', galleryData.Image2)

        })
    })

    it('Create gallery with title,description and multiple images', () => {
        cy.fixture('gallery').then(galleryData => {
            galleries.CreateGalleryBtn.click()
            galleries.TitleInput.type(galleryData.Title)
            galleries.DescriptionInput.type(galleryData.Description)
            galleries.ImageInput.type(galleryData.Image1)
            galleries.AddImageBtn.click()
            galleries.ImageInput.eq(1).type(galleryData.Image2)
            galleries.SubmitButton.click()
            galleries.FirstImage.should($el => expect($el.text().trim()).to.equal(galleryData.Title))
            galleries.FirstImage.click()
            galleries.GalleryTitle.should($el => expect($el.text().trim()).to.equal(galleryData.Title))
            galleries.GalleryDescription.should($el => expect($el.text().trim()).to.equal(galleryData.Description))
            galleries.GalleryImage.should('have.attr', 'src', galleryData.Image1)
            galleries.GalleryImage.eq(1).should('have.attr', 'src', galleryData.Image2)
        })
    })
})
