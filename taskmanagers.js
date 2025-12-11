let input =require('prompt-sync')();

let taskNames=[];
let taskDurations=[];
let continueAdding="yes"
let i=0;

while (continueAdding=="yes") {
    let name=input("Enter name ")
    taskNames.push(name);
    let duration=input("Enter duration " )
    taskDurations.push(duration)
    continueAdding= input("Dont you want to continue? " )
}

console.table(taskNames);
console.table(taskDurations);