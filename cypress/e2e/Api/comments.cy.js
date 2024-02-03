describe('API Tests', () => {
    it('should make a GET request and assert the response', () => {
        // Make a GET request to the API endpoint
        cy.request('https://jsonplaceholder.cypress.io/comments')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.length(500)
                expect(response).to.have.property('headers')
                expect(response).to.have.property('duration')
            })
    });
});
