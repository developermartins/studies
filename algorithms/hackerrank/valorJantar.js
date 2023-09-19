// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

function dinnerCalc(dinnerPrice) {
  const serviceTax = 10;

  let waiterTax = ((serviceTax / 100) * dinnerPrice);

  let totalDinnerPrice = dinnerPrice + waiterTax;

  return `
    Valor do jantar: R$${dinnerPrice.toFixed(2)}
    Taxa do garçom: R$${waiterTax.toFixed(2)} (${serviceTax}%)
    Total a pagar: R$${totalDinnerPrice.toFixed(2)}
  `
};

console.log(dinnerCalc(80));