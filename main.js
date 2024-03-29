#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer generate a num
// 2) user guessed a num
// 3) comparision
const randomNum = Math.floor(Math.random() * 10 + 1);
const numGuess = await inquirer.prompt([{
        name: "userguessedNum",
        type: "number",
        message: "guess a number between 1 to 10 and see your luck !.."
    }]);
if (numGuess.userguessedNum === randomNum) {
    console.log(`Congratulations you WON, ${randomNum} is the right number!!`);
}
else {
    console.log(`opps! you guessed wrong, you lose`);
}
;
