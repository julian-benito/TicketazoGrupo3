// Commands compra entradas
Cypress.Commands.add('eligeEvento', () => {
    cy.visit('https://ticketazo.com.ar/')
    cy.get('[aria-label="pagination item 3"]').click()
    cy.get('[data-cy="btn-ver-evento-21"]').click()
    cy.get('button').contains('Adquirir entrada').click()
})

Cypress.Commands.add('Login', () => {
    // 1 sola vez
    cy.get('[data-cy="input-email"]').type('ingenieriayaprendizaje@gmail.com')
    cy.get('[data-cy="input-password"]').type('Joselito&aprendizaje8')
    cy.get('[data-cy="btn-login"]').click()
})

Cypress.Commands.add('compra1Boleta', () => {
    // Prueba comprar 3 boletas evento anterior
    //cy.get('[data-cy="btn-ver-evento-8"]').click()
    //cy.get('button').contains('Adquirir entrada').click()
    //cy.get('[data-cy="input-email"]').type('ingenieriayaprendizaje@gmail.com')
    //cy.get('[data-cy="input-password"]').type('Joselito&aprendizaje8')
    //cy.get('[data-cy="btn-login"]').click()
    //cy.get('.mx-auto > .relative > .transition-all').click()
    //cy.get('[title="Fila 24, Columna 5"]').click()
    //cy.wait(1000)
    //cy.get('[title="Fila 24, Columna 6"]').click()
    //cy.wait(1000)
    //cy.get('[title="Fila 24, Columna 7"]').click()
    //cy.wait(1000)
    //cy.get('[title="Fila 24, Columna 8"]').click()
    //cy.wait(1000)
    //cy.get('.w-full > span').click()
    //cy.get('.mt-6 > .z-0').click()
    
    // Original
    //cy.get('[style="left: 16px; top: 208.414px; width: 106.43px; height: 184.852px; position: absolute; background-color: rgb(255, 245, 77); transition: background-color 0.3s;"]').click()
    cy.get('[style="left: 417.633px; top: 205.053px; width: 166.367px; height: 189.893px; position: absolute; background-color: rgb(109, 110, 178); transition: background-color 0.3s;"]').click()
    cy.get('[title="Fila 18, Columna 1"]').click()
    cy.get('.w-full > span').click()
    cy.get('.mt-6 > .z-0').click() // Mis Entradas
    cy.reload()
})

Cypress.Commands.add('compra2Boletas', () => {
    cy.get('[style="left: 417.633px; top: 205.053px; width: 166.367px; height: 189.893px; position: absolute; background-color: rgb(109, 110, 178); transition: background-color 0.3s;"]').click()
    cy.get('[title="Fila 18, Columna 2"]').click()
    cy.wait(1000)
    cy.get('[title="Fila 18, Columna 3"]').click()
    cy.wait(1000)
    cy.get('.w-full > span').click()
    cy.get('.mt-6 > .z-0').click() // Mis Entradas
    cy.reload()
})

Cypress.Commands.add('compra3Boletas', () => {
    cy.get('[style="left: 417.633px; top: 205.053px; width: 166.367px; height: 189.893px; position: absolute; background-color: rgb(109, 110, 178); transition: background-color 0.3s;"]').click()
    cy.wait(1000)
    cy.get('[title="Fila 18, Columna 4"]').click()
    cy.wait(1000)
    cy.get('[title="Fila 18, Columna 5"]').click() 
    cy.wait(1000)
    cy.get('[title="Fila 18, Columna 6"]').click()
    cy.wait(1000)
    cy.get('.w-full > span').click()
    cy.get('.mt-6 > .z-0').click() // Mis Entradas
    cy.reload()
})

Cypress.Commands.add('compra4Boletas', () => {
    cy.get('[style="left: 417.633px; top: 205.053px; width: 166.367px; height: 189.893px; position: absolute; background-color: rgb(109, 110, 178); transition: background-color 0.3s;"]').click()
    cy.wait(1000)
    cy.get('[title="Fila 18, Columna 7"]').click()
    cy.wait(1000)
    cy.get('[title="Fila 18, Columna 8"]').click()
    cy.wait(1000)
    cy.get('[title="Fila 18, Columna 9"]').click()
    cy.wait(1000)
    cy.get('[title="Fila 18, Columna 10"]').click()
    cy.wait(1000)
    cy.get('.w-full > span').click()
    cy.get('.mt-6 > .z-0').click() // Mis Entradas
})
