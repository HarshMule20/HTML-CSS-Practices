const name = "harsh";
let age = 45;
const haslaptop = true;

age = 34;

const details = function (username, userage, userhaslaptop) {
    return "Name is: " + username + ", age is: " + userage + " and has laptop" + userhaslaptop;

}

console.log(details(name, age, haslaptop));