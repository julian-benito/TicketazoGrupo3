describe('Flujo de Registro de Organizador en Ticketazo', { testIsolation: false }, () => {

  it('Debería mostrar mensaje de error "Correo o contraseña incorrectos" al intentar loguearse sin estar registrado', () => {
    cy.visit('https://ticketazo.com.ar');

    // Clic en el botón de Login (arriba a la derecha)
    cy.get('.justify-end > .text-sm').click();

    // Ingresar credenciales no registradas
    cy.get('input[data-cy="input-email"]', { timeout: 10000 }).should('be.visible').type('usuarioticketazo@gmail.com', { delay: 100 });
    cy.get('input[data-cy="input-password"]').should('be.visible').type('Contraseña123', { delay: 100 });

    // Enviar formulario
    cy.get('[data-cy="btn-login"]').click();
  });

  it('Debería loguearse con éxito, ya que está registrado', () => {
    cy.visit('https://ticketazo.com.ar');

    // Clic en el botón de Login (arriba a la derecha)
    cy.get('.justify-end > .text-sm').click();

    // Ingresar credenciales válidas
    cy.get('input[data-cy="input-email"]', { timeout: 10000 }).should('be.visible').type('teatromunicipal23@gmail.com', { delay: 100 });
    cy.get('input[data-cy="input-password"]').should('be.visible').type('TeatroPass123!', { delay: 100 });

    // Enviar formulario
    cy.get('[data-cy="btn-login"]').click();

    // Si querés cerrar sesión al final, descomentá esto:
    // cy.get('.p-2').click();   
    // cy.wait(500);
    // cy.get(':nth-child(8) > .pb-4').click();
  });

  it('Debería mostrar mensaje de error "Correo o contraseña incorrectos" al intentar loguearse con el campo contraseña vacío', () => {
    cy.visit('https://ticketazo.com.ar');

    // Clic en el botón de Login (arriba a la derecha)
    cy.get('.justify-end > .text-sm').click();

    // Ingresar solo el correo, dejando la contraseña vacía
    cy.get('input[data-cy="input-email"]', { timeout: 10000 }).should('be.visible').type('organizador@gmail.com', { delay: 100 });
    cy.get('input[data-cy="input-password"]').should('be.visible').type('', { delay: 100 });

    // Enviar formulario
    cy.get('[data-cy="btn-login"]').click();
  });

});
