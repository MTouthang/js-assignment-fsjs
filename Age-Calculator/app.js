// const container;
// const error;
let yrInput;
let montInput;
let dayInput;
let resYears;
let resMonths;
let resDays;

const date = document.querySelector(".container #dob");

// get age --
function getAge() {
  const dateInput = new Date(date.value);
  dayInput = dateInput.getDate();
  montInput = dateInput.getMonth();
  yrInput = dateInput.getFullYear();

  console.log();

  calcAge(yrInput);
  displayAge();
}
date.addEventListener("change", getAge);

// calculate age --
function calcAge(birthYr) {
  let cDate = new Date();
  let curYear = cDate.getFullYear();

  if (curYear < yrInput) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".age ").style.display = "none";
  } else {
    document.querySelector(".age ").style.display = "block";
    document.querySelector(".error").style.display = "none";
    resYears = curYear - birthYr;

    var resMonthsExtra = Math.abs(cDate.getMonth() - montInput);
    var resDaysExtra =
      resMonthsExtra * 30 + Math.abs(cDate.getDate() - dayInput);

    resMonths = resMonthsExtra + resYears * 12;
    resDays = resYears * 365 + resDaysExtra;
  }
}

function displayAge() {
  let age = document.querySelector(".container .desc");
  age.innerText = "Your Age is: " + resYears;

  document.querySelector(".age #years").innerText = resYears;
  document.querySelector(".age #months").innerText = resMonths;
  document.querySelector(".age #days").innerText = resDays;
}
