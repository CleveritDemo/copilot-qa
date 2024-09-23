// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('waitLoad', () => {
//   const imgCarregando = '//*[@id="container"]/main/div[4]/div';
//   cy.xpath(imgCarregando, { timeout: Cypress.env('global_timeout') }).should('not.be.visible');
// });

import 'cypress-file-upload';
import "cypress-localstorage-commands";
import users from "../services/users";
import {stringify} from "mocha/lib/utils";

let authorization;
let response;
let resUser;


// ejemplo para utlizar un command para realizar una petición
Cypress.Commands.add('postUser', (body) => {
    return users.postUser(body)
        .then(res => {
            cy.log(`👉 3 RESPONSE:: RESPONSE BRAND :: ${JSON.stringify(res, null, "\t")}`)
            response = res
            resUser =  res.response

            cy.wrap(resUser).as('resUser');
        })

});

Cypress.Commands.add('getUser', (id) => {
    return users.getUser(id)
        .then(res => {
            cy.log(`👉 3 RESPONSE:: RESPONSE BRAND :: ${JSON.stringify(res, null, "\t")}`)
            response = res
            //resUser =  res.response

            cy.wrap(response).as('resGetUser');
        })

});