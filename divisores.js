let n = Number(prompt("Digite um inteiro: "))
console.log("Divisores de "+n+": 1, ")
for (i = 2; i <= (n/2); i++){
    if (n % i == 0)
        process.stdout.write(`${i}, `)
}
process.stdout.write(`${n}`)