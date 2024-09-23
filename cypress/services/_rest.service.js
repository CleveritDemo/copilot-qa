export default class Rest {

  static execute(method, endpoint, headers, body) {

    let req = {"method": method, "url": endpoint, "header": headers, "body": body}
    cy.log(JSON.stringify(req))

    return cy.request({
      method: method,
      url: endpoint,
      headers: headers,
      body: body,
      failOnStatusCode: false,
    });
  }

  static executeCuitGet(method, endpoint, headers) {
    return cy.request({
      method: method,
      url: endpoint,
      headers: headers,
      failOnStatusCode: false,
    });
  }

    static executeNupGet(method, endpoint, headers) {
        return cy.request({
            method: method,
            url: endpoint,
            headers: headers,
            failOnStatusCode: false,
        });
    }

  static get(endpoint, headers) {
    return cy.request({
      method: "GET",
      url: endpoint,
      headers: headers,
      failOnStatusCode: false,
    });
  }

  static post(endpoint, body) {
    return cy.request({
      method: "POST",
      url: endpoint,
      body: body,
      failOnStatusCode: false,
    });
  }

  static put(endpoint, body) {
    return cy.request({
      method: "PUT",
      url: endpoint,
      body: body,
      failOnStatusCode: false,
    });
  }
}
