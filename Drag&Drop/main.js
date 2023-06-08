const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

let dragged = null;
// fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

Array.from(empties).forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

// drag functions
function dragStart(event) {
  dragged = event.target;
  setTimeout(() => {
    this.classList = "invisible";
  }, 0);
}
function dragEnd() {
  this.classList = "fill";
}

function dragOver(event) {
  event.preventDefault();
}
function dragEnter(enter) {
  event.preventDefault();
  this.classList += " hovered";
}
function dragLeave() {
  this.classList = "empty";
}
function dragDrop(event) {
  this.classList = "empty";
  if (event.target.className === "empty") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
}
