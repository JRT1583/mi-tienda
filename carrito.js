let carrito = [];
let total = 0;

const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total');

// Agregar productos al carrito
document.querySelectorAll('.agregar-carrito').forEach(boton => {
  boton.addEventListener('click', () => {
    const producto = boton.parentElement;
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);

    carrito.push({nombre, precio});
    total += precio;

    actualizarCarrito();
  });
});

function actualizarCarrito() {
  listaCarrito.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio} MXN`;
    listaCarrito.appendChild(li);
  });
  totalCarrito.textContent = total;
}

// Integración con Conekta Sandbox
document.getElementById('pagar').addEventListener('click', () => {
  if(carrito.length === 0){
    alert("Tu carrito está vacío");
    return;
  }

  const totalCentavos = total * 100;

  const PUBLIC_KEY = 'key_H2GOcFJgkRg0FTh5sIkaLfQ'; // pega tu llave sandbox aquí
  Conekta.setPublicKey(PUBLIC_KEY);

  Conekta.checkout.setup(PUBLIC_KEY, {
    currency: 'MXN',
    amount: totalCentavos,
    name: 'Mi Tienda Sandbox',
    description: 'Compra de productos',
    image: 'https://via.placeholder.com/150', // puedes poner tu logo
    success_url: window.location.href,
    cancel_url: window.location.href,
    button_text: 'Pagar Ahora'
  });
});
