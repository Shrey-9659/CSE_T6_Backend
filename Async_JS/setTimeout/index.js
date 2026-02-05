let text = document.getElementById("text")
let change = document.getElementById("change")
let dont = document.getElementById("dont")
let changeText;
change.addEventListener("click", () => {
    changeText = setTimeout(() => {
        text.innerHTML = "Text is changed"
    }, 2000)
})

dont.addEventListener("click", () => {
    clearTimeout(changeText)
})


https://github.com/Shrey-9659/CSE_T6_Backend