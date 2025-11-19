let carrito = [];
let total = 0;

const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total');

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

// Aquí integrarías Conekta
document.getElementById('pagar').addEventListener('click', () => {
  if(carrito.length === 0){
    alert("Tu carrito está vacío");
    return;
  }
  // Ejemplo simple: mostrar el total
  alert(`Aquí se iniciaría el pago con Conekta. Total: $${total} MXN`);
});
