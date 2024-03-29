//fizzbuzz tests

describe('Calling fizzbuzz first time', function(){
    it('call fizzbuzz passing a number not divisible by 3 or 5 it will return same number', function(){
        cy
        .fizzbuzz(2)
        .should('eq', 2)
        .fizzbuzz(37)
        .should('eq', 37)
        .fizzbuzz(103)
        .should('eq', 103)
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

describe('Calling fizzbuzz expecting fizzBuzz', function(){
    it('call fizzbuzz and it should "fizzBuzz" for multiples of three AND five', function(){
        cy
        .fizzbuzz(15)
        .should('eq', 'fizzBuzz')
        .fizzbuzz(45)
        .should('eq', 'fizzBuzz')
        .fizzbuzz(225)
        .should('eq', 'fizzBuzz')
});
});