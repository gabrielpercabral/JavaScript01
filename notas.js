var nota = Number(prompt("Digite sua nota: "))

if(nota >= 6.0){
    status = "APROVADO"
}

else{
    if (nota >= 4.0){
        status = "RECUPERAÇÃO"
    }

    else{
        status ="REPROVADO"
    }
}

console.log("Sua situação: " +status+".")