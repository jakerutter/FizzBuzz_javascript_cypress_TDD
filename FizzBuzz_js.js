//fizz buzz exercise

function fizzbuzz(number){
    if(number % 3 == 0 && number % 5 == 0){
        return "fizzBuzz";
    }
    if (number % 3 == 0){
        return "fizz";
    }
    if(number % 5 == 0){
        return "buzz";
    }
    return number;
}


