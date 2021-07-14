//var day=window.prompt("Enter day:");
var readlineSync = require('readline-sync');
var day = readlineSync.question('what will be day? ');
console.log('day is ' + day);

var monthh = readlineSync.question('what will be day? ');
console.log('day is ' + monthh);
//var month=window.prompt("Enter Month");
//Day and date should be in between 20 march 20 june
if (monthh == 3 && day > 20 && day <= 31 || monthh == 6 && day >= 20 && day <= 1) {
    console.log("Valid")
    //alert("Date is valid");
}
else if (monthh == 4 || monthh == 5 && day <= 1 && day >= 30) {
    console.log("Valid date");
}
else {
    console.log("Not valid date");
}