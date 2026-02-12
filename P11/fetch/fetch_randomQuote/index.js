let btn = document.getElementById("btn");
let quote = document.getElementById("quote");
let api = "https://api.quotable.io/random";
btn.addEventListener("click", () => {
  fetch(api)
    .then((rawData) => rawData.json())
    .then((res) => (quote.innerText = res.content))
    .catch((err) => console.log(err));
});


// let arrow = (one) => {
//     return one
// }
// let anotherArrow = one => one