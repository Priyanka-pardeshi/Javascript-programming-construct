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
var result=isPalindrom(1021);
if(result)
{
    console.log("Number is Palindrome");
}
else
{
    console.log("Number is Not Palindrome");
}