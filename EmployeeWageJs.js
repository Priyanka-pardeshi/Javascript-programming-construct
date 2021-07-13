const IS_PART_TIME=1
const IS_FULL_TIME=2
const IS_PPART_TIME_HR=4
const IS_FULL_TIME_HR=8
const IS_ABSENT=0
const EMPWAGE_PER_HR=20

let empHr=0
let empCheck=Math.floor(Math.random()*10)%3
switch(empCheck)
{
    case IS_PART_TIME :
        empHr=IS_PPART_TIME_HR;
        break;
    case IS_FULL_TIME :
        empHr=IS_FULL_TIME_HR;
        break;
    default : 
        empHr=0
        break;
}
let empWage=empHr*EMPWAGE_PER_HR;
console.log("Employee wage:"+empWage);




































