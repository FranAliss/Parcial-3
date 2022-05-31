import calcular from "./CalculoCambio";

const Monto = document.querySelector("#monto");
const efectivo = document.querySelector("#efectivo");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const MontoA = Number.parseInt(Monto.value);
  const Efectivo = Number.parseInt(efectivo.value);

  div.innerHTML = "<p> Cambio: " + calcular(MontoA, Efectivo) + " Bs.</p>";
});
