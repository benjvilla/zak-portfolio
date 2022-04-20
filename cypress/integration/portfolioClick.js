describe("Visits site Successfully", () =>{
it ("Status 200", ()=> {
    //visit a remote url
    cy.visit("http://localhost:3000")
    //.get method gets one or more DOM elements by select or alias
     //get the navbar elements and click on portfolio and  portfolio page should be visible
    cy.get('.nav >a').contains("Portfolio").click().should('be.visible')
    cy.get('input[name="companyName"]').type("Best company ever")
})

})