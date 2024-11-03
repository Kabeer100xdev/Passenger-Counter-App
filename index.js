//Grab both click button and save button
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

//Set the current value of count = 0
let count = 0;

//Function to update the count and display it

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  let saver = " " + count + " " + "-";
  saveEl.innerText = saveEl.innerText + saver;
}

function reset() {
  count = 0;
  resetSave = "Resetted";
  countEl.innerText = count;
  saveEl.innerText = "Previous entires:";
}
