import LogInLogOut from '../../support/Pages/loginLogOut.js';
import DatosFuncion from '../../support/Pages/cargarFuncionDatos.js';
import EntradasFuncion from '../../support/Pages/cargarFuncionEntradas.js';
import ImagenFuncion from '../../support/Pages/cargarFuncionImagen.js';

describe('Carga de entradas', () => {

  it('TC - 9.1 Avanzar sin llenar los campos obligatorios', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();

    DatosFuncion.crearEventoSimple(
      'Evento de prueba',  //nombre evento
      '27', '08', '2025',  //fecha
      '21', '30',          //horario
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '5000'               //codPostal
    );
    DatosFuncion.siguiente()
    EntradasFuncion.siguiente();
    cy.contains('Debe seleccionar un nombre para la entrada #1').should('be.visible');
    cy.contains('Debe seleccionar una capacidad para la entrada #1').should('be.visible');
    cy.contains('Debe seleccionar un precio para la entrada #1').should('be.visible');
    cy.contains('button', 'Cargar Imagen Evento').should('not.exist');
  });

  it('TC - 9.2 Avanzar con una cantidad de entradas de "0"', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();

    DatosFuncion.crearEventoSimple(
      'Evento de prueba',  //nombre evento
      '27', '08', '2025',  //fecha
      '21', '30',          //horario
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '5000'               //codPostal
    );
    DatosFuncion.siguiente()
    cy.get('button[aria-haspopup="listbox"]').click();
    cy.get('li[tabindex="-1"]').should('be.visible').eq(0).click();
    cy.get('input[name="capacidadEntrada0"]').click().type('0');
    cy.get('input[name="precioEntrada0"]').click().type('100');
    EntradasFuncion.siguiente();
    cy.contains('button', 'Cargar Imagen Evento').should('not.be.visible');
  });

  it('TC - 9.3 Avanzar con una cantidad de preventa mayor a la capacidad', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();

    DatosFuncion.crearEventoSimple(
      'Evento de prueba',  //nombre evento
      '27', '08', '2025',  //fecha
      '21', '30',          //horario
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '5000'               //codPostal
    );
    DatosFuncion.siguiente()
    cy.get('button[aria-haspopup="listbox"]').click();
    cy.get('li[tabindex="-1"]').should('be.visible').eq(0).click();
    cy.get('input[name="capacidadEntrada0"]').click().type('100');
    cy.get('input[name="precioEntrada0"]').click().type('100');
    cy.get('input[role="switch"][aria-label="Activar Preventa"]').click({ force: true });
    cy.get('input[name="precioPreventa0"]').click().type('50');
    cy.get('input[name="cantidadPreventa0"]').click().type('200');
    EntradasFuncion.siguiente();
    cy.contains('button', 'Cargar Imagen Evento').should('not.be.visible');
  });

});