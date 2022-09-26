// html detection --
let div = document.querySelector("div");
let btn = document.querySelector("button");

// generate color and set to background color
function randColor() {
  let colorChar = "0123456789abcdef";
  let colorHash = "#";

  for (let i = 0; i < 6; i++) {
    colorHash += colorChar[Math.floor(Math.random() * 16)];
  }

  div.style.backgroundColor = colorHash;
}
// event lister of the button click
btn.addEventListener("click", randColor);
