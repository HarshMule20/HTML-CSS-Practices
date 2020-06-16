//  Object data type
const obj = {
    name : 'harsh',
    age : 19,
    greet(){
        console.log('Hey my name is: ' + this.name);
    }
};
// obj.greet(); besides this method we can do it in other way!

// Array data type
const hobbies = ['Cricket', 'TableTennis', 'Coding', 'Surfing'];

for (let hobby of hobbies){
    console.log("My hobbies are: ", hobby);
}

// to copy a array/list using the spread operator

const newarr = [...hobbies];
console.log("Actual Array:", hobbies);
console.log("Copied array:", newarr);

const newobj = {...obj};
console.log(newobj);

// using the rest operator
// const arr = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };
// it cant accept more than three as shown!

const arr = (...args) => {
    return args;
}
// for that the rest operator is used
console.log(arr(1, 2, 3, 4));