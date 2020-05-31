console.log("this is object literal");

function test(number){
    this.no = number
}

let obj = new test("96");
console.log(obj)