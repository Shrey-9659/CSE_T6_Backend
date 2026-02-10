let userData = [
  { "id": 1, "name": "Alice", "age": 24 },
  { "id": 2, "name": "Bob", "age": 27 },
  { "id": 3, "name": "Charlie", "age": 22 },
  { "id": 4, "name": "Diana", "age": 29 },
  { "id": 5, "name": "Ethan", "age": 31 },
  { "id": 6, "name": "Fiona", "age": 26 },
  { "id": 7, "name": "George", "age": 28 },
  { "id": 8, "name": "Hannah", "age": 23 },
  { "id": 9, "name": "Ian", "age": 35 },
  { "id": 10, "name": "Julia", "age": 21 }
]
// Print all the names
let arr = userData.map((user) => {
    return user.name
})
console.log(arr)
// let ageArray = userData.filter((user) => {
//     return user.age > 28
// })
// .map((user) => user.name)
// console.log(ageArray)
let ageArray = userData.filter((user) => {
    if(user.age > 28) console.log(user.name)
})
// Print only those name whose age is greater then 28