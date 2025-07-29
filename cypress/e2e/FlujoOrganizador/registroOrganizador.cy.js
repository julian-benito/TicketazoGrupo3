describe('Flujo de Registro de Organizador en Ticketazo', { testIsolation: false }, () => {

    it('Debería mostrar mensaje de error al intentar registrarse con un correo existente', () => {
      cy.visit('https://ticketazo.com.ar');

      cy.get('.justify-end > .text-sm').click();
      cy.get('[data-cy="btn-register-client"]').click();

      cy.get('.grid > :nth-child(1) > .relative > .inline-flex').should('be.visible').type('Teatro Municipal ', { delay: 100 });
      cy.get('[data-cy="input-cuit"]').should('be.visible').type('30712345678', { delay: 100 }).invoke('val').should('have.length', 11);

      cy.get('[data-cy="select-provincia"]').click();
      cy.contains('Córdoba').click();

      cy.get('[data-cy="select-localidad"]').click();
      cy.get('[data-cy="select-localidad"]').type('Córdoba');
      cy.contains('Córdoba').click();

      cy.get('[data-cy="input-direccion"]').should('be.visible').type('Av. San Martín 1250', { delay: 100 });
      cy.get('[data-cy="input-telefono"]').should('be.visible').type('3511234567', { delay: 100 }).invoke('val').should('have.length', 10);

      cy.get('[data-cy="input-email"]').should('be.visible').type('teatrosanmartin@gmail.com', { delay: 100 });
      cy.get('[data-cy="input-confirmar-email"]').should('be.visible').type('teatrosanmartin@gmail.com', { delay: 100 });

      cy.get('[data-cy="input-password"]').should('be.visible').type('TeatroPass123!', { delay: 100 });
      cy.get('[data-cy="input-repetir-password"]').should('be.visible').type('TeatroPass123!', { delay: 100 });

      cy.get('[data-cy="btn-registrarse"]').click();

      // Validar que aparezca mensaje de error
      cy.get('[data-cy="error-message"]').should('contain.text', 'El usuario ya existe');
    });

    it('Debería registrarse correctamente con un correo no existente', () => {
      cy.visit('https://ticketazo.com.ar');

      cy.get('.justify-end > .text-sm').click();
      cy.get('[data-cy="btn-register-client"]').click();

      cy.get('.grid > :nth-child(1) > .relative > .inline-flex').should('be.visible').type('EcoGreen ', { delay: 100 });
      cy.get('[data-cy="input-cuit"]').should('be.visible').type('30678912345', { delay: 100 }).invoke('val').should('have.length', 11);

      cy.get('[data-cy="select-provincia"]').click();
      cy.contains('Buenos Aires').click();

      cy.get('[data-cy="select-localidad"]').click();
      cy.get('[data-cy="select-localidad"]').type('Agustina');
      cy.contains('Agustina').click();

      cy.get('[data-cy="input-direccion"]').should('be.visible').type('Ruta 34 km 23', { delay: 100 });
      cy.get('[data-cy="input-telefono"]').should('be.visible').type('3874567890', { delay: 100 }).invoke('val').should('have.length', 10);

      cy.get('[data-cy="input-email"]').should('be.visible').type('ecog35085@gmail.com', { delay: 100 });
      cy.get('[data-cy="input-confirmar-email"]').should('be.visible').type('ecog35085@gmail.com', { delay: 100 });

      cy.get('[data-cy="input-password"]').should('be.visible').type('Ecogreen2024!', { delay: 100 });
      cy.get('[data-cy="input-repetir-password"]').should('be.visible').type('Ecogreen2024!', { delay: 100 });

      cy.get('[data-cy="btn-registrarse"]').click();

      // Validar registro exitoso 
      cy.contains('Registro exitoso').should('be.visible');
    });

       it('Debería registrarse correctamente con un correo no existente y seleccionando establecimiento propio', () => {
        cy.visit('https://ticketazo.com.ar');

        cy.get('.justify-end > .text-sm').click();
        cy.get('[data-cy="btn-register-client"]').click();

        cy.get('.grid > :nth-child(1) > .relative > .inline-flex').should('be.visible').type('EcoGreen ', { delay: 100 });
        cy.get('[data-cy="input-cuit"]').should('be.visible').type('30678912395', { delay: 100 }).invoke('val').should('have.length', 11);

        cy.get('[data-cy="select-provincia"]').click();
        cy.contains('Buenos Aires').click();

        cy.get('[data-cy="select-localidad"]').click();
        cy.get('[data-cy="select-localidad"]').type('Agustina');
        cy.contains('Agustina').click();

        cy.get('[data-cy="input-direccion"]').should('be.visible').type('Ruta 34 km 23', { delay: 100 });
        cy.get('[data-cy="input-telefono"]').should('be.visible').type('3874569090', { delay: 100 }).invoke('val').should('have.length', 10);

        cy.get('[data-cy="input-email"]').should('be.visible').type('ecog35089@gmail.com', { delay: 100 });
        cy.get('[data-cy="input-confirmar-email"]').should('be.visible').type('ecog35089@gmail.com', { delay: 100 });

        cy.get('[data-cy="input-password"]').should('be.visible').type('Ecogreen2030!', { delay: 100 });
        cy.get('[data-cy="input-repetir-password"]').should('be.visible').type('Ecogreen2030!', { delay: 100 });

        cy.get('[data-cy="switch-establecimiento"] > .font-inherit').click();

        cy.get('[data-cy="btn-registrarse"]').click();

        // Validar registro exitoso 
        cy.contains('Registro exitoso').should('be.visible');
      });
  
      it('Debería dar error al registrarse con valores vacíos o no válidos', () => {
        cy.visit('https://ticketazo.com.ar');

        cy.get('.justify-end > .text-sm').click();
        cy.get('[data-cy="btn-register-client"]').click();

        cy.get('.grid > :nth-child(1) > .relative > .inline-flex').should('be.visible').type('FitZone ', { delay: 100 });
        cy.get('[data-cy="input-cuit"]').should('be.visible').type('308', { delay: 100 }).invoke('val').should('have.length', 3);

        cy.get('[data-cy="select-provincia"]').click();
        cy.contains('Ciudad Autónoma de Buenos Aires').click();

        cy.get('[data-cy="select-localidad"]').click();
        cy.get('[data-cy="select-localidad"]').type('Belgrano');
        cy.contains('Belgrano').click();

        cy.get('[data-cy="input-direccion"]').should('be.visible').type('Avenida Cabildo 2323', { delay: 100 });
        cy.get('[data-cy="input-telefono"]').should('be.visible').type('1174567890', { delay: 100 }).invoke('val').should('have.length', 10);

        cy.get('[data-cy="input-email"]').should('be.visible').type('Fitzonegymt@gmail.com', { delay: 100 });
        cy.get('[data-cy="input-confirmar-email"]').should('be.visible').type('Fitzonegymt@gmail.com', { delay: 100 });

        cy.get('[data-cy="input-password"]').should('be.visible').type('Fitzone@123!', { delay: 100 });
        cy.get('[data-cy="input-repetir-password"]').should('be.visible').type('Fitzone@123!', { delay: 100 });

        cy.get('[data-cy="btn-registrarse"]').click();

        // Validar mensajes de error 
        cy.get('[data-cy="error-message"]').should('be.visible');
      });

});

