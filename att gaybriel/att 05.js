num = [1, 2, 3, 4, 5]

console.log(num)

modificarArray()

console.log(num)

function modificarArray() {
    num.splice(1, 1, 5, 6)
}