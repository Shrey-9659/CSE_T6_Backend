const express = require("express")
const path = require("path")


const app = express()

// serverName.methodName("/route", callback function)
app.get("/", (req, res) => {
    // To send data
    res.send("I am on Home Page")
})

const aboutFileLocation = path.join(__dirname, "about.html")

app.get("/about", (req, res) => {
    // res.sendFile("/Users/shreykhandelwal/Desktop/Shoolini/Sem 2/AI_T6/Express/server_basic/about.html")
    res.sendFile(aboutFileLocation)
})

app.get("/user", (req, res) => {
    res.json({
        name : "Shrey",
        university : "Shoolini",
        profession : "Trainer",
        year : 2026
    })
})

app.listen(3000, () => {
    console.log("Server started...")
})