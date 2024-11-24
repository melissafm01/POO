//CATALOGO DE VEHICULOS//

class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    mostrarInfo() {
      return `${this.año} ${this.marca} ${this.modelo}`;
    }
  }
  
  class Auto extends Vehiculo {
    constructor(marca, modelo, año) {
      super(marca, modelo, año);
    }
  
    conducir() {
      return `Conduciendo el auto: ${this.mostrarInfo()}`;
    }
  }
  
  class Moto extends Vehiculo {
    constructor(marca, modelo, año) {
      super(marca, modelo, año);
    }
  
    conducir() {
      return `Conduciendo la moto: ${this.mostrarInfo()}`;
    }
  }
  
  let vehiculos = [];
  
  function agregarVehiculo() {
    const tipoVehiculo = document.getElementById('tipoVehiculo').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const año = parseInt(document.getElementById('año').value);
  
    if (!marca || !modelo || isNaN(año)) {
      document.getElementById('resultado').innerText = "Por favor, rellena todos los campos correctamente.";
      return;
    }
  
    let nuevoVehiculo;
  
    if (tipoVehiculo === 'auto') {
      nuevoVehiculo = new Auto(marca, modelo, año);
    } else {
      nuevoVehiculo = new Moto(marca, modelo, año);
    }
  
    vehiculos.push(nuevoVehiculo);
    document.getElementById('resultado').innerText = `Vehículo agregado: ${nuevoVehiculo.mostrarInfo()}`;
  
    document.getElementById('tipoVehiculo').value = 'auto';
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('año').value = '';
  }
  
  function listarVehiculos() {
    if (vehiculos.length === 0) {
      document.getElementById('resultado').innerText = "No hay vehículos en el catálogo.";
      return;
    }
  
    let listado = "Lista de Vehículos:\n\n";
  
    vehiculos.forEach((vehiculo, index) => {
      listado += `${index + 1}. ${vehiculo.mostrarInfo()} (${vehiculo.constructor.name})\n`;
    });
  
    document.getElementById('resultado').innerText = listado;
  }
  