//ZOOLÓGICO//
class Animal {
  constructor(nombre, especie) {
      this.nombre = nombre;
      this.especie = especie;
  }

  mostrarInfo() {
      return `${this.nombre} es un ${this.especie}`;
  }
}

class Leon extends Animal {
  constructor(nombre) {
      super(nombre, "León");
  }

  rugir() {
      return `${this.nombre} hace Rooaaar`;
  }
}

class Elefante extends Animal {
  constructor(nombre) {
      super(nombre, "Elefante");
  }

  barritear() {
      return `${this.nombre} hace Bruuuu`;
  }
}

class Tigre extends Animal {
  constructor(nombre) {
      super(nombre, "Tigre");
  }

  gruñir() {
      return `${this.nombre} hace Grrrrr`;
  }
}

let Animales = [];

function ejecutarAccionesAnimales() {
  const accionesList = document.getElementById("accionesList");
  accionesList.innerHTML = "";

  Animales.forEach((animal) => {
      let accion;

      if (animal instanceof Leon) {
          accion = animal.rugir();
      } else if (animal instanceof Elefante) {
          accion = animal.barritear();
      } else if (animal instanceof Tigre) {
          accion = animal.gruñir();
      }

      const accionDiv = document.createElement("div");
      accionDiv.textContent = accion;
      accionesList.appendChild(accionDiv);
  });
}

const animalFormulario = document.getElementById("animalForm");
const animalLista = document.getElementById("animalList");
const ejecutarAccionesBtn = document.getElementById("ejecutarAcciones");

animalFormulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombreAnimal").value;
  const especie = document.getElementById("especie").value;

  const nuevoAnimal = crearAnimal(nombre, especie);
  if (nuevoAnimal) {
      Animales.push(nuevoAnimal);
      actualizarListaAnimales();
  }
  animalFormulario.reset();
});

function crearAnimal(nombre, especie) {
  switch (especie) {
      case "Leon":
          return new Leon(nombre);
      case "Elefante":
          return new Elefante(nombre);
      case "Tigre":
          return new Tigre(nombre);
      default:
          return null;
  }
}

function actualizarListaAnimales() {
  animalLista.innerHTML = "";
  Animales.forEach((animal) => {
      const animalDiv = document.createElement("div");
      animalDiv.textContent = animal.mostrarInfo();
      animalLista.appendChild(animalDiv);
  });
}

ejecutarAccionesBtn.addEventListener("click", ejecutarAccionesAnimales);
