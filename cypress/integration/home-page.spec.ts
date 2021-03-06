/// <reference types="Cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('moet de homepage laten zien', () => {
    expect(cy.contains('Vollo'));
  });

  it('moet inloggen', () => {
    inloggen('m1');

    expect(cy.contains('Welkom terug'));
    cy.getCookie('vollo_token').should('not.be.empty');
  });

  it('moet foutmelding tonen bij onjuist inloggen', () => {
    inloggen('mbestaatniet');

    expect(cy.contains('Onjuiste gebruikersnaam en/of wachtwoord'));
    cy.get('[aria-label="Gebruikermenu"]').should('be.disabled');
    cy.getCookie('vollo_token').should('be.null');
  });

  it('moet gebruikermenu tonen', () => {
    inloggen('m1');

    cy.get('[aria-label="Gebruikermenu"]').click();

    expect(cy.contains('Ingelogd als m1'));
    expect(cy.contains('Uitloggen'));
    cy.get('[aria-label="Gebruikermenu"]').should('not.be.disabled');
  });

  it('moet ingelogd blijven na verversen pagina', () => {
    inloggen('m1');

    cy.reload();

    cy.get('[aria-label="Gebruikermenu"]').should('not.be.disabled');
    cy.getCookie('vollo_token').should('not.be.empty');
  });

  it('moet uitloggen', () => {
    inloggen('m1');
    cy.get('[aria-label="Gebruikermenu"]').click();

    cy.get('[aria-label="Uitloggen"]').click();

    cy.get('[aria-label="Gebruikermenu"]').should('be.disabled');
    cy.getCookie('vollo_token').should('be.null');
  });

  function inloggen(gebruiker: string) {
    cy.get('[name="gebruikersnaam"]').type(gebruiker);
    cy.get('[name="wachtwoord"]').type(gebruiker);
    cy.get('button[type="submit"]').click();
  }
});
