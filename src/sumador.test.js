import calcular from "./CalculoCambio.js";
import fs from "fs";

describe("Mostrar cambio", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("Mostrar el cambio despues de presionar el boton de 'cambio'", () => {
    let botonCambio = document.querySelector("#botoncambio");
    const div = document.querySelector("#resultado-div");
    botonCambio.click();
    
    expect(div.innerHTML).toEqual("<p> Cambio: NaN Bs.</p>");
  });
}); 
