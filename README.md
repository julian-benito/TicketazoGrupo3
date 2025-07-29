# 🎟️ **TICKETAZO - Automatización de Pruebas con Cypress - Grupo 3**

### ⚙️ 1. Scripts de instalación y ejecución
Para instalar las dependencias y ejecutar los tests automáticos:

  #### 📥 Clonar el repositorio
  git clone https://github.com/julian-benito/TicketazoGrupo3.git

  #### 📂 Ingresar a la carpeta del proyecto
  cd TicketazoGrupo3

  #### 📦 Instalar dependencias
  npm install

  #### ▶️ Ejecutar todos los tests en modo headless
  npm run test

  #### (Opcional) Abrir Cypress en modo interactivo
  npx cypress open

  ▶️ Ejecución por carpetas específicas
  Puedes ejecutar únicamente los tests de cada flujo:

  #### 🧑‍💼 Ejecutar solo los tests del flujo Organizador
  npx cypress run --spec "cypress/e2e/FlujoOrganizador/**/*.cy.js"

  #### 🛒 Ejecutar solo los tests del flujo Comprador
  npx cypress run --spec "cypress/e2e/FlujoComprador/**/*.cy.js"
  
### 📊 2. Plan de pruebas
  El plan de pruebas completo se encuentra en Google Sheets:
  👉 Plan de pruebas

### 🗂️ 3. Tablero Trello
  Los defectos encontrados fueron reportados y gestionados en Trello, asi como la asignacion de las tareas y evolución de las mismas:
  👉 Tablero de Trello

### 🌐 4. Repositorio público
  Este proyecto está disponible en GitHub:
  👉 Ticketazo Grupo 3
