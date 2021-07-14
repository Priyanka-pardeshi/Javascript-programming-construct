function leapYear(year)
{
    return (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
}
var leap=leapYear(2003);
if(leap==true)
{
    console.log("Leap year");
}
else
{
    console.log("Not Leap year");
}