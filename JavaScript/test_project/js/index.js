console.log("This is a note application created in javascript")
displayNotes();
let addbtn = document.getElementById("btn1");
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = ""
    console.log(notesObj);
    displayNotes();

})
function displayNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let display_data = "";
    notesObj.forEach(function (element, index) {
        display_data += `<div class="notecard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button type="button" id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`

    });
    let displayhtml = document.getElementById("notes");
    if (notesObj.length == 0) {
        displayhtml.innerHTML = `<div class="alert alert-info" role="alert">
       <h4>Your Notes will appear when added!</h4>
      </div>`;
    }
    else {
        displayhtml.innerHTML = display_data;
    }

}
function deleteNotes(index) {
    alert("Are you sure you want to delete this note?")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    displayNotes();
}


let searchtext = document.getElementById("searchtext")
searchtext.addEventListener("input", function () {
    let searchvalue = searchtext.value.toLowerCase()
    console.log("input event", searchvalue)
    let Notecard = document.getElementsByClassName("notecard");
    Array.from(Notecard).forEach(function (element) {
        let cardvalue = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(cardvalue)
        if (cardvalue.includes(searchvalue)) {
            // console.log(cardvalue);
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})