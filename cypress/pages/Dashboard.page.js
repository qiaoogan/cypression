class DashboardPage {
    constructor(cy) {
        this.cy = cy;
    };

    elements = {
        congratsLabel: ".v-col-sm-8 > .v-card-item > .v-card-item__content > .v-card-title",
        viewBadgesButton: '[value="expenses"]',
        expensesLabel: ".mb-0"
    };


    actions = {
        clickViewBadgesButton: async () => {
            return await this.cy.get(this.elements.viewBadgesButton).click();
        }

    };

    checks = {};

    procedures = {};
}

module.exports = DashboardPage;