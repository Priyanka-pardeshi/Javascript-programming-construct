console.log("1.Feet to inch \n 2.Feeet to meter \n 3.inch to feet \n 4.Meter to feet");
var readlineSync = require('readline-sync');
var choice = readlineSync.question('what is the choice? ');
console.log('choice is ' + choice);
switch(choice)
{
    case 1:        
        var inputFeet=readlineSync.getRawInput('Enter value of feet:');
        var outputInch=inputFeet*12;
        console.log("feet to inch:"+outputInch);
        break;
    case 2:
        var inputFeetTwo=readlineSync.getRawInput('Enter value of feet:');
        var outputMeter=inputFeetTwo/3.281;
        console.log("Feet to meter:"+outputMeter);
        break;
    case 3:
        let inputInch=readlineSync.getRawInput('Enter value of feet:');
        let outputFeet=inputFeetTwo/12;
        console.log("Feet to meter:"+outputFeet);
        break;
    case 4:
        var inputMeter=readlineSync.getRawInput('Enter value of feet:');
        var outputFeetTwo=inputMeter*3.280;
        console.log(" meter to feet:"+outputFeetTwo);
        break;
}