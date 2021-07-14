var MonthArray=new Array();
for (let i=1;i<=10;i++)
{
var randomNum=Math.floor((Math.random()*1000)+1);
MonthArray.push(randomNum);
}
for(let x=0;x<=MonthArray.length;x++)
{
    console.log(MonthArray[x]);
}