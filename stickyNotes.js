const container = document.querySelector(".container");
let date = new Date();
date = date.toLocaleString();

let note = document.querySelector(".note");

console.log(date);

let time = document.querySelector(".time");
time.innerText = date;

document.querySelector("#add_note").onclick = function() {
    let date = new Date();
    date = date.toLocaleString();

    let note = document.createElement("div");
    note.classList.add("note");

    let topmost = document.createElement("div");
    topmost.classList.add("topmost");

    let time = document.createElement("span");
    time.classList.add("time");
    time.innerText = date;

    let button = document.createElement("button");
    button.classList.add("collapse");
    button.innerText = "−";
    button.onclick = () => {topmost.parentElement.remove()};

    let text = document.createElement("textarea");
    text.placeholder = "Enter text here";

    container.appendChild(note);
    note.appendChild(topmost);
    topmost.appendChild(time);
    topmost.appendChild(button);
    note.appendChild(text);
};

document.querySelector("#clear_all").onclick = function() {
    container.innerHTML = "";
}

document.querySelector(".collapse").onclick = () => {
    note.remove();
};
