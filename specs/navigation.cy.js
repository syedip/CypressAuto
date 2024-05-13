describe('a nice description', () => {
    it('should visit the TabTracker', () => {
      cy.visit('https://www.google.co.in/');
    });
  });

  describe('a nice description', () => {
    it('should visit the TabTracker', () => {
      cy.visit('https://www.google.co.in/');
      cy.get(
        'input[aria-label="I\'m Feeling Lucky"]',
      ).should('be.visible');
    });
  });