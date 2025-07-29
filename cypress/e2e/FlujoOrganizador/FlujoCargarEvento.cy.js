import LogInLogOut from '../../support/Pages/loginLogOut.js';
import DatosFuncion from '../../support/Pages/cargarFuncionDatos.js';
import EntradasFuncion from '../../support/Pages/cargarFuncionEntradas.js';
import ImagenFuncion from '../../support/Pages/cargarFuncionImagen.js';

describe('Crear evento con fechas multiples y preventa de entradas', () => {
  it('Crear un evento con multiples fechas y preventa de entradas', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();

    DatosFuncion.crearEventoMultiplesFechas(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '27', '08', '2025',  //fecha
      '21', '30',          //horario
      '30', '08', '2025',  //fecha2
      '9', '30'          //horario2
    );

    DatosFuncion.siguiente()
    EntradasFuncion.cargarPreVenta();
    ImagenFuncion.subirImagen('cypress/fixtures/400x400.jpg')
    ImagenFuncion.siguiente()
    ImagenFuncion.confirmar()
    cy.contains('Tu evento fue guardado y está pendiente de aprobación.').should('be.visible');
  });

  it('Crear un evento con multiples fechas y sin preventa de entradas', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();

    DatosFuncion.crearEventoMultiplesFechas(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '27', '08', '2025',  //fecha
      '21', '30',          //horario
      '30', '08', '2025',  //fecha2
      '9', '30'          //horario2
    );

    DatosFuncion.siguiente()
    EntradasFuncion.cargarEntradas();
    ImagenFuncion.subirImagen('cypress/fixtures/400x400.jpg')
    ImagenFuncion.siguiente()
    ImagenFuncion.confirmar()
    cy.contains('Tu evento fue guardado y está pendiente de aprobación.').should('be.visible');
  });

  it('Crear evento con fecha unica y sin preventa de entradas', () => {
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
      '2000'               //codPostal
    );

    DatosFuncion.siguiente()
    EntradasFuncion.cargarEntradas();
    ImagenFuncion.subirImagen('cypress/fixtures/400x400.jpg')
    ImagenFuncion.siguiente()
    ImagenFuncion.confirmar()
    cy.contains('Tu evento fue guardado y está pendiente de aprobación.').should('be.visible');
  });

  it('Crear evento con fecha unica y preventa de entradas', () => {
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
      '2000'               //codPostal
    );

    DatosFuncion.siguiente()
    EntradasFuncion.cargarPreVenta();
    ImagenFuncion.subirImagen('cypress/fixtures/400x400.jpg')
    ImagenFuncion.siguiente()
    ImagenFuncion.confirmar()
    cy.contains('Tu evento fue guardado y está pendiente de aprobación.').should('be.visible');
  });

});
