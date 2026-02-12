let api = "https://jsonplaceholder.typicode.com/posts"

fetch(api)
.then((data) => {
    return data.json()
})
.then((res) => {
    console.log(res)
})
.catch((error) => {
    console.log(error)
})