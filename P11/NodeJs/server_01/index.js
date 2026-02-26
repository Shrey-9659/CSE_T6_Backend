const http = require("http")

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        console.log("I am on home page")
    }else if(req.url == "/about"){
        console.log("I am on about page")
    }else if(req.url == "/contact"){
        console.log("I am on contact page")
    }else{
        console.log("404: Page Not Found")
    }
})

app.listen(3000, () => {
    console.log("Server is running...")
})

// / - Welcome to home page
// /about - Welcome to about page
// /contact - Welcome to contact page
// other - 404 : Page Not Found

// http://localhost:3000