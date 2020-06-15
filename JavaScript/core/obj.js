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