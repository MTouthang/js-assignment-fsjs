const url = "https://api.chucknorris.io/jokes/random";

function generateJokes() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (document.querySelector(".joke").innerText = data.value))
    .catch((error) => console.log(error));
}

document.querySelector(".btn").addEventListener("click", generateJokes);
