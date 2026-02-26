const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    // console.log(fs)

    // Writing in a file

    // Sync
    // fs.writeFileSync("example.txt", "Data from writeFileSync")
    // Async

    // fs.writeFile("example.txt", "Data from writeFile", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Data written...")
    // })
    // Reading a file

    // Sync
    // let readData = fs.readFileSync("example.txt", "utf-8")
    // console.log(readData)
    
    // Async
    // Appending in a file
    // Copy a file
    // Deleting a file
    // Stats of a file
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})