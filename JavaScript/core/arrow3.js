// The shorted arrow function inline

const operate1 = (num1, num2) => {
    return num1 + num2;
}

// Instead of this we can write code as 

const operate2 = (num1, num2) => num1 + num2;

console.log("This is operation1: ", operate1(3,4));
console.log("This is operation2: ", operate2(4,5));

// When we have only one argument then the syntax removes the parenthesis from the statement.
  
const add = a => a + 1;

console.log("With one argument: ", add(3));


// With no arguments

const newadd = () => 3 + 4;

console.log("With no arguments: ", newadd())