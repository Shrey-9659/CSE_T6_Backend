// setTimeout(callback function, timeInMS)

// setTimeout(() => {}, 1000)
// setTimeout(function(){}, 1000)
console.log("first")
setTimeout(() => {
    console.log("I will run after 1 seconds...")
}, 1000)
let secondTimeout = setTimeout(() => {
    console.log("I will run after 2 seconds...")
}, 2000)
setTimeout(() => {
    console.log("I will run after 3 seconds...")
}, 3000)
console.log("second")

// clearTimeout(reference)
clearTimeout(secondTimeout)