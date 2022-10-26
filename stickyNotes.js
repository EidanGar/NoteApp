const container = document.querySelector(".container");
let date = new Date();
date = date.toLocaleString();

console.log(date);

let time = document.querySelector("#time");
time.innerText = date;

let count = 0;

document.querySelector("#add_note").onclick = function() {
    count += 1;
    let note = document.querySelector(".hidden");
    let clone = note.cloneNode(true);
    clone.style.visibility = "visible";
    clone.style.height = "unset";
    let date = new Date();
    date = date.toLocaleString();

    document.querySelector(".container").appendChild(clone);
    clone.querySelector("#time").innerText = date;

    let allChildren = clone.childNodes;

    for (let i = 0; i < allChildren.length; i++) {
        console.log(allChildren[i]);
    }
    let button = clone.firstChild.firstChild.lastChild

    let promise = new Promise((resolce, reject) => {
        if (button.onclick == true) {

        }
    });
};

document.querySelector("#clear_all").onclick = function() {
    container.innerHTML = "";
}

document.querySelector("#collapse").onclick = function() {
    this.parentElement.parentElement.remove();
}

function collapse() {
    this.parentElement.remove();
}