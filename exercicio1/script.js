let numeroDivisivel = Number(prompt("Digite um número para verficar se é divisível por 2 e por 3"))

//  Utilizando ifs aninhados
if (numeroDivisivel % 2 === 0) {
    console.log("É divisivel por 2")
    if (numeroDivisivel % 3 === 0) {
        console.log("É divisivel por 3")
    }
} else {
    console.log("esse número não é divisível")
}

// Utilizando um operador lógico para unir duas operações relacionais

if (numeroDivisivel % 2 === 0 || numeroDivisivel % 3 === 0) {
    console.log("é divisível")
} else {
    console.log("não é divisível")
}


