//STEP 1
function halfNumber() {
    const number = parseFloat(prompt("Task 1 - Enter a number:"));
    if (!isNaN(number)) {
        const result = number / 2;
        console.log(`Half of ${number} is ${result}.`);
        return result;
    } 
    else {
        console.log("Invalid input. Please enter a valid number.");
        return null;
    }
  }
//STEP 2
function squareNumber() {
    const number = parseFloat(prompt("Task 2 - Enter a number:"));
    if (!isNaN(number)) {
        const result = number * number;
        console.log(`Square of ${number} is ${result}.`);
        return result;
    } 
    else {
        console.log("Invalid input. Please enter a valid number.");
        return null;
    }
  }
//STEP 3
function percentOf() {
    const number1 = parseFloat(prompt("Task 3 - Enter the first number:"));
    const number2 = parseFloat(prompt("Task 3 - Enter the second number:"));
    if (!isNaN(number1) && !isNaN(number2) && number2 !== 0) {
        const percentage = ((number1 / number2) * 100).toFixed(2);
        console.log(`${number1} is ${percentage}% of ${number2}.`);
        return percentage;
    } 
    else {
        console.log("Invalid input. Please enter valid numbers");
        return null;
    }
  }
//STEP 4
function findModulus() {
    const number1 = parseFloat(prompt("Task 4 - Enter the first number:"));
    const number2 = parseFloat(prompt("Task 4 - Enter the second number:"));
    if (!isNaN(number1) && !isNaN(number2) && number2 !== 0) {
        const modulus = number1 % number2;
        console.log(`${modulus} is the modulus of ${number1} and ${number2}.`);
        return modulus;
    } 
    else {
        console.log("Invalid input. Please enter valid numbers");
        return null;
  }
  }
//STEP 5
function findSum() {
    const input = prompt("Task 5 - Enter a list of numbers separated by commas:");
    const numbers = input.split(",").map(parseFloat);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (!isNaN(numbers[i])) {
            sum += numbers[i];
        }
    }
    console.log(`The sum of the numbers is: ${sum}`);
    return sum;
}

halfNumber();
squareNumber();
percentOf();
findModulus();
findSum();
  