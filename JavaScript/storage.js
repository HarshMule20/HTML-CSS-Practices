console.log("This is the practice of the local storage and session storage");
localStorage.setItem('Name', 'Harsh');
localStorage.setItem('Surname', 'Mule');

let arr = ['hey', 'hi', 'hello']
localStorage.setItem('Callout', JSON.stringify(arr));

// let name = localStorage.getItem('Name');
// console.log(name)