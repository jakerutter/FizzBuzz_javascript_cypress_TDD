//fizzbuzz tests

describe('Calling fizzbuzz first time', function(){
    it('call fizzbuzz and it should return the number passed into it', function(){
        cy
        .fizzbuzz(2)
        .should('eq', 2)
    });
});

describe('Calling fizzbuzz expecting fizz', function(){
    it('call fizzbuzz and it should "fizz" for multiples of three', function(){
        cy
        .fizzbuzz(9)
        .should('eq', 'fizz')
        .fizzbuzz(39)
        .should('eq', 'fizz')
        .fizzbuzz(303)
        .should('eq', 'fizz')
    });
});