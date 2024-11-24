//TIENDA DE MASCOTA//


class Mascota {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  
    info() {
      return `Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
    }
  }
  
  class Perro extends Mascota {
    constructor(nombre) {
      super(nombre, "Perro");
    }
  
    ladrar() {
      return `${this.nombre} dice: ¡Guau!`;
    }
  }
  
  class Gato extends Mascota {
    constructor(nombre) {
      super(nombre, "Gato");
    }
  
    maullar() {
      return `${this.nombre} dice: ¡Miau!`;
    }
  }
  
  const mascotas = [];
  
  document.getElementById("agregarMascota").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const tipo = document.getElementById("tipo").value.trim();
  
    if (nombre === "" || tipo === "") {
      alert("Por favor, completa todos los campos y selecciona un tipo de mascota válido.");
      return;
    }
  
    let mascota;
    if (tipo === "perro") {
      mascota = new Perro(nombre);
    } else if (tipo === "gato") {
      mascota = new Gato(nombre);
    } else {
      alert("Tipo de mascota no válido.");
      return;
    }
  
    mascotas.push(mascota);
    document.getElementById("resultado10").innerHTML += `Se agregó: ${mascota.info()}<br>`;
  
    document.getElementById("nombre").value = "";
    document.getElementById("tipo").selectedIndex = 0;
  });
  
  document.getElementById("realizarAcciones").addEventListener("click", () => {
    if (mascotas.length === 0) {
      document.getElementById("resultado10").innerHTML += "No hay mascotas en el catálogo.<br>";
      return;
    }
  
    const acciones = mascotas.map(mascota => {
      if (mascota instanceof Perro) {
        return mascota.ladrar();
      } else if (mascota instanceof Gato) {
        return mascota.maullar();
      }
    }).join("<br>");
  
    document.getElementById("resultado10").innerHTML += "<h3>Acciones de Mascotas:</h3>" + acciones + "<br>";
  });
  