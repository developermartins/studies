// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. 
// Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00

//=====================

function shopPayment(productPrice) {
  let discount = 10;
  let installment = 3;

  let cashPaymentWithDiscount = (productPrice - (productPrice / 100) * discount);
  let paymentInStallments = productPrice / installment;
  
  return `
    Preço: R$${productPrice.toFixed(2)}
    À vista com desconto de ${discount}%: R$${cashPaymentWithDiscount.toFixed(2)}
    Ou ${installment}x de: R$${paymentInStallments.toFixed(2)}
  `;
};

console.log(shopPayment(100))
