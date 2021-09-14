/* -------------------------------------------------------------------------- */
/*                 Creemos la logica de la lista de productos                 */
/* -------------------------------------------------------------------------- */

// Se localiza donde renderizar los objetos y se guarda en una variable
const listaProductos = document.getElementById("ecommerce");

// Creamos la clase de productos y luego nuestros productos
class Producto {
    constructor(title, description, price, img, id) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.id = id;
    }
}

const remeraRoja = new Producto("Remera Roja", "Remerita Roja", 450, "https://us.123rf.com/450wm/wolfelarry/wolfelarry1503/wolfelarry150300292/38415519-hombre-camiseta-roja-aislada-en-el-fondo-blanco.jpg?ver=6", 1);
const remeraNegra = new Producto("Remera Negra", "Remerita Negra", 450, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/140/609/products/remera_negra1-c1d0fa373236e9b89c16023439399640-1024-1024.jpg", 2);
const remeraVerde = new Producto("Remera Verde", "Remerita Verde", 450, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/704/127/products/verde_hoja1-d279410a6cad437c2b16229139259979-1024-1024.jpg", 3);
const gorraNegra = new Producto("Gorra Negra", "Gorra Negra", 900, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9IEafHXfoVkFDw9LGevCheZd0RvV6QaZOg&usqp=CAU", 4);
const gorraRoja = new Producto("Gorra Roja", "Gorra Roja ", 900, "https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg", 5);
const gorraVerde = new Producto("Gorra Verde", "Gorra Verde", 900, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9629grrK62cT_Hvw3X2hj02HHzR714PlpA&usqp=CAU", 6);

//Los metemos dentro de nuestra base de datos (array)
const baseDeDatosRopa = [remeraRoja, remeraNegra, remeraVerde, gorraNegra, gorraRoja, gorraVerde];

//Creamos el carrito con localStorage o array vacio
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Creamos un acumulador donde se crearan nuestras cards de productos
let acumulador = ``;
baseDeDatosRopa.forEach((producto) => {
    acumulador += `
  <div class="col">
    <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top imgProd" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title titleProd" id="">${producto.title}</h5>
        <p class="card-text descriptionProd" id="">${producto.description}</p>
        <p class="card-text priceProd" id="">${producto.price}</p>
        <button data-id="${producto.id}" class="btn btn-primary agregar-carrito">Agregar</button>
      </div>
    </div>
  </div>`;
});

// Imprimimos las cards
listaProductos.innerHTML = acumulador;

//  Se agrega un listener y llama a la funcion agregarAlCarrito (Ctrl + Click para ir a funcion)
//  Validación si existe el elemento para agregar el listener (evita errores)
if (listaProductos) { listaProductos.addEventListener("click", agregarAlCarrito); }


//  agregarAlCarrito recibe el evento de click con sus datos
function agregarAlCarrito(e) {
    e.preventDefault();

    // Se localiza el click:
    if (e.target.classList.contains("agregar-carrito")) {
        /** Se guarda dentro de producto seleccionado la card:
         *  .target para saber donde se encuentra
         *  .parentNode para acceder a la card completa (suponiendo que hay un solo nivel, sino agregar otro .parentNode)
         */
        const productoSeleccionado = e.target.parentNode;
        console.log(productoSeleccionado);

        //Pasa el producto a obtenerDatos()
        //obtenerDatos(productoSeleccionado);
        obtenerDatos(productoSeleccionado);
    }
}
function obtenerDatos(productoCard) {
    //Se construye el objeto para guardarlo posteriormente en un array (carrito, o etc)
    const datosProducto = {
        nombre: productoCard.querySelector(".titleProd").textContent,
        modelo: productoCard.querySelector(".descriptionProd").textContent,
        precio: productoCard.querySelector(".priceProd").textContent,
        //Si tiene imagen sería accediento al atributo '.src':
        img: productoCard.parentNode.querySelector(".imgProd").src
    };
    //Veamos que guardamos:
    console.log(datosProducto);

    //Validemos si el producto ya existe (tarea), y pusheamos al carrito:
    carrito.push(datosProducto);
    console.log(carrito);
    guardarStorage();
}

// --Guardado en el local storage
function guardarStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}



/* -------------------------------------------------------------------------- */
/*                             Creemos el carrito                             */
/* -------------------------------------------------------------------------- */
const contenedorCarrito = document.querySelector("#carrito")
const mostrarCarrito = document.querySelector("#mostrar-carrito")


if (mostrarCarrito) {
    mostrarCarrito.addEventListener('click', mostrarElCarrito)

}
function mostrarElCarrito() {
    if (localStorage.length == 0) {
        const msgInicial = document.createElement("h2")
        msgInicial.innerHTML = "No hay productos en el carrito :("
        contenedorCarrito.appendChild(msgInicial);
    } else {
        renderizarCarrito()
    }
}

function renderizarCarrito() {
    limpiarCarrito()
    carrito.forEach(producto => {
        const row = document.createElement('div');
        row.classList.add("row")

        row.innerHTML += `
            <div class="col">
                <img class="w-50" src="${producto.img}"/>
            </div>
            <div class="col">
                <h2 class="">${producto.nombre}</h2>
                <h4>${producto.precio}</h4>
            </div>
            <hr/>
        `
        contenedorCarrito.appendChild(row)
    })
}

//----------------------------------------------------------------Limpia la lista del carrito
function limpiarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}