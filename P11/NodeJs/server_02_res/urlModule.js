const http = require("http")
const url = require("url")
const googleUrl = "https://www.google.com/search?q=shoolini+university"
http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    if(myUrl.pathname == "/submit"){
        res.end("Form submitted by : " + myUrl.query.name)
    }

}).listen(3000, () => {
    console.log("Server Started...")
})
// http://localhost:3000/submit?name=shrey