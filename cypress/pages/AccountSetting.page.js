class AccountSettingPage {
    constructor(cy) {
        this.cy = cy;
        this.path = "/account-settings"
    };

    elements = {
        firstNameField: ".v-col-md-6.v-col-12:nth-child(1) input",
        lastNameField:  ".v-col-md-6.v-col-12:nth-child(2) input",
        emailField:  ".v-col-md-6.v-col-12:nth-child(3) input",
        organizationField: ".v-col-md-6.v-col-12:nth-child(4) input",
        phoneNumberField: ".v-col-md-6.v-col-12:nth-child(5) input",
        addressField: ".v-col-md-6.v-col-12:nth-child(6) input",
        stateField: ".v-col-md-6.v-col-12:nth-child(7) input",
        zipCodeField: ".v-col-md-6.v-col-12:nth-child(8)",
        countrySelect: ".v-col-md-6.v-col-12:nth-child(9)",
        languageSelect: ".v-col-md-6.v-col-12:nth-child(10)",
        timeZoneSelect: ".v-col-md-6.v-col-12:nth-child(11)",
        currencySelect: ".v-col-md-6.v-col-12:nth-child(12)",

        saveButton: "#app > div > div > div > div.layout-content-wrapper > main > div > div > div.v-window.v-theme--light.mt-5.disable-tab-transition > div > div.v-window-item.v-window-item--active > div > div:nth-child(1) > div > div:nth-child(5) > div > form > div > div.v-col.v-col-12.d-flex.flex-wrap.gap-4 > button.v-btn.v-btn--elevated.v-theme--light.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated",
        resetButton: "#app > div > div > div > div.layout-content-wrapper > main > div > div > div.v-window.v-theme--light.mt-5.disable-tab-transition > div > div.v-window-item.v-window-item--active > div > div:nth-child(1) > div > div:nth-child(5) > div > form > div > div.v-col.v-col-12.d-flex.flex-wrap.gap-4 > button.v-btn.v-theme--light.text-secondary.v-btn--density-default.v-btn--size-default.v-btn--variant-tonal"

    };

    actions = {
        inputFirstName: async(firstName) => {
            return await this.cy.get(this.elements.firstNameField).clear().type(firstName);
        },

        inputLastName: async(lastName) => {
            return await this.cy.get(this.elements.lastNameField).clear().type(lastName);
        },

        inputEmail: async(email) => {
            return await this.cy.get(this.elements.emailField).clear().type(email);
        },

        inputOrganization: async(organization) => {
            return await this.cy.get(this.elements.organizationField).clear().type(organization);
        },

        inputPhoneNumber: async(phoneNumber) => {
            await elementClearValue(this.page, this.elements.phoneNumberField);
            return await this.cy.get(this.elements.phoneNumberField).clear().type(phoneNumber);
        },

        inputAddress: async(address) => {
            return await this.cy.get(this.elements.addressField).clear().type(address);
        },

        inputState: async(state) => {
            await elementClearValue(this.page, this.elements.stateField);
            return await this.cy.get(this.elements.stateField).clear().type(state);
        },

        inputZipCode: async(zipCode) => {
            return await this.cy.get(this.elements.zipCodeField).clear().type(zipCode);
        },

        selectCountry: async(country) => {
            return await this.cy.get(this.elements.countrySelect).clear().type(country);
        },

        selectLanguage: async(language) => {
            return await this.cy.get(this.elements.languageSelect).clear().type(language);
        },

        selectTimeZone: async(timeZone) => {
            return await this.cy.get(this.elements.timeZoneSelect).clear().type(timeZone);
        },

        selectCurrency: async(currency) => {
            return await this.cy.get(this.elements.currencySelect).clear().type(currency);
        },

        clickSaveButton: async() => {
            return await this.cy.get(this.elements.saveButton).click();
        },

        clickResetButton : async() => {
            return await this.cy.get(this.elements.resetButton).click();
        }

    };

    checks = {};

    procedures = {};
}

module.exports = AccountSettingPage;