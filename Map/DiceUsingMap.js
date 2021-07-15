var readlineSync = require('readline-sync');
var numb = readlineSync.question('Enter number of time dice sould be roll?');
var resultOfDice=new Array();
for (let i = 1; i <= numb; i++) {
    var roll = Math.floor((Math.random() * 6) + 1);
    resultOfDice.push(roll);    
}
var map1=resultOfDice.map(x=>x);
console.log(map1);
var countArray=new Array();
countArray=map1;
var countOccurance=function(arr,val)
{
    //where acc-is accumulator which count occurance of an ele
    //reduce take two arguments.
    return arr.reduce((acc,ele)=>
    {
        return (val===ele?acc+1:acc)
    },0);
};
console.log("occuance of 2 is:"+countOccurance(countArray,2));