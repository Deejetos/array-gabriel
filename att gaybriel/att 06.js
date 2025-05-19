let matriz = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
]

console.log(matriz[1] [1])

console.log('')
for (let i = 0; i < matriz.length; i++) {
    let linha = ''
    for (let l = 0; l < matriz[i].length; l++) {
        linha += matriz[i] [l] + '  ';
    }
    console.log(linha)
}