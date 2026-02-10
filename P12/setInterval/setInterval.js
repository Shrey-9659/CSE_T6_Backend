// setInterval(function, timeInMS)

let timer = setInterval(() => {
    console.log("I will run after every second...")
},1000)

// clearInterval(reference)
setTimeout(() => {
    clearInterval(timer)
}, 5000)