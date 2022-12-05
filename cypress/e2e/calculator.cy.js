describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display the correct total on multiple button clicks', () => {
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '15')
  })

  it('should display the correct running total when an arithmetical operation is made', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should display the correct running total when multiple arithmetical operations are chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should display a positive running total after an arithmetical operation is made', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should display a negative running total after an arithmetical operation is made', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should display decimals in running total after an arithmetical operation is made', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should display large numbers in running total after an arithmetical operation is made', () => {
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '500000000')
  })

  it('should display error message when dividing by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')
  })

})