#! /usr/bin/env node

import inquirer from "inquirer";
import Chalk from "chalk";
const result = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    { message: "Select Your Desired Operator", type: "list", name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Root"] }
]);
// FOR CONDITION :
if (result.Operator === "Addition") {
    console.log(Chalk.green(result.FirstNumber + result.SecondNumber));
}
else if (result.Operator === "Subtraction") {
    console.log(Chalk.red(result.FirstNumber - result.SecondNumber));
}
else if (result.Operator === "Multiplication") {
    console.log(Chalk.cyan(result.FirstNumber * result.SecondNumber));
}
else if (result.Operator === "Division") {
    console.log(Chalk.blue(result.FirstNumber / result.SecondNumber));
}
else {
    console.log(Chalk.magenta("Please Select A Valid Operator"));
}
