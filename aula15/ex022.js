let num  = [5, 8, 2, 3 , 4, 9, 6]

let pos = num.indexOf(9)

if (pos === -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor procurado está na posição ${pos}`)
}