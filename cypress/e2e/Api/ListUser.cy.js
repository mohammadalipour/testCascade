describe('API Tests', () => {
    it('should make a GET request and assert the response', () => {
        // Make a GET request to the API endpoint
        cy.request('https://reqres.in/api/users?page=2')
            .should((response) => {
                expect(response.status).to.eq(200)
            })
    });
});
