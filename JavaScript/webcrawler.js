let string = "python"
let links  = docuemnts.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
    href = element.href;
    console.log(href);
})