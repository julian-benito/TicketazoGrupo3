import LogInLogOut from '../../support/Pages/loginLogOut.js';
import DatosFuncion from '../../support/Pages/cargarFuncionDatos.js';

describe('Cargar evento primer formulario de datos', () => {
 
  it('TC-7.1	Avanzar sin llenar los campos obligatorios al cargar  datos del evento', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
    DatosFuncion.accederCargarEvento();
    DatosFuncion.edad();
    DatosFuncion.genero();
    DatosFuncion.horario('21', '30');
    DatosFuncion.duracion('2', '0');
    DatosFuncion.siguiente();

    cy.contains('El título no puede estar vacío.').should('be.visible');
    cy.contains('Debe seleccionar un lugar para el evento.').should('be.visible');
    cy.contains('Debe agregar una descripción del evento.').should('be.visible');
    cy.get('button').contains('Anterior').should('not.exist');
  });

  it('TC-7.2	Avanzar llenando solo los campos obligatorios al cargar  datos del evento', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();
    DatosFuncion.accederCargarEvento();
    DatosFuncion.titulo('Titulo');
    DatosFuncion.fecha('20', '07', '2026');
    DatosFuncion.horario('21', '30');
    DatosFuncion.duracion('2', '0');
    DatosFuncion.siguiente();

    cy.contains('button', 'Anterior').should('be.visible');
  });

  it('TC-7.3	Validación de fecha pasada no permitida', () => {
    cy.viewport(1920, 1080);
    LogInLogOut.loginOrganizador();

    DatosFuncion.crearEventoSimple(
      'Evento de prueba',  //nombre evento
      '2', '0',            //duracion
      'Teatro La Plaza',   //Lugar
      'Calle Falsa',       //calle
      '123',               //altura
      '2000',              //codPostal
      '26', '07', '2025',  //fecha
      '21', '30',          //horario
    );

    cy.contains('La fecha debe ser al menos 24 horas a partir de hoy.').should('be.visible');
  });

  it('TC-7.4	Crear evento con múltiples horarios y una fecha correctamente', () => {
      cy.viewport(1920, 1080);
      LogInLogOut.loginOrganizador();
   
      DatosFuncion.crearEventoMultiplesHorarios(
        'Evento de prueba',  //nombre evento
        '2', '0',            //duracion
        'Teatro La Plaza',   //Lugar
        'Calle Falsa',       //calle
        '123',               //altura
        '2000',              //codPostal
        '29', '07', '2025',  //fecha
        '21', '30',          //horario
        '9', '30'          //horario2
      );
   
      DatosFuncion.siguiente()
      cy.wait(2000)
      cy.contains('button', 'Anterior').should('be.visible');
  });

  it('TC-7.5	Validación de horarios duplicados en la misma fecha', () => {
      cy.viewport(1920, 1080);
      LogInLogOut.loginOrganizador();
  
      DatosFuncion.crearEventoMultiplesHorarios(
        'Evento de prueba',  //nombre evento
        '2', '0',            //duracion
        'Teatro La Plaza',   //Lugar
        'Calle Falsa',       //calle
        '123',               //altura
        '2000',              //codPostal
        '29', '08', '2025',  //fecha
        '21', '30',          //horario
        '21', '30'          //horario2
      );
  
      DatosFuncion.siguiente()
      cy.contains('button', 'Anterior').should('not.be.visible');
  });

  it('TC-7.6	Eliminar horario de una fecha', () => {
      cy.viewport(1920, 1080);
      LogInLogOut.loginOrganizador();
   
      DatosFuncion.crearEventoMultiplesHorarios(
        'Evento de prueba',  //nombre evento
        '2', '0',            //duracion
        'Teatro La Plaza',   //Lugar
        'Calle Falsa',       //calle
        '123',               //altura
        '2000',              //codPostal
        '29', '07', '2025',  //fecha
        '21', '30',          //horario
        '9', '30'          //horario2
      );
   
      DatosFuncion.eliminarHorario()
      DatosFuncion.siguiente()
  });
   
  it('TC-7.7	Intento de avanzar con una fecha sin horarios', () => {
      cy.viewport(1920, 1080);
      LogInLogOut.loginOrganizador();
   
      DatosFuncion.crearEventoMultiplesHorarios(
        'Evento de prueba',  //nombre evento
        '2', '0',            //duracion
        'Teatro La Plaza',   //Lugar
        'Calle Falsa',       //calle
        '123',               //altura
        '2000',              //codPostal
        '29', '07', '2025',  //fecha
        '21', '30',          //horario
        '9', '30'          //horario2
      );
   
      DatosFuncion.eliminarHorario()
      DatosFuncion.eliminarHorario()
      DatosFuncion.siguiente()
      cy.contains('button', 'Anterior').should('not.be.visible');
  });
});