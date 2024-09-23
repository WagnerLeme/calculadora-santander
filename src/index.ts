function adicao(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

function subtracao(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function divisao(numero1: number, numero2: number): number {
    if (numero2 === 0) {
        throw new Error("Divisão por zero não é permitida");
    }

    return numero1 / numero2;
}
  
console.log(adicao(5, 3));
console.log(subtracao(5, 3));
console.log(multiplicacao(5, 3));
console.log(divisao(5, 3));
//console.log(divisao(5, 0));

console.log("Calculadora Básica - Adição, Subtração, Multiplicação e Divisão");
