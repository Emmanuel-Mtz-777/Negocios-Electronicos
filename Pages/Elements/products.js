let productosGuardados = [];

fetch('/Assets/Data/products.json')
  .then(response => response.json())
  .then(data => {
    productosGuardados = data;
    mostrarProductos(productosGuardados);
  })
  .catch(error => console.error('Error al cargar los productos:', error));

function mostrarProductos(productos) {
  const container = document.getElementById('productos-container');
  container.innerHTML = '';

  productos.forEach(producto => {
    // Crear la tarjeta del producto
    const card = document.createElement('div');
    card.classList.add('card');

    // Añadir contenido principal de la tarjeta
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
    `;

    // Crear contenedor para el botón de compra (opcional si quieres estilos extra)
    const shop = document.createElement('div');
    shop.classList.add('shopButtonContainer'); // Puedes definir este estilo si lo deseas

    // Crear botón
    const shopButton = document.createElement('button');
    shopButton.classList.add('shopButton');
    shopButton.textContent = 'Añadir al carrito';

    // Agregar botón al contenedor, y el contenedor a la tarjeta
    shop.appendChild(shopButton);
    card.appendChild(shop);

    // Finalmente, agregar la tarjeta al contenedor principal
    container.appendChild(card);
  });
}

document.getElementById('searchInput').addEventListener('input', function () {
  const texto = this.value.toLowerCase();
  const filtrados = productosGuardados.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  );
  mostrarProductos(filtrados);
});

document.getElementById('cancel').addEventListener('click', () => {
  const input = document.getElementById('searchInput');
  input.value = ''; 
  mostrarProductos(productosGuardados); 
});
