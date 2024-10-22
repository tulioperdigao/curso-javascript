let num  = [5, 8, 2, 3 , 4, 9, 6]
num.sort()

/*
for (let i = 0; i < num.length; i++) {
    console.log(`O valor ${num[i]} está na posição ${i}`)
}
*/

for (let pos in num) {
    console.log(`O valor ${num[pos]} está na posição ${pos}`);
}