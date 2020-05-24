console.log("Welcome To DOM")
let a = document;
a = document.forms[0];
// a = document.all;
a = document.links[0].href;
let element = document.getElementById('child1');
element.style.color = 'red';
element.innerText = "This is Child One";
// console.log(element)

// Multi Element Selector
 let elems = document.getElementsByClassName('child');
 elems = document.getElementsByClassName('container');
 elems = document.getElementsByTagName('div');
//  console.log(elems)

 Array.from(elems).forEach(element => {
    // console.log(element);
    element.style.color = 'blue'
 })

 // Single Element Selector
 let selector = document.querySelector('.child');
 console.log(selector)