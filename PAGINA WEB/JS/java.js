document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado y listo');


    const carrito = [];
    const listaCarrito = document.getElementById('lista-carrito');
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = boton.getAttribute('data-producto');
            carrito.push(producto);
            actualizarCarrito();
        });
    });

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = producto;
            listaCarrito.appendChild(li);
        });
    }

    document.getElementById('comprar').addEventListener('click', () => {
        if (carrito.length > 0) {
            alert('Compra realizada con éxito!');
            carrito.length = 0;
            actualizarCarrito();
        } else {
            alert('El carrito está vacío.');
        }
    });
});