var primeArray = [];
function IsPrime(integer) {
    //starting loop from 2
    for (i = 2; i < integer / 2; i++) {
        if (integer % i == 0) {

            //checking if divisor is prime
            for (var j = 2; j <= i / 2; j++) 
            {
                if (i >= j && i % j == 0) 
                {
                    ++counter;
                }
            }
            if (counter == 1) 
            {
                primeNumbers = primeNumbers + i + "  ";
            }
        }
    }
}
IsPrime(234);