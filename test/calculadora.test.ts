import {
  adicao,
  subtracao,
  multiplicacao,
  divisao,
  operacaoEhValida,
} from "../src/index";

jest.mock("../src/index", () => ({
  ...jest.requireActual("../src/index"),
  mostrarMenu: jest.fn(),
}));

describe("Calculadora", () => {
  test("adição de 2 e 3 deve retornar 5", () => {
    expect(adicao(2, 3)).toBe(5);
  });

  test("subtração de 5 e 2 deve retornar 3", () => {
    expect(subtracao(5, 2)).toBe(3);
  });

  test("multiplicação de 3 e 4 deve retornar 12", () => {
    expect(multiplicacao(3, 4)).toBe(12);
  });

  test("divisão de 10 e 2 deve retornar 5", () => {
    expect(divisao(10, 2)).toBe(5);
  });

  test("divisão por zero deve lançar erro", () => {
    expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida");
  });

  test("deve retornar true para operações válidas", () => {
    expect(operacaoEhValida("1")).toBe(true);
    expect(operacaoEhValida("2")).toBe(true);
    expect(operacaoEhValida("3")).toBe(true);
    expect(operacaoEhValida("4")).toBe(true);
  });

  test("deve retornar false para operações inválidas", () => {
    expect(operacaoEhValida("5")).toBe(false);
    expect(operacaoEhValida("a")).toBe(false);
    expect(operacaoEhValida("")).toBe(false);
    expect(operacaoEhValida("0")).toBe(false);
  });
});
