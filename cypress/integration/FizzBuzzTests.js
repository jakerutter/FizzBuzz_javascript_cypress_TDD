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

    describe('Calling fizzbuzz expecting buzz', function(){
        it('call fizzbuzz and it should "buzz" for multiples of five', function(){
            cy
            .fizzbuzz(20)
            .should('eq', 'buzz')
            .fizzbuzz(55)
            .should('eq', 'buzz')
            .fizzbuzz(230)
            .should('eq', 'buzz')
    });
});
