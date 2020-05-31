console.log("This is ES6 tutorial");

class TAble {
    constructor(givenName, givenNumber, givenSubject){
        this.name = givenName;
        this.number = givenNumber;
        this.subject = givenSubject;
    }
}

let myobj = new TAble("test", 45, "Maths");
console.log(myobj);