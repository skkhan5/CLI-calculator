import * as inquirer from "inquirer";
import chalk from "chalk";
var operator;
(function (operator) {
    operator["ADD"] = "Addition";
    operator["SUB"] = "Subtraction";
    operator["MUL"] = "Multiplication";
    operator["DIV"] = "Division";
})(operator || (operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(Number(input))) {
        return "Please enter a  valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([{
            type: "input",
            name: "num1",
            message: "Please enter the first number",
            validate: validateNumber
        },
        {
            type: "list",
            name: "operator",
            message: "Select an operator",
            choices: [
                operator.ADD,
                operator.SUB,
                operator.MUL,
                operator.DIV
            ]
        },
        {
            type: "input",
            name: 'num2',
            message: "Please enter the second number",
            validate: validateNumber,
        }]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const Selectopretor = input.operator;
    let result;
    if (Selectopretor === operator.ADD) {
        result = num1 + num2;
        console.log(chalk.bgBlueBright.bgBlack(`Result is ${result}`));
    }
    else if (Selectopretor === operator.SUB) {
        result = num1 - num2;
        console.log(chalk.bgCyanBright.bgGray(`Result is ${result}`));
    }
    else if (Selectopretor === operator.MUL) {
        result = num1 * num2;
        console.log(chalk.bgBlue.bgCyan(`Result is ${result}`));
    }
    else if (Selectopretor === operator.DIV) {
        result = num1 / num2;
        console.log(chalk.bgBlue.bgBlueBright(`Result is ${result}`));
    }
}
main();
