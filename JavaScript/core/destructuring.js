const details = {
    name : 'Harsh',
    age : 19,
    greet() {
        console.log("hey my name is: ", this.name);
    }
};
const name = (new_details) =>{
    console.log(new_details.greet());
}

name(details);