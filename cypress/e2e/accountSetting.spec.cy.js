const commonConfig = require("../configs/common.config");
const AccountSettingPage = require('../pages/AccountSetting.page');
const commonUtils = require('../utils/common.utils')
const elementUtil = require('../utils/element.utils')

describe("Account setting test", () => {

    const accoutSettingPage =  new AccountSettingPage(cy);
    const url = commonUtils.buildUrl(commonConfig.url, accoutSettingPage.path)
    const testFirstName = "cypress_firstName"

    beforeEach(() =>{
        cy.visit(url);
    })

    it("successful change account info", () =>{
        cy.get(accoutSettingPage.elements.firstNameField)
        accoutSettingPage.actions.inputFirstName(testFirstName)
        accoutSettingPage.actions.clickSaveButton()

        cy.reload();
        cy.wait(1000)

        cy.log('logging');
        cy.visit(url);

        cy.get(accoutSettingPage.elements.firstNameField).should("have.value",testFirstName )
        cy.screenshot('save_account_modification');


        // cy.get(accoutSettingPage.elements.firstNameField).then(($element) => {
        //     const retreivedFirtName = $element.text()
        //     expect(retreivedFirtName).to.equal(testFirstName)
        // })
    })

    it("reset the modification of the account info", () => {
        const changedFirstName = "aaaaaa"
        accoutSettingPage.actions.inputFirstName(changedFirstName)
        accoutSettingPage.actions.clickResetButton()

        cy.reload();
        cy.wait(1000)

        cy.get(accoutSettingPage.elements.firstNameField).should("have.value",testFirstName )
        cy.screenshot('cancel_change_account');

    })
})