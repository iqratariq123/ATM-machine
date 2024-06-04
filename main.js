import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 2445;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "what you want to do",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select the amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`you have succesfully withdrawal ${fast.fastcash} \nYour remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect pin code");
}
