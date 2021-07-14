const isPrime=num=>{
    for(let i=2;i<num;i++)
    if(num%i===0) return false;
    return num>1;
}
var checkPrime =isPrime(72);
if(checkPrime)
{
    console.log("number is prime number");
}
else
{
    console.log("number is not prime number");
}