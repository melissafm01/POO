//INVENTARIO DE PRODUCTOS//
class Producto {
  constructor(nombre, precio, cantidadEnStock) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidadEnStock = cantidadEnStock;
  }
}

class Electrodomestico extends Producto {
  constructor(nombre, precio, cantidadEnStock, marca) {
    super(nombre, precio, cantidadEnStock);
    this.marca = marca;
  }
}

const productos = [];

document.getElementById("agregarProducto").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidadEnStock = parseInt(document.getElementById("cantidadEnStock").value);
  const marca = document.getElementById("marca").value;

  let producto;
  if (marca) {
    producto = new Electrodomestico(nombre, precio, cantidadEnStock, marca);
  } else {
    producto = new Producto(nombre, precio, cantidadEnStock);
  }

  productos.push(producto);
  listarProductosConStockBajo();

  ['nombre', 'precio', 'cantidadEnStock', 'marca'].forEach(id => document.getElementById(id).value = '');
});

function listarProductosConStockBajo() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  productos.forEach((producto) => {
    if (producto.cantidadEnStock < 10) {
      const p = document.createElement("p");
      p.textContent = `${producto.nombre} ${producto.marca} - Stock: ${producto.cantidadEnStock}`;
      contenedor.appendChild(p);
    }
  });
}
