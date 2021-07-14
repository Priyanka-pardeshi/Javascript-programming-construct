var readlineSync = require('readline-sync');
var num = readlineSync.question('Enter number? ');
var temp=1;
for(var i=2;i<num;i++)
{
    temp=temp*num;
}
console.log("2's power of "+num+" is "+temp);