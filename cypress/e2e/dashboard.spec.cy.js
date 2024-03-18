const commonConfig = require("../configs/common.config");
const DashPage = require("../pages/Dashboard.page")

describe('tests for dashbord', () => {
  const dashboardPage = new DashPage(cy);
  beforeEach(() => {
    cy.visit(commonConfig.url);
  })

  it('dashboard dispaly checking', () => {
    cy.get(dashboardPage.elements.congratsLabel).then(($element) =>{
      const text = $element.text();
      expect(text).to.contains("Congratulations")
      cy.screenshot('dashboard_home_page');
    })

  }),

  it("dashboard 'Expenses' button testing", () => {
    dashboardPage.actions.clickViewBadgesButton();
    cy.get(dashboardPage.elements.expensesLabel).then(($element) => {
      const text = $element.text();
      expect(text).to.contains("Total Expenses")
    })

  })
})

