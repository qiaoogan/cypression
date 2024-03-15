const elementContent = (cy, selector) => {
    const element = cy.get(selector);
    return element.text();
};


module.exports = {
    elementContent
};