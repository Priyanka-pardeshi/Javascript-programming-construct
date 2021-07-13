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
let totalEmpHr = 0;
let totalWorkingDays=0;
while(totalEmpHr<=MAX_HR_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHr += getWorkingHr(empCheck)
}

let empWage = totalEmpHr * EMPWAGE_PER_HR;
console.log("Total Working days: "+totalWorkingDays+" total employee Hr: " + totalEmpHr + " Employee wage:" + empWage);

  