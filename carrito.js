document.getElementById('pagar').addEventListener('click', () => {
  if(carrito.length === 0){
    alert("Tu carrito está vacío");
    return;
  }

  // Calculamos el total en centavos
  const totalCentavos = total * 100;

  // Inicializar Conekta
  Conekta.setPublicKey('key_H2GOcFJgkRg0FTh5sIkaLfQ'); // pega tu public key aquí
  Conekta.checkout.setup('key_H2GOcFJgkRg0FTh5sIkaLfQ', {
    currency: 'MXN',
    amount: totalCentavos,
    name: 'Mi Tienda',
    description: 'Compra de productos',
    image: 'https://via.placeholder.com/150', // tu logo
    success_url: window.location.href, // redirige tras pago exitoso
    cancel_url: window.location.href,  // redirige si cancela
    button_text: 'Pagar Ahora'
  });
});
