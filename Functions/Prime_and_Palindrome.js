function isPrime(num)
{
    for(let i=2;i<num;i++)
    if(num%i===0) return false;
    return num>1;
}
function isPalindrom(num)
{
    const isNegative=num<0?true:false;
    if(isNegative)
    {
        return false;
    }
    const Check=num;
    let reversed=0;
    while(num>0)
    {
        reversed=(reversed*10)+(num%10);
        num=parseInt(num/10);
    }
    return reversed==Check;
}
var checkPrime = isPrime(121);
var checkPalindrome=isPalindrom(121);
if(checkPrime==true && checkPalindrome==true)
{
    console.log("number is prime and Palindrome number");
}
else
{
    console.log("number is not prime or palindrom number");
}