// let arr = [1,2,43,4,6]
// let obj = {
//     name : "Shrey",
//     age : 25,
//     year : 2026
// }

// console.log(arr)
// console.log(obj.name)
// console.log(obj["age"])

let arr = [1,2,3,4,5,6,7,8,9]
// Map - Used to perform operation on each and every element of an array
console.log(arr)
// arrayName.map(function)
let mappedArray = arr.map((value) => {
    return value * 3
})
// .map((value) => {
//     return value + 1
// })
// console.log(mappedArray)

// Filter - Used to filter out the elements, if the condition satisfies, we keep the element else pop it out.
// arrayName.filter(function)
let filterArray = mappedArray.filter((value) => {
    return value % 2 == 0
})
// console.log(filterArray)
// Reduce
// arrayName.reduce((accumulator, currentValue) => {
// }, initalValue)

let reduceArray = filterArray.reduce((acc, curr) => {
    return acc + curr
}, 0)

// console.log(reduceArray)

let newArray = arr
.map((value) => {
    return value * 3
})
.filter((value) => {
    return value % 2 == 0
})
.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(newArray)