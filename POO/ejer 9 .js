//SISTEMA DE TRANSPORTE//

class Transporte {
    constructor(capacidad, tipoCombustible) {
      this.capacidad = capacidad;
      this.tipoCombustible = tipoCombustible;
    }
  
    info() {
      return `Capacidad: ${this.capacidad}, Tipo de Combustible: ${this.tipoCombustible}`;
    }
  }
  
  class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible) {
      super(capacidad, tipoCombustible);
    }
  
    arrancar() {
      return "El autobús ha arrancado.";
    }
  }
  
  class Bicicleta extends Transporte {
    constructor(capacidad, tipoCombustible) {
      super(capacidad, tipoCombustible);
    }
  
    pedalear() {
      return "La bicicleta está pedaleando.";
    }
  }
  
  const transportes = [];
  
  document.getElementById("agregarTransporte").addEventListener("click", () => {
    const tipo = document.getElementById("tipo").value.trim().toLowerCase();
    const capacidad = parseInt(document.getElementById("capacidad").value);
    const tipoCombustible = document.getElementById("tipoCombustible").value.trim();
  
    let transporte;
  
    if (tipo === "autobus") {
      transporte = new Autobus(capacidad, tipoCombustible);
    } else if (tipo === "bicicleta") {
      transporte = new Bicicleta(capacidad, tipoCombustible);
    } else {
      alert("Tipo de transporte no reconocido. Usa 'Autobus' o 'Bicicleta'.");
      return;
    }
  
    transportes.push(transporte);
    document.getElementById("resultado9").innerHTML += `Se agregó: ${transporte.constructor.name} (${transporte.info()})<br>`;
  
    document.getElementById("tipo").value = "";
    document.getElementById("capacidad").value = "";
    document.getElementById("tipoCombustible").value = "";
  });
  
  document.getElementById("listarTransportes").addEventListener("click", () => {
    if (transportes.length === 0) {
      document.getElementById("resultado9").innerHTML += "No hay transportes en el catálogo.<br>";
      return;
    }
  
    const listado = transportes.map(transporte => {
      const accion = transporte instanceof Autobus ? transporte.arrancar() : transporte.pedalear();
      return `${transporte.constructor.name}: ${transporte.info()}. Acción: ${accion}`;
    }).join("<br>");
  
    document.getElementById("resultado9").innerHTML += "<h3>Transportes en el catálogo:</h3>" + listado + "<br>";
  });
  