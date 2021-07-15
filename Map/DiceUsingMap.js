var readlineSync=require('readline-sync');
var numb=readlineSync.question('Enter number of time dice sould be roll?');
for (let i=1;i<=numb;i++)
{
var roll=Math.floor((Math.random()*6)+1);
console.log("after rolling dice result:"+roll);
}