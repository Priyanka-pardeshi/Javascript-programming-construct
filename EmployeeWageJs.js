const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const IS_PPART_TIME_HR = 4
const IS_FULL_TIME_HR = 8
const EMPWAGE_PER_HR = 20
const NUM_OF_WORKING_DAYS = 20
const MAX_HR_IN_MONTH=160
function getWorkingHr(empCheck) 
{
    switch (empCheck) 
    {
        case IS_PART_TIME:
            return IS_PPART_TIME_HR;
        case IS_FULL_TIME:
            return IS_FULL_TIME_HR;
        default:
            return 0
    }
}
function calculateDailyWage(empHr)
{
    return empHr*EMPWAGE_PER_HR;
}

let totalEmpHr = 0;
let totalWorkingDays=0;
let empDailyWageArray=new Array();
while(totalEmpHr<=MAX_HR_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHr=getWorkingHr(empCheck)
    totalEmpHr +=empHr;
    empDailyWageArray.push(calculateDailyWage(empHr))
}

let empWage = calculateDailyWage(totalEmpHr);
console.log("Total Working days: "+totalWorkingDays+" total employee Hr: " + totalEmpHr + " Employee wage:" + empWage);

let totEmpWage=0;
function sum(dailyWage)
{
    return totEmpWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("total days:"+totalWorkingDays+" total hours:"+totalEmpHr+" Employee Wage:"+totEmpWage);


function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("Employee wage with reduce:"+empDailyWageArray.reduce(totalWages,0));

//Employee wage array have every days wage
//interating every element of employee and creating new Data structure
let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    console.log(dailyCntr + "=" + dailyWage);
}
let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWage);
console.log("-----------Daily wage map----------");
console.log(mapDayWithWageArray);

