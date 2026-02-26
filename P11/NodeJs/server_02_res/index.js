const http = require("http")

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        console.log("Home Page")
        res.write("Home Page")
        res.end()
    }else if(req.url == "/about"){
        console.log("About Page")
        res.end("<h1>About Page</h1>")
    }else{
        console.log("404 : Page Not Found")
        res.write("404 : Page not found\n")
        res.write("404 : Page not found\n")
        res.write("404 : Page not found\n")
        res.end("404 : Page not found\n")
        // res.end("404 : Page not found\n")
        // res.end("404 : Page not found\n")
    }
})

app.listen(3000, () => {
    console.log("Server started...")
})