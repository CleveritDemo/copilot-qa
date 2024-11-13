# Adoption Copilot QA

## Descripción
Adoption Copilot es una herramienta diseñada para facilitar y automatizar procesos de prueba y desarrollo, integrando inteligencia
artificial a través de github Copilot, para mejorar la eficiencia y precisión en la creación de casos de prueba y escenarios de automatización. Esta herramienta
está orientada a testers que buscan optimizar los tiempos al momento de tener que crear script de pruebas sobre nuevas funcionalidades o regresivos.

## Alcance del Programa
1. El principal objetivo del programa es poder generar casos de pruebas automatizados utilizando la herramienta de GitHub Copilot.
2. Aprenderemos a utilizar la herramienta para generar casos de pruebas automatizados y a validar las respuestas generadas por la IA.
3. Utilizaremos el proyecto base de Cypress y Cucumber para implementar los casos de pruebas generados por Copilot.
4. Elaboraremos promtms utlizando haciendo refencia a toda una solución: @workspace o a un archivo en especifico #file.


## Políticas de Branching para resolver los ejercicios del programa Adoption Copilot

- **Branch Principal (`main`):**
    - Contiene siempre la versión más actualizada del `README.md`.
- **Ramas de Hands-On Resuelto (`solved`):**
    - Para este ejecicio realizaremos la creación de una branch con el prefijo `copilot`.
    - Ejemplo: `copilot/feature<nombre de la feature realizada>`, la cual será creada a partir de la branch `copilot_practico`.

## Pre-Requisitos / Instalación

### Pre-Requisitos
- **Node.js** instalado en tu sistema.
- **npm** (Node Package Manager) configurado.
- **Git** instalado para el control de versiones.
- Acceso a las siguientes páginas web para propósitos de prueba:
- [Automation Test Store](https://automationteststore.com/)
- [Tool Shop Demo](https://practicesoftwaretesting.com/)

### Instalación

1. **Clonar el repositorio:**
   ```bash
      git clone https://github.com/CleveritDemo/copilot-qa.git
   ```
2. **Cambiar a la branch/rama :**
   ```bash
   git checkout copilot_practico
   ```
3. **Crear nuestra propia rama de trabajo:**
   ```bash
   git checkout -b copilot/feature/testcases_<iniciales de nombre y apellido>
   ``` 
4. **Instalar las dependencias:**
   ```bash
   npm install
   ```
   ```bash
   npm install cypress
   ```

5. **Ejecutar pruebas automatizadas:**
   ```bash
   npm run cypress:open   
   ```

## Pasos para Realizar el Hands-On

### 1. **Configuración Inicial:**
Asegúrate de haber completado todos los pasos de instalación y pre-requisitos.
   
### 2. **Ejercicios:**

#### 2.1 **Creación de Casos de Prueba:**
Utilizaremos prompts personalizados para generar casos de prueba mediante la utilización de Github Copilot dentro de nuestro marco de trabajo.

- ### Ejemplo de prompt 1: Caso Base: ***Búsqueda en Google***
Con este ejercicio vamos a realizar la primera consulta a nuestro chat de copilot y analizar la respuesta nos devuelve copilot y como está compuesto el prompts que utilizamos.
  
  ```bash
    Crea un test en Cypress con Cucumber que vaya a la página de Google y realice una búsqueda por el término "Microsoft Copilot | IA de Microsoft" y que verifique en la página de resultados si el título es correcto.
   ```
- ###  Respuesta de Copilot:
Lo que ocurre con esta respuesta, es que el resultado de nuestra consulta no es lo que realmente nosotros necesitamos o queremos realizar. Es por ello que es importante que podamos ser más específicos en nuestras consultas
para asi obtener respuestas de calidad.

A pesar de que la respuesta obtenida no es la esperada, sirve para que podamos ejercitar en un primero momento como es interactuar con el chat de Github Copilot, lo que nos permitirá identificar otros aspectos importantes que debemos especificar en nuestro prompt para obtener una respuesta más acertada.

- ### Ejemplo de prompt 2: Caso Base: ***Búsqueda en Google con más especificaciones***
Con este ejercicio la idea es mejorar la calidad de respuesta obtenida por a través del chat de Github Copilot, para ello debemos ser más específicos en nuestra consulta y darle más detalles de lo que necesitamos.

   ```bash
    Crear un test utilizando la estructura de este proyecto que vaya a la página de Google y haga una búsqueda por el término "Microsoft Copilot | IA de Microsoft" y que verifique en la página de resultados si el titulo es correcto. Que utilice el archivo .feature para escribir los escenarios en lenguaje gherkin, que utilice la clase step_definitions para crear los pasos que conectan las page, y que utilice las pages para que cree los método necesarios.   
   ```

- ###  Respuesta de Copilot:
**Plan**
1.	Crear un archivo .feature para definir el escenario de prueba en lenguaje Gherkin.
2.	Crear una clase step_definitions para implementar los pasos que conectan las páginas.
3.	Crear una clase pages para definir los métodos necesarios para la interacción con la página de Google.

**Código**
1. Crear el archivo .feature: Crea un archivo google_search.feature en cypress/integration:
 ```bash
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GooglePage from '../pages/google_page';

const googlePage = new GooglePage();

Given('I open Google page', () => {
  googlePage.visit();
});

When('I search for {string}', (searchTerm) => {
  googlePage.search(searchTerm);
});

Then('the title should contain {string}', (title) => {
  googlePage.verifyTitle(title);
});
   ```
2. Crear la clase step_definitions: Crea un archivo google_search_steps.js en cypress/integration/step_definitions:
 ```bash
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GooglePage from '../pages/google_page';

const googlePage = new GooglePage();

Given('I open Google page', () => {
  googlePage.visit();
});

When('I search for {string}', (searchTerm) => {
  googlePage.search(searchTerm);
});

Then('the title should contain {string}', (title) => {
  googlePage.verifyTitle(title);
});
   ```
3. Crear la clase pages: Crea un archivo google_page.js en cypress/integration/pages:
 ```bash
   class GooglePage {
visit() {
cy.visit('https://www.google.com');
}

search(term) {
cy.get('input[name="q"]').type(`${term}{enter}`);
 }

verifyTitle(title) {
cy.title().should('include', title);
 }
}
export default GooglePage;
   ```
4. Ejecutar el test
   Para ejecutar el test, usa el siguiente comando en la terminal:
    ```bash
    npm run cypress:open
    ```

Luego selecciona el archivo google_search.feature en la interfaz de Cypress para ejecutar el test.

### - Correcciones a este ejemplo:
- import `GooglePage` from '../../page_objects/googlePage';
- element método `search` = '#APjFqb'

### Reflexiones sobre el ejercicio:
***NO TODO ES PERFECTO, PERO SI PODEMOS MEJORARLO:***    

Es importante destacar es necesario revisar que el código provisto tenga sentido y que los elementos propuestos sean los que necesitamos para realizar las acciones que deseamos.

Ahora este resultado es un poco más acertado respeto a lo que nosotros buscamos obtener como respuesta ante la indicación solicitada. Es importante tener en cuenta que el código generado por Github Copilot no es perfecto, es por ello que `SIEMPRE` debemos realizar revisiones sobre las sugerencias que nos realiza y las correcciones correspondientes en caso de ser necesarias. 

Otro aspecto importante a destacar en este ejercicio, es la forma en la que interactuamos con esta versión de copilot, ya que no es la mas apropiada dentro de este contexto de uso. En el ejercicio realizado no utilizamos y no tuvimos en cuenta los elementos de referencia propios del uso del Github copilot y es practicamente como si estuviesemos interactuando en la version de copilot del browser o con otro chat de IA.

### Ejemplo de prompt 3: Uso de commands de Github Copilot: ***@workspace***
En este ejercicio vamos a crear un test utilizando el comando de github Copilot `@workspace` para que pueda tener el contexto de todo el proyecto, de esta forma vamos a obtener una respuesta más acertada.
 ```bash
@workspace Teniendo en cuenta la estructura del framework, crear un test que: 1 Que navegue a la página de "https://automationteststore.com/", 2 Que realice una búsqueda del producto título “Tropiques Minerale Loose Bronzer”, 3 Que lo agregue al carrito de compras, 4 Que realice una validación que está incluido en el carrito de compras el producto   ```
 ```
- ###  Respuesta de Copilot:
Para crear un test en Cypress que cumpla con los requisitos mencionados, sigue estos pasos:

1. Crear un archivo automation_test_store.feature en cypress/e2e/. 
2. Agregar el siguiente código al archivo automation_test_store.feature:
 ```bash
Feature: Automation Test Store

  Scenario: Add Benefit Bella Bamba to the shopping cart
    Given I navigate to the Automation Test Store page
    When I search for the product titled "Tropiques Minerale Loose Bronzer"
    And I add the product to the shopping cart
    Then the product should be included in the shopping cart
   ```
3. Crear un archivo automation_test_store_steps.js en cypress/e2e/step_definitions/.
4. Agregar el siguiente código al archivo automation_test_store_steps.js:
 ```bash
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AutomationTestStorePage from '../../page_objects/automation_test_store_page';

const automationTestStorePage = new AutomationTestStorePage();

Given('I navigate to the Automation Test Store page', () => {
  automationTestStorePage.visit();
});

When('I search for the product titled {string}', (productTitle) => {
  automationTestStorePage.search(productTitle);
});

When('I add the product to the shopping cart', () => {
  automationTestStorePage.addToCart();
});

Then('the product should be included in the shopping cart', () => {
  automationTestStorePage.verifyProductInCart();
});
   ```

5. Crear un archivo automation_test_store_page.js en cypress/page_objects/.
6. Agregar el siguiente código al archivo automation_test_store_page.js:
 ```bash
class AutomationTestStorePage {
  visit() {
    cy.visit('https://automationteststore.com/');
  }

  search(productTitle) {
    cy.get('input[name="search"]').type(`${productTitle}{enter}`);
  }

  addToCart() {
    cy.get('.productcart').click();
  }

  verifyProductInCart() {
    cy.get('.cart_total').should('contain', 'Tropiques Minerale Loose Bronzer');
  }
}

export default AutomationTestStorePage;
   ```
7. Ejecutar el test
   Para ejecutar el test, usa el siguiente comando en la terminal:
    ```bash
    npm run cypress:open
    ```
Luego selecciona el archivo automation_test_store.feature en la interfaz de Cypress para ejecutar el test.

### - Correcciones a este ejemplo:
- Elemento: `'input[name="search"]'` por `‘#filter_keyword’`
- Elemento: `'.productcart'`  Por `'.cart'`
- Elemento  `.cart_total` por `.product-list`


### Reflexiones sobre el ejercicio:
Como podemos observar solamente tuvimos errores relacionados a elementos/selectores y es algo que muy esperable dentro del contexto de uso que le estamos dando.
En esta oportunidad no tuvimos que realizar la corrección de la ruta de la clase page_objects, ya que la respuesta generada por copilot fue la correcta y esto es porque tiene el contexto de las referencias del proyecto.

### Ejemplo de prompt 4: Uso de commands de Github Copilot: ***@workspace*** - Crear mas de un test en la indicación. Reutilizar clases existentes
Con este ejercicio vamos a crear 2 escenarios de prueba nuevamente utilizando nuevamente el comando de github Copilot `@workspace` y le vamos a indicar una instrucción extra para que mejore la forma en la que utilizamos los elementos de las clases page_objects.
  ```bash
@workspace Teniendo en cuenta la estructura del framework, crear 2 escenarios que: Test 1: a. Que navegue a la página de https://automationteststore.com/, b. Realizar una búsqueda del producto título “Total Moisture Facial Cream”, c. Que lo agregue al carrito de compras, d. Realiza una validación que está incluido en el carrito de compras el producto, e. Y que presione el botón de seguir comprando, Test 2: a. Que navegue a la página de https://automationteststore.com/, b. Realizar una búsqueda del producto título “Acqua Di Gio Pour Homme”, c. Que valide que el producto no se encuentra en stock, d. Crear una constante en la clase page_objects que se llame selectores que contenga los elementos, e. Reutilizar las clases y archivos existentes
   ```
- ###  Respuesta de Copilot:
1. Archivo de características (Feature File)
   Crea o edita el archivo: cypress/e2e/specs/automation_test_store.feature con el siguiente contenido:
  ```bash
Feature: Automation Test Store

  @test_01
  Scenario Outline: Add Benefit Bella Bamba to the shopping cart
    Given I navigate to the Automation Test Store page
    When I search for the product titled "<productTitle>"
    And I add the product to the shopping cart
    Then the product should be included in the shopping cart "<productTitle>"
    Examples:
    | productTitle                     |
    | Tropiques Minerale Loose Bronzer |

   @test_02
   Scenario Outline: Add Total Moisture Facial Cream to the shopping cart
    Given I navigate to the Automation Test Store page
    When I search for the product titled "<productTitle>"
    And I add the product to the shopping cart
    Then the product should be included in the shopping cart "<productTitle>"
    And I continue shopping
  Examples:
    | productTitle                |       
    | Total Moisture Facial Cream |

  @test_03
  Scenario: Validate out of stock product
    Given I navigate to the Automation Test Store page
    When I search for the product titled "Acqua Di Gio Pour Homme"
    Then the product should be out of stock
   ```

2. Definiciones de pasos (Step Definitions)
   Asegúrate de que el archivo cypress/e2e/step_definitions/automation_test_store_steps.js contenga las definiciones de pasos necesarias:
  ```bash
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AutomationTestStorePage from '../../page_objects/automation_test_store_page';

const automationTestStorePage = new AutomationTestStorePage();

Given('I navigate to the Automation Test Store page', () => {
  automationTestStorePage.visit();
});

When('I search for the product titled {string}', (productTitle) => {
  automationTestStorePage.search(productTitle);
});

When('I add the product to the shopping cart', () => {
  automationTestStorePage.addToCart();
});

Then('the product should be included in the shopping cart {string}', (productTitle) => {
  automationTestStorePage.verifyProductInCart(productTitle);
});
Then('I continue shopping', () => {
  automationTestStorePage.continueShopping();
});

Then('the product should be out of stock', () => {
  automationTestStorePage.verifyOutOfStock();
});
   ```

3. Página de objetos (Page Objects)

Asegúrate de que el archivo [`cypress/page_objects/automation_test_store_page.js`] contenta los siguientes métodos:
```js
const selectores = {
   inputSearch: '#filter_keyword',
   btnAddToCart: '.cart',
   cartTotal: '.product-list',
   btnContinueShopping: '.continue_shopping',
   outOfStockMessage: '.nostock'
};

class AutomationTestStorePage {
   visit() {
      cy.visit('https://automationteststore.com/');
   }

   search(productTitle) {
      cy.get(selectores.inputSearch).type(`${productTitle}{enter}`);
   }

   addToCart() {
      cy.get(selectores.btnAddToCart).click();
   }

   verifyProductInCart(productTitle) {
      cy.get(selectores.cartTotal).should('contain', productTitle);
   }

   continueShopping() {
      // cy.get(selectores.btnContinueShopping).click();
      cy.contains('Continue Shopping').click();
   }

   verifyOutOfStock() {
      cy.get(selectores.outOfStockMessage).should('be.visible');
   }

}

export default AutomationTestStorePage;
```

Con estos archivos configurados, tus tests deberían navegar a la página de Automation Test Store, realizar las búsquedas de los productos especificados, agregar productos al carrito de compras, validar que los productos están en el carrito y verificar si un producto está fuera de stock.

4. Ejecutar el test
   Para ejecutar el test, usa el siguiente comando en la terminal:
    ```bash
    npm run cypress:open
    ```
Luego selecciona el archivo automation_test_store.feature en la interfaz de Cypress para ejecutar el test.

### - Correcciones a este ejemplo:
- Elemento: `'.out_of_stock'` por `‘.nostock’`
- Metodo: `cy.get(selectores.btnContinueShopping).click();` por `cy.contains('Continue Shopping').click();`

### Reflexiones sobre el ejercicio:
En este ejercicio vemos que fue posible que nos creara dos escenarios diferentes y que reutilizara las clases y archivos existentes, lo cual es un punto muy positivo. En este caso tuvimos que realizar correcciones en los elementos de referencia y en los métodos de las clases page_objects, pero en general la respuesta fue muy acertada. Otra cosa que conseguimos en esta respuesta fue ordenar los elementos dentro de una constante.

### Ejemplo de prompt 5: Uso de commands de Github Copilot: ***@workspace + #file*** - Crear escenarios de pruebas a partir de información un historia de usuario en un archivo .txt
Con este ejercicio vamos a estar creando 4 escenarios de pruebas, nuevamente utilizando nuevamente el comando de github Copilot `@workspace`. También estaremos incluyendo el comando #file para hacer referencia a un archivo .txt que contiene la información de una historia de usuario.
  ```bash
 @workspace Teniendo en cuenta la estructura del framework, crear 4 escenarios de prueba y que obtener los criterios de aceptación de la historia de usuario del archivo #file:userHistory.txt 
   ```
- ###  Respuesta de Copilot:
Para crear los 4 escenarios de prueba basados en los criterios de aceptación de la historia de usuario del archivo userHistory.txt, sigue estos pasos:

1. Archivo de características (Feature File). Crea o edita el archivo cypress/e2e/specs/search_product.feature con el siguiente contenido:
  ```bash
Feature: Search Products

  Scenario: Verify search bar is available on all pages
    Given I navigate to the Automation Test Store homepage
    Then the search bar should be available on all pages

  Scenario Outline: Search for a product and verify relevant results
    Given I navigate to the Automation Test Store homepage
    When I search for the product titled "<productTitle>"
    Then the search results should be relevant and show products matching the keyword "<productTitle>"
    Examples:
      | productTitle                     |
      | Tropiques Minerale Loose Bronzer |

  Scenario: Verify product preview in search results
    Given I navigate to the Automation Test Store homepage
    When I search for the product titled "Benefit Bella Bamba"
    Then the search results should show a preview of the products including image, name, and price

  Scenario: Search for a non-existent product
    Given I navigate to the Automation Test Store homepage
    When I search for the product titled "NonExistentProduct"
    Then the search results should indicate no products found with the message "There is no product that matches the search criteria"  
   ```

2. Definiciones de pasos (Step Definitions). Asegúrate de que el archivo cypress/e2e/step_definitions/search_product_steps.js contenga las definiciones de pasos necesarias:
  ```bash
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AutomationTestStorePage from '../../page_objects/automation_test_store_page';

const automationTestStorePage = new AutomationTestStorePage();

Given('I navigate to the Automation Test Store homepage', () => {
  automationTestStorePage.visit();
});

Then('the search bar should be available on all pages', () => {
  automationTestStorePage.verifySearchBar();
});

When('I search for the product titled {string}', (productTitle) => {
  automationTestStorePage.search(productTitle);
});

Then('the search results should be relevant and show products matching the keyword {string}', (productTitle) => {
  automationTestStorePage.verifyRelevantSearchResults(productTitle)
});

Then('the search results should show a preview of the products including image, name, and price', () => {
  automationTestStorePage.verifyProductPreview();
});

Then('the search results should indicate no products found with the message {string}', (message) => {
  automationTestStorePage.verifyNoProductsFound(message);
});
   ```

3. Página de objetos (Page Objects). Asegúrate de que el archivo cypress/page_objects/automation_test_store_page.js contenga los métodos necesarios y la constante selectores:
  ```bash
const selectores = {
  inputSearch: '#filter_keyword',
  btnAddToCart: '.cart',
  cartTotal: '.product-list',
  btnContinueShopping: '.continue_shopping',
  outOfStockMessage: '.nostock',
  searchBar: '#filter_keyword',
  searchResults: '#product_details',
  productPreview: '#maincontainer',
  noProductsFound: '.no-products-found'
};

class AutomationTestStorePage {
  visit() {
    cy.visit('https://automationteststore.com/');
  }

  search(productTitle) {
    cy.get(selectores.inputSearch).type(`${productTitle}{enter}`);
  }

  addToCart() {
    cy.get(selectores.btnAddToCart).click();
  }

  verifyProductInCart(productTitle) {
    cy.get(selectores.cartTotal).should('contain', productTitle);
  }

  continueShopping() {
   // cy.get(selectores.btnContinueShopping).click();
   cy.contains('Continue Shopping').click();
  }

  verifyOutOfStock() {
    cy.get(selectores.outOfStockMessage).should('be.visible');
  }
  verifySearchBar() {
    cy.get(selectores.inputSearch).should('be.visible');
    //cy.get(selectores.searchBar).should('be.visible');
  }

  verifyRelevantSearchResults(message) {
    cy.get(selectores.searchResults).should('contain', message );
  }

  verifyProductPreview() {
    cy.get(selectores.productPreview).should('be.visible');
    cy.get(selectores.productPreview).find('img').should('be.visible');
    cy.get(selectores.productPreview).find('.bgnone').should('be.visible');
    cy.get(selectores.productPreview).find('.productpageprice').should('be.visible');
  }

  verifyNoProductsFound(message) {
    cy.get(selectores.productPreview).should('be.contain', message);
  }
  
}

export default AutomationTestStorePage;
   ```
Con estos archivos configurados, tus tests deberían verificar que la barra de búsqueda está disponible en todas las páginas, realizar búsquedas de productos específicos, validar que los resultados de búsqueda son relevantes y muestran una vista previa de los productos, y manejar búsquedas de productos no existentes.

4. Ejecutar el test
   Para ejecutar el test, usa el siguiente comando en la terminal:
    ```bash
    npm run cypress:open
    ```
Luego selecciona el archivo search_product.feature en la interfaz de Cypress para ejecutar el test.

### - Correcciones a este ejemplo:
- Elemento: `searchBar'` por `inputSearch`
- Elemento: `#product_details` por `.product-list`
- Elemento: `.product-preview` por `#maincontainer`
- Elemento: `.name` por `.bgnone`
- Elemento: `.price` por `.productpageprice`
Otros modificaciones que se realizaron fueron para crear parametros de ingreso de datos a través de la creación de escenarios outline.
### Reflexiones sobre el ejercicio:
Este ejercicio ofrece grandes beneficios ya que es posible que podamos tener de alguna forma la información de un documento de requerimiento y que podamos utilizarla para crear escenarios de pruebas. Nuevamente es importante que revisemos y analicemos cada respuesta y realicemos los ajustes correspondientes. 
En todo este tiempo hemos realizar ejercicios que nos han permitido construir 8 casos de prueba en total, los cuales han sido generados por Github Copilot y que han sido ejecutados en nuestro proyecto base de Cypress y Cucumber en un tiempo relativamente corto.

### Ejemplo de prompt 6: Uso de commands de Github Copilot: ***@workspace + #file*** - Crear escenarios de pruebas a partir de un archivo en formato .cvs
Con este ejercicio vamos a estar creando 7 escenarios de pruebas, nuevamente utilizando nuevamente el comando de github Copilot `@workspace`. También estaremos incluyendo el comando #file para hacer referencia a un archivo .cvs que contiene el detalle del paso a paso de los casos de prueba.
  ```bash
 @workspace Teniendo en cuenta la estructura del framework, crear los 7 escenarios de prueba que se encuentran dentro del archivo #file:testcases.csv . Estos escenarios de prueba pertenecen a la url: https://practicesoftwaretesting.com. 
   ```
- ###  Respuesta de Copilot:
Para crear los 7 escenarios de prueba basados en el archivo testcases.csv, sigue estos pasos:

1. Archivo de características (Feature File). Crea o edita el archivo cypress/e2e/specs/practice_software_testing.feature con el siguiente contenido:
  ```bash
 Feature: Practice Software Testing

  Scenario: Verificar la selección de un producto
    Given I navigate to the Practice Software Testing homepage
    When  I select a product
    Then  the selected product should be shown on the product details page

  Scenario Outline: Verificar la búsqueda en el search
    Given I navigate to the Practice Software Testing homepage
    When  I enter a search term in the search bar "<productName>"
    And   I click the search button
    Then  the results should show products related to the search term "<productName>"
    Examples:
        | productName                           | 
        | Claw Hammer with Shock Reduction Grip | 

  Scenario: Verificar el uso de filtros
    Given I navigate to the Practice Software Testing homepage
    When I apply search filters " Hand Saw "
    Then the listed products should update to reflect the applied filters

  Scenario: Verificar la adición de un producto al carrito
    Given I navigate to the Practice Software Testing homepage
    When I select a product
    And I click 'Add to Cart'
    Then the product should be added to the cart and the cart icon should update

  Scenario: Verificar la eliminación de un producto del carrito
    Given I navigate to the Practice Software Testing homepage
    And I select a product
    And I click 'Add to Cart'
    And I go to the shopping cart
    When I remove the product from the cart
    Then the product should be removed from the cart and the cart icon should update

  Scenario: Verificar la cantidad de productos en el carrito
    Given I navigate to the Practice Software Testing homepage
    And I select a product
    When I add multiple products to the cart
    And I go to the shopping cart
    Then the total number of products in the cart should reflect the number of items added

  Scenario: Verificar la funcionalidad de búsqueda con filtros aplicados
    Given I navigate to the Practice Software Testing homepage
     When I apply search filters "Measures"
    And   I enter a search term in the search bar "Measure"
    And I click the search button
    Then the results should show products that meet both the search term and applied filters "Measure" 
   ```
2. Definiciones de pasos (Step Definitions). Asegúrate de que el archivo cypress/e2e/step_definitions/practice_software_testing_steps.js contenga las definiciones de pasos necesarias:
  ```bash
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PracticeSoftwareTestingPage from '../../page_objects/practice_software_testing_page';

const practiceSoftwareTestingPage = new PracticeSoftwareTestingPage();

Given('I navigate to the Practice Software Testing homepage', () => {
practiceSoftwareTestingPage.visit();
});

When('I select a product', () => {
practiceSoftwareTestingPage.selectProduct();
});

Then('the selected product should be shown on the product details page', () => {
practiceSoftwareTestingPage.verifyProductDetails();
});

When('I enter a search term in the search bar {string}', (productName) => {
practiceSoftwareTestingPage.enterSearchTerm(productName);
});

When('I click the search button', () => {
practiceSoftwareTestingPage.clickSearchButton();
});

Then('the results should show products related to the search term {string}', (productName) => {
practiceSoftwareTestingPage.verifySearchResults(productName);
});

When('I apply search filters {string}', (filter) => {
practiceSoftwareTestingPage.applyFilters(filter);
});

Then('the listed products should update to reflect the applied filters', () => {
practiceSoftwareTestingPage.verifyFilteredResults();
});

When('I click \'Add to Cart\'', () => {
practiceSoftwareTestingPage.addToCart();
});

Then('the product should be added to the cart and the cart icon should update', () => {
practiceSoftwareTestingPage.verifyProductInCart();
});

When('I add a product to the cart', () => {
practiceSoftwareTestingPage.addToCart();
});

When('I go to the shopping cart', () => {
practiceSoftwareTestingPage.goToCart();
});

When('I remove the product from the cart', () => {
practiceSoftwareTestingPage.removeFromCart();
});

Then('the product should be removed from the cart and the cart icon should update', () => {
practiceSoftwareTestingPage.verifyProductRemovedFromCart();
});

When('I add multiple products to the cart', () => {
practiceSoftwareTestingPage.selectToProduct();
practiceSoftwareTestingPage.selectToProduct();
practiceSoftwareTestingPage.addToCart();
//practiceSoftwareTestingPage.addMultipleProductsToCart();
});

Then('the total number of products in the cart should reflect the number of items added', () => {
practiceSoftwareTestingPage.verifyCartQuantity();
});

Then('the results should show products that meet both the search term and applied filters {string}', (productName) => {
practiceSoftwareTestingPage.verifyFilteredSearchResults(productName);
});
   ```
3. Página de objetos (Page Objects). Asegúrate de que el archivo cypress/page_objects/practice_software_testing_page.js contenga los métodos necesarios y la constante selectores:

  ```bash
  const selectores = {
  inputSearch: '[data-test="search-query"]',
  btnSearch: '[data-test="search-submit"]',
  productItem: '[class="card"]',
  productDetails: '[data-test="product-description"]',
  btnAddToCart: '[data-test="add-to-cart"]',
  btnAddProduct: '[data-test="increase-quantity"]',
  cartIcon: '[data-test="cart-quantity"]',
  cardQuantity: '[class="form-control quantity"]',
  cartItem: '.cart-item',
  btnRemoveFromCart: '[class="btn btn-danger"]',
  cartQuantity: '#cart-quantity',
  filterOptions: '.filter-options',
  filteredResults: '.filtered-results'
};

class PracticeSoftwareTestingPage {
  visit() {
    cy.visit('https://practicesoftwaretesting.com/');
  }

  selectProduct() {
    cy.get(selectores.productItem).first().click();
  }

  verifyProductDetails() {
    cy.get(selectores.productDetails).should('be.visible');
  }

  enterSearchTerm(productName) {
    cy.get(selectores.inputSearch).type(productName);
  }

  clickSearchButton() {
    cy.get(selectores.btnSearch).click();
  }

  verifySearchResults(productName) {
    cy.get(selectores.productItem).should('contain', productName);
  }

  applyFilters(filter) {
    cy.contains(filter).click();
    //cy.get(selectores.filterOptions).check();
  }

  verifyFilteredResults() {
    cy.get(selectores.productItem).should('be.visible');
    //cy.get(selectores.filteredResults).should('be.visible');
  }

  selectToProduct() {
    cy.get(selectores.btnAddProduct).click();
  }
  addToCart() {
    cy.get(selectores.btnAddToCart).click();
  }

  verifyProductInCart() {
    cy.get(selectores.cartIcon).should('contain', '1');
  }

  goToCart() {
    cy.get(selectores.cartIcon).click();
  }

  removeFromCart() {
    cy.get(selectores.btnRemoveFromCart).click();
  }

  verifyProductRemovedFromCart() {
    cy.get(selectores.cardQuantity).should('not.contain', '1');
  }

  addMultipleProductsToCart() {
    cy.get(selectores.btnAddToCart).each(($el, index, $list) => {
      if (index < 3) {
        cy.wrap($el).find(selectores.btnAddToCart).click();
      }
    });
  }

  verifyCartQuantity() {
    cy.get(selectores.cartIcon)
    .should('contain', '3');
  }

  verifyFilteredSearchResults(productName) {
    cy.get(selectores.productItem).should('contain', productName);
  }
}

export default PracticeSoftwareTestingPage;
   ```

Con estos archivos configurados, tus tests deberían cubrir los 7 escenarios de prueba especificados en el archivo testcases.csv para la URL https://practicesoftwaretesting.com.

4. Ejecutar el test
   Para ejecutar el test, usa el siguiente comando en la terminal:
    ```bash
    npm run cypress:open
    ```
Luego selecciona el archivo practice_software_testing.feature en la interfaz de Cypress para ejecutar el test.

### - Correcciones a este ejemplo:
Para este ejemplo realizamos correcciones en los elementos de referencia y en los métodos de las clases page_objects asi como en los pasos en gherking para que el codigo generado pudiera ser aprovechado por otros test.
  Otros modificaciones que se realizaron fueron para crear parametros de ingreso de datos a través de la creación de escenarios outline.
### Reflexiones sobre el ejercicio:
Este ejercicio ofrece grandes beneficios ya que es posible que podamos tener de alguna forma la información de un documento de requerimiento y que podamos utilizarla para crear escenarios de pruebas. Nuevamente es importante que revisemos y analicemos cada respuesta y realicemos los ajustes correspondientes.
Durante todo el practico hemos logrado construir un total de 15 casos de prueba, los cuales han sido con la ayuda de Github Copilot. El tiempo dedicado para su realización evidencia el gran beneficio que obtenemos al utilizarlo en nuestro flujo de trabajo y que nos permite ser más eficientes en la creación de casos de pruebas automatizados.

## Prácticas Recomendadas con para seguir utilizando el programa de Adoption Copilot

- **Validación de Respuestas:**
   - Siempre verificar y validar las respuestas generadas por la IA, ya que pueden contener errores o requerir mejoras.
- **Experiencia del Usuario:**
   - Recordar que los usuarios son los expertos en la materia y deben utilizar su criterio para ajustar y perfeccionar las respuestas de la IA.
- **Prompts para Casos de Prueba:**
   - Elaborar prompts claros y detallados para obtener resultados precisos en la generación de casos de prueba y recuerda utilizar dentro de tu contexto de trabajo los comandos o elementos que provee copilot que puedas utilizar de una formas mas conveniente y oportuna. 

¡Gracias por utilizar Adoption Copilot! Para cualquier duda o contribución, no dudes en abrir una issue o pull request en el repositorio. ¡Buena suerte en tus proyectos! 🚀
