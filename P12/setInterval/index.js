let time = document.getElementById("time")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let timer = 0;
let timerRunning;
let isStartActive = false;

start.addEventListener("click", () => {
    if(isStartActive == false){
        timerRunning = setInterval(() => {
        timer = timer + 1;
        time.innerText = `${timer} seconds`
        isStartActive = true;
    }, 1000)
    }
})

stop.addEventListener("click", () => {
    clearInterval(timerRunning)
    isStartActive = false
})

reset.addEventListener("click", () => {
    clearInterval(timerRunning);
    timer = 0;
    time.innerText = `0 seconds`
    isStartActive = false

})