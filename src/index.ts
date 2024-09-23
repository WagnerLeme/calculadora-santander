import * as readlineSync from "readline-sync";

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

function mostrarMenu(): string {
  console.log("\n--- Calculadora Básica ---");
  console.log("Escolha uma operação:");
  console.log("1. Adição");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");
  console.log("0. Sair");
  const escolha = readlineSync.question("Digite o número da operação: ");
  return escolha;
}

function operacaoEhValida(operacao: string) {
  let validas = ["1", "2", "3", "4"];
  return validas.includes(operacao);
}

function executarCalculadora(): void {
  let operacao = mostrarMenu();

  while (operacao !== "0") {
    if (!operacaoEhValida(operacao)) {
      throw new Error("Operação inválida!");
    }

    const numero1 = readlineSync.questionFloat("Digite o primeiro número: ");
    const numero2 = readlineSync.questionFloat("Digite o segundo número: ");

    try {
      switch (operacao) {
        case "1":
          console.log(`Resultado da adição: ${adicao(numero1, numero2)}`);
          break;
        case "2":
          console.log(`Resultado da subtração: ${subtracao(numero1, numero2)}`);
          break;
        case "3":
          console.log(
            `Resultado da multiplicação: ${multiplicacao(numero1, numero2)}`
          );
          break;
        case "4":
          console.log(`Resultado da divisão: ${divisao(numero1, numero2)}`);
          break;
        default:
          console.log("Operação inválida! Tente novamente.");
          break;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Ocorreu um erro desconhecido");
      }
    }

    operacao = mostrarMenu();
  }

  console.log("Calculadora encerrada.");
}

try {
  executarCalculadora();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Ocorreu um erro desconhecido");
  }
}
