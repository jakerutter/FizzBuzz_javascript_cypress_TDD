//fizzbuzz tests

describe('Calling fizzbuzz first time', function(){
    it('call fizzbuzz and it should return the number passed into it', function(){
        cy
        .fizzbuzz(2)
        .should('eq', 2)
    });
});