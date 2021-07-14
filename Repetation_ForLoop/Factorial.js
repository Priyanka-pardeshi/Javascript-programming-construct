var readlineSync = require('readline-sync');
var num = readlineSync.question('Enter number? ');
if(num===0)
{
    console.log("Factorial of "+num+" is 1");
}else
{
    let fact=1;
    for (let i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    console.log(`Factorial of ${num} is ${fact}`);
}