var randomArray=new Array();
for(let i=1;i<=5;i++)
{
    var randomNum = Math.floor((Math.random() * 1000) + 1);
    randomArray.push(randomNum); 
}
var valueArray=randomArray.values();
for(let element of valueArray)
{
    console.log(element);
}

function myFunction() {
    randomArray.sort(function(a, b){return a - b});
}
myFunction();
console.log("Smallest is:"+randomArray[0]);
console.log("largest is="+randomArray[4]);
