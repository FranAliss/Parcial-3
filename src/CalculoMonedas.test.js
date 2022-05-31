import calcularMonedas from "./CalculoMonedas";

describe("Calcular", () => {
  it("deberia calcular el cambio de 20", () => {
    expect(calcularMonedas(20)).toEqual([5,5,5,5]);
  });
  
  it("deberia calcular el cambio de 22", () => {
    expect(calcularMonedas(22)).toEqual([5,5,5,5,2]);
  });
});