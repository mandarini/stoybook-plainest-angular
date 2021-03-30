describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mytestcomponent--primary&knob-name&knob-age&knob-other'));

  it('should render the component', () => {
    cy.get('plainest-angular-my-test').should('exist');
  });
});
