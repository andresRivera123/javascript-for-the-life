const array1 = ["a", "b", "c", "d"]
const array2 = ["a", "b", "c", "e"]
const array3 = ["a", "b"]
const array4 = ["a", "b", "c", "d"]
const array5 = ["a", "b", "c", "d", "e"]
const array6 = [1, 2, 3, 4]


const arreglosSimilares = (array1, array2) => {
    console.log(array1)
    console.log(array2)
    if(array1.length !== array2.length) return false
    for(let i = 1; i<array1.length; i++){
        if(array1[i] !== array2[i]) return false
    }
    return true
}

console.log("Son similares? " + arreglosSimilares(array1, array2))
console.log("\n\n")
console.log("Son similares? " + arreglosSimilares(array1, array3))
console.log("\n\n")
console.log("Son similares? " + arreglosSimilares(array1, array4))
console.log("\n\n")
console.log("Son similares? " + arreglosSimilares(array1, array6))