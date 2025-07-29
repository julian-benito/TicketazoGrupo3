class ImagenFuncion {

  subirImagen(ruta) {
  cy.get('input[type="file"]').selectFile(ruta, { force: true });
  }

  siguiente() {
  return cy.contains('button', 'Siguiente').click();
  }

  confirmar() {
  return cy.contains('button', 'Confirmar').click();
  }

}

export default new ImagenFuncion()