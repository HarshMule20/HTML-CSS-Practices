var name = "harsh";
var age = 45;
var haslaptop = true;

// let and const are the other type which are mutable and immutable each.

function details(username, userage, userhaslaptop) {
    return "Name is: " + username + ", age is: " + userage + " and has laptop" + userhaslaptop;
    // console.log("Name is: " + username + ", age is: " + userage + " and has laptop: " + userhaslaptop);

}

console.log(details(name, age, haslaptop));