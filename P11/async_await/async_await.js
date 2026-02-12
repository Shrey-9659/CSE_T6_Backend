let api = "https://jsonplacwertyueholder.typicode.com/posts";

// fetch(api)
// .then((data) => {
//     return data.json()
// })
// .then((res) => {
//     console.log(res)
// })
// .catch((error) => {
//     console.log(error)
// })
async function fetchData() {
  try{
    let metaData = await fetch(api)
    let data = await metaData.json()
    console.log(data)
  }catch(error){
    console.log("Error aa gaya")
  }
}

fetchData();
