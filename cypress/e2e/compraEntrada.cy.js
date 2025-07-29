describe('compraEntrada', {testisolation: false}, () => {
    it('compraEntrada', () =>{
        cy.eligeEvento()
        cy.Login()
        cy.compra1Boleta()
        cy.eligeEvento()
        cy.compra2Boletas()
        cy.eligeEvento()
        cy.compra3Boletas()
        cy.eligeEvento()
        cy.compra4Boletas()
    })    
})