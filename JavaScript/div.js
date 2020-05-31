console.log("This is practice for the Editable Div");

let div = document.createElement('div');
let val = localStorage.getItem("text");
let text;
if (val == null) {
    text = document.createTextNode("This is an editable text field");
}
else {
    text = document.createTextNode(val);
}
div.setAttribute("id", "divelem");
div.setAttribute("class", "editdiv")
div.setAttribute("style", "width:8rem; height:4rem; padding:5rem; font-size:25px; border: 4px solid red");
div.append(text);
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

console.log(div, container, first);
container.insertBefore(div, first);

div.addEventListener("click", function () {
    let textareacount = document.getElementsByClassName("textarea").length;
    if (textareacount == 0) {
        let display_data = div.innerHTML;
        div.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${display_data}</textarea>`;
    }
    let textArea = document.getElementById("textarea");
    textArea.addEventListener("blur", function () {
        div.innerHTML = textArea.value;
        localStorage.setItem("text", textArea.value)
    })

})