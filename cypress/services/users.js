import Rest from "./_rest.service";
import BaseURL from "../plugins/cypress/config/prod.json";

let url = BaseURL.amb[Cypress.env("entorno")]["baseUrlBack"]
const headers = {
    'Content-Type': 'application/json'
}
export default class users extends Rest {
    static postUser() {

// existe como posibilidad de completar a la URL base de una API dependiendo del enpoint que se desea automatizar
       // let valid_url = `${url}/get_brands?id=${idAsset}`;

        return super.post(url, headers);
    }

    static getUser(id) {

// existe como posibilidad de completar a la URL base de una API dependiendo del enpoint que se desea automatizar
        let valid_url = `${url}/${id}`;

        return super.get(valid_url, headers);
    }
}
