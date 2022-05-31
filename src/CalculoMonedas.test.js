import calcularMonedas from "./CalculoMonedas";

describe("Calcular", () => {
  it("deberia calcular el cambio de 20", () => {
    expect(calcularMonedas(20)).toEqual([5,5,5,5]);
  });
});