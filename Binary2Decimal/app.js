let binValue;
let decValue;

// function convert() {
//   let tempBin = document.querySelector("#binary").value;
//   decValue = parseInt(tempBin, 2);
//   document.querySelector(".result").innerText = "Decimal Number : " + decValue;
// }
// document.querySelector(".btn").addEventListener("click", convert);

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let tempBin = document.querySelector("#binary").value;
  decValue = parseInt(tempBin, 2);
  document.querySelector(".result").innerText = "Decimal Number : " + decValue;
});
