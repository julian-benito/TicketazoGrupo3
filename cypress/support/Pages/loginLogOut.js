class LogInLogOut {
    loginComprador () {
        cy.viewport(1920, 1080)
        cy.visit('https://ticketazo.com.ar/auth/login')
    

        cy.get('input[type="email"]').type('julianbenito5@gmail.com')
        cy.get('input[type="password"]').type('juli1520')
        cy.get('button[data-cy="btn-login"]').click()
    }

  loginOrganizador () {
        cy.viewport(1920, 1080)
        cy.visit('https://ticketazo.com.ar/auth/login')
    

        cy.get('input[type="email"]').type('pruebaticketazo@hotmail.com')
        cy.get('input[type="password"]').type('Prueba.123')
        cy.get('button[data-cy="btn-login"]').click()
    }

    loginAdmin () {
        cy.viewport(1920, 1080)
        cy.visit('https://ticketazo.com.ar/auth/login')
    

        cy.get('input[type="email"]').type('admin@admin')
        cy.get('input[type="password"]').type('admin')
        cy.get('button[data-cy="btn-login"]').click()
    }

    logout() {
    cy.contains('button', 'Comprar').click()
    cy.get('h1').contains('Login')
    }
}

export default new LogInLogOut()