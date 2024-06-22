//In this project you will build a countdown timer using the date module
import inquirer from "inquirer";
import chalk from "chalk";
import{differenceInSeconds} from "date-fns";
const response = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: chalk.cyan("Please enter the amount of second"),
        validate: (input)=>{
            if(isNaN(input)){
                return "Please enter valid number"
            }else if(input > 60){
                return "Second must be in 60"
            }else{
                return true;
            }
        }
    }
]);
let input = response.userInput
function startTime(value: number){
    const iniTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(iniTime)
    setInterval((() => {
        const currenTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime, currenTime)

        if(timeDiff <= 0){
            console.log(chalk.red("Timer has expired"));
            process.exit()
        }
        const min = Math.floor((timeDiff %(3600 *24))/3600);
        const sec = Math.floor(timeDiff%60)
        console.log(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`);
        
    }), 1000)
}
startTime(input)


