import { loginPage } from "../pageObject/loginPage.js"
import { navigation } from "../pageObject/navigation.js"
import user from "../fixtures/user.json"
import { galleries } from "../pageObject/galleries.js"

describe('Edit Gallery', () => {
    beforeEach(() => {
        cy.generateFixture()
        cy.visit('')
        navigation.LoginBtn.click()
        loginPage.Login(user.email,user.password)
    })

    it('Edit gallery without title', () => {
        navigation.MyGalleriesBtn.click()
        galleries.FirstGalleryTitle.click()
        galleries.EditGalleryBtn.click()
        galleries.EditGalleryTitle.should('have.text', 'Edit Gallery')
        galleries.TitleInput.clear()
        galleries.Gallery("" , "" , "")
        galleries.TitleInput.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })

    })

    it('Edit gallery without url', () => {
        navigation.MyGalleriesBtn.click()
        galleries.FirstGalleryTitle.click()
        galleries.EditGalleryBtn.click()
        galleries.ImageInput.clear()
        galleries.Gallery("", "", "")
        galleries.ImageInput.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })

    it('Edit gallery without valid image extension', () => {
        cy.fixture('gallery').then(galleryData => {
            navigation.MyGalleriesBtn.click()
            galleries.FirstGalleryTitle.click()
            galleries.EditGalleryBtn.click()
            galleries.ImageInput.clear()
            galleries.Gallery("", "" , galleryData.InvalidImage1)
            galleries.ErrorMessage.should('have.text', 'Wrong format of image')
        })
    })

    it('Edit gallery with invalid url', () => {
        navigation.MyGalleriesBtn.click()
        galleries.FirstGalleryTitle.click()
        galleries.EditGalleryBtn.click()
        galleries.ImageInput.clear()
        galleries.Gallery("" , "" , "www.google.com")
        galleries.ImageInput.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please enter a URL.')
        })
    })

    it('Edit gallery without title and url', () => {
        cy.fixture('gallery').then(galleryData => {
            navigation.MyGalleriesBtn.click()
            galleries.FirstGalleryTitle.click()
            galleries.EditGalleryBtn.click()
            galleries.TitleInput.clear()
            galleries.ImageInput.clear()
            galleries.Gallery("" , galleryData.Description, "")
            galleries.TitleInput.then(($input) => {
                expect($input[0].validationMessage).to.eq('Please fill out this field.')
            })
        })
    })

    // Ovaj test case pada jer smatram da je ovo bug
    // jer dopusta kreiranje galerije sa slikom koja
    // ne postoji, a ocekivano je da izbaci gresku da
    // slika ne postoji
    it('Edit gallery with no existing image', () => {
        cy.fixture('gallery').then(galleryData => {
            navigation.MyGalleriesBtn.click()
            galleries.FirstGalleryTitle.click()
            galleries.EditGalleryBtn.click()
            galleries.TitleInput.clear()
            galleries.DescriptionInput.clear()
            galleries.ImageInput.clear()
            galleries.Gallery(galleryData.Title, galleryData.Description, galleryData.InvalidImage2)
            galleries.ErrorMessage.should('have.text', 'The image does not exist.')
        })
    })
})
