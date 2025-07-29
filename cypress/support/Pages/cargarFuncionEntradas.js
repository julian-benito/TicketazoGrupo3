class EntradasFuncion {

  nombreEntradas() {
    cy.get('button[aria-haspopup="listbox"]').click();
    return cy.get('li[tabindex="-1"]').should('be.visible').eq(0).click();
  }

  cantidadEntradas() {
    return cy.get('input[name="capacidadEntrada0"]').click().type('15');
  }

  precioEntradas() {
    return cy.get('input[name="precioEntrada0"]').click().type('100');
  }

  precioPreVenta() {
    return cy.get('input[name="precioPreventa0"]').click().type('50');
  }

  cantidadPreVenta() {
    return cy.get('input[name="cantidadPreventa0"]').click().type('15');
  }

  siguiente() {
    return cy.contains('button', 'Siguiente').click();
  }

  activarPreVenta() {
  return cy.get('input[role="switch"][aria-label="Activar Preventa"]').click({ force: true });
  }

  cargarEntradas() {
    this.nombreEntradas();
    this.cantidadEntradas();
    this.precioEntradas();
    this.siguiente();
  }

  cargarPreVenta() {
    this.nombreEntradas();
    this.cantidadEntradas();
    this.precioEntradas();
    this.activarPreVenta();
    this.cantidadPreVenta();
    this.precioPreVenta();
    this.siguiente();
  }

}

export default new EntradasFuncion();