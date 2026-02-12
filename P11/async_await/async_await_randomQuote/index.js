let btn = document.getElementById("btn");
let quote = document.getElementById("quote");
let api = "https://api.quotable.io/random";
btn.addEventListener("click", async () => {
  try {
    let metadata = await fetch(api);
    let res = await metadata.json();
    quote.innerText = res.content;
  } catch (error) {
    console.log(error);
  }
});

// let arrow = (one) => {
//     return one
// }
// let anotherArrow = one => one
