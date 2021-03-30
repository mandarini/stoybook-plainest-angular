describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('plainest-angular-root').should('exist');
  });
});
