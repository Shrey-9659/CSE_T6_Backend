let cgpaScored = true;

new Promise((resolve, reject) => {
    if(cgpaScored){
        resolve("Shrey Khandelwal")
        console.log("I scored more that 9 CGPA")
    }else{
        console.log("I did not score more than 9 CGPA")
        reject()
    }
})
.then((data) => {
    console.log(`Promise is resolved : ${data}`)
})
.catch(() => {
    console.log("Promise is rejected")
})
.finally(() => {
    console.log("I will run all the time")
})