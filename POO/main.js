
// GESTION DE ESTUDIANTES 

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad) {
    super(nombre, edad);
    this.calificaciones = [];
  }

  agregarCalificacion(calificacion) {
    this.calificaciones.push(calificacion);
  }

  calcularPromedio() {
    if (this.calificaciones.length === 0) {
      return 0;
    }
    const suma = this.calificaciones.reduce((acc, cal) => acc + cal, 0);
    return suma / this.calificaciones.length;
  }
}

const estudiantes = {};

// Función para agregar estudiante
document.getElementById("agregarEstudiante").addEventListener("click", () => {  //Aquí, se usa addEventListener para asignar una acción al botón con id="agregarEstudiante". Cuando el usuario hace clic, se ejecuta el código que está dentro de la función.
  const nombre = document.getElementById("nombre").value.trim();  //nombre y edad son los valores ingresados en los campos de entrada de nombre y edad.   .trim() elimina espacios adicionales.
  const edad = parseInt(document.getElementById("edad").value);
  if (nombre && !isNaN(edad)) {   //Esta condición asegura que ambos campos estén llenos y que edad sea un número válido (no NaN).
    if (estudiantes[nombre]) {
      alert("El estudiante ya existe.");   //Se comprueba si el nombre del estudiante ya existe en el objeto estudiantes. Si el estudiante ya existe, muestra un mensaje de alerta.
    } else {
      estudiantes[nombre] = new Estudiante(nombre, edad); //Si el estudiante no existe, se crea un nuevo objeto Estudiante con nombre y edad, y se guarda en el objeto estudiantes.
      document.getElementById("resultado1").innerHTML += `${nombre} ha sido agregado.<br>`;   //Añade un mensaje de confirmación en el div con id="resultado1".
      document.getElementById("nombre").value = "";  //Luego, vacía los campos de entrada.
      document.getElementById("edad").value = "";
    }
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Función para agregar calificación
document.getElementById("agregarCalificacion").addEventListener("click", () => {
  const nombreEstudiante = document.getElementById("nombreEstudianteCalificacion").value.trim();
  const calificacion = parseFloat(document.getElementById("calificacion").value);    //Obtiene el nombre del estudiante y la calificación.
  if (estudiantes[nombreEstudiante] && !isNaN(calificacion)) {  //Verifica si el estudiante existe en el objeto estudiantes. Comprueba que la calificación es un número válido.
    estudiantes[nombreEstudiante].agregarCalificacion(calificacion);  //Llama al método agregarCalificacion del estudiante para añadir la calificación.
    document.getElementById("resultado1").innerHTML += `Se agregó la calificación ${calificacion} a ${nombreEstudiante}.<br>`;  //Muestra un mensaje de confirmación.
    document.getElementById("nombreEstudianteCalificacion").value = "";
    document.getElementById("calificacion").value = "";  //Vacía los campos de entrada para que estén listos para un nuevo ingreso.
  } else {
    alert("Estudiante no encontrado o calificación no válida.");
  }
});

// Función para calcular promedio
document.getElementById("calcularPromedio").addEventListener("click", () => {
  const nombreEstudiante = document.getElementById("nombreEstudiantePromedio").value.trim();  //Captura el nombre del estudiante para buscarlo en el objeto estudiantes.
  if (estudiantes[nombreEstudiante]) {  //Comprueba si el estudiante existe en el objeto estudiantes.
    const promedio = estudiantes[nombreEstudiante].calcularPromedio();  //Usa el método calcularPromedio del objeto Estudiante para obtener el promedio.
    document.getElementById("resultado1").innerHTML += `El promedio de ${nombreEstudiante} es ${promedio.toFixed(2)}.<br>`;  //Muestra el promedio en el div resultado1
    document.getElementById("nombreEstudiantePromedio").value = "";
  } else {
    alert("Estudiante no encontrado.");
  }
});





//ZOOLÓGICO//
class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  // Método para mostrar la información básica del animal
  mostrarInfo() {
    return `${this.nombre} es un ${this.especie}`;
  }
}

// Clases derivadas para cada especie
class Leon extends Animal {
  constructor(nombre) {
    super(nombre, "León");
  }

  // Método específico del León
  rugir() {
    return `${this.nombre} hace Rooaaar`;
  }
}

class Elefante extends Animal {
  constructor(nombre) {
    super(nombre, "Elefante");
  }

  // Método específico del Elefante
  barritear() {
    return `${this.nombre} hace Bruuuu`;
  }
}

class Tigre extends Animal {
  constructor(nombre) {
    super(nombre, "Tigre");
  }

  // Método específico del Tigre
  gruñir() {
    return `${this.nombre} hace Grrrrr`;
  }
}

// Arreglo para almacenar los animales
let Animales = [];

// Método para ejecutar las acciones de los animales
function ejecutarAccionesAnimales() { //La función ejecutarAccionesAnimales toma cada animal guardado en Animales y realiza una acción específica según su especie.
  const accionesList = document.getElementById("accionesList"); // Primero, selecciona el elemento con el id accionesList en el DOM (el contenedor donde se mostrarán las acciones)
  accionesList.innerHTML = ""; // Limpia para que, si ya se mostraron acciones previas, se borren antes de agregar las nuevas.

  Animales.forEach((animal) => { //vamos a iterar sobre el arrauy animales que tiene una lista de animales y vamos a hacer la funcion forEach  para recorrer cada animal en el arreglo Animales. animal es el nombre que se le da al parámetro en esta función anónima; representa a cada instancia de Leon, Elefante, o Tigre en cada iteración.
    let accion; //se asigna una variable llamada accion  almacenara la acción específica que el animal realizará según su especie.
   
    //instanceof para verifivar su tipo si es (leon ,elefante, tigre)
    if (animal instanceof Leon) {  // verifica si animal es una instancia de la clase Leon.
      accion = animal.rugir(); // se ejecuta el método rugir() en esta instancia. Este método debería devolver el sonido que hace un león.
    } else if (animal instanceof Elefante) { //verifica si es elefante
      accion = animal.barritear();
    } else if (animal instanceof Tigre) { // ...
      accion = animal.gruñir();
    }

    // Mostrar la acción en el navegador
    const accionDiv = document.createElement("div"); //Aquí, se crea un div para mostrar la acción de cada animal en el navegador.
    accionDiv.textContent = accion; //El texto (textContent) de este div será el valor almacenado en accion.
    accionesList.appendChild(accionDiv); //Finalmente, el div se añade a accionesList en el DOM, mostrando cada acción de los animales.
  });
}

// Referencias al DOM
const animalFormulario = document.getElementById("animalForm"); //Se crean constantes que almacenan referencias a elementos del DOM: el formulario (animalForm), la lista de animales (animalList), y el botón que ejecuta las acciones (ejecutarAcciones). Esto permite acceder a estos elementos en otras funciones sin tener que buscarlos de nuevo.
const animalLista = document.getElementById("animalList");
const ejecutarAccionesBtn = document.getElementById("ejecutarAcciones");

// Evento para agregar un animal
animalForm.addEventListener("submit", function (e) { //Se configura un evento submit para el formulario animalForm. Cada vez que el usuario envíe el formulario, se llama a esta función.
  e.preventDefault(); // Evita que la página se recargue al enviar el formulario (se utiliza para detener el comportamiento por defecto de un evento)
  const nombre = document.getElementById("nombreAnimal").value; //Los valores de nombre y especie se obtienen de los campos nombreAnimal y especie, respectivamente.
  const especie = document.getElementById("especie").value;


  // Crear y agregar un nuevo animal
  const nuevoAnimal = crearAnimal(nombre, especie); //luego de capturar los valores de arriva se pasa la informacion a la funcion crearanimal()   crea una instancia del animal según la especie y se guarda en nuevoAnimal.
  if (nuevoAnimal) {
    Animales.push(nuevoAnimal); // Se agrega el nuevo animal al array Animales
    actualizarListaAnimales(); // Se actualiza la lista de animales en el DOM
  }
  animalForm.reset(); // limpia los campos del formulario  para que el usuario pueda ingresar otro animal.
});

// Crear un animal según la especie
function crearAnimal(nombre, especie) {
  switch (
    especie //Evalúa el valor de especie. Dependiendo de lo que sea, creará un animal diferente:
  ) {
    case "Leon":
      return new Leon(nombre); // Si la especie es 'Leon', retorna una instancia de la clase Leon
    case "Elefante":
      return new Elefante(nombre);
    case "Tigre":
      return new Tigre(nombre);
    default:
      return null; // si no concide con ninguna especie
  }
}
// Función para actualizar la lista de animales en el DOM
function actualizarListaAnimales() {
  animalList.innerHTML = ""; // primero Limpia lista previa
  Animales.forEach((animal) => { //Luego, recorre cada animal en Animales, crea un div y le asigna el texto devuelto por animal.mostrarInfo().
    //recorre el array animal
    const animalDiv = document.createElement("div"); // crea un nuevo div en el dom para  cada animal  mostrando los animales registrados.
    animalDiv.textContent = animal.mostrarInfo(); //asigna el texto con la informacion del animal
    animalList.appendChild(animalDiv); //añade el nuevo div a la lista de animales en el dom
  });
}

// Evento para ejecutar las acciones de los animales
ejecutarAccionesBtn.addEventListener("click", ejecutarAccionesAnimales); // que cuando le click en la funcion ejecutaranimales recorra el array y y ejecute las acciones de todos los animales guardados en Animales.





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

  //Captura de Valores del Formulario
    const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidadEnStock = parseInt(document.getElementById("cantidadEnStock").value);
  const marca = document.getElementById("marca").value;

  //Crear un Producto o un Electrodoméstico
  let producto; //Se declara una variable producto para almacenar el objeto creado. Luego, se verifica si marca tiene algún valor:
  if (marca) {
    producto = new Electrodomestico(nombre, precio, cantidadEnStock, marca); //Si marca tiene un valor: Se asume que el producto es un electrodoméstico, y se crea un objeto de la clase Electrodomestico, que incluye marca como propiedad.
  } else {
    producto = new Producto(nombre, precio, cantidadEnStock); //Si marca no tiene valor: Se crea un objeto de la clase Producto, que no incluye marca.
  }

  //Agregar el Producto al Arreglo y Listar Productos con Stock Bajo
  productos.push(producto); // Se agrega el nuevo objeto producto al arreglo productos.
  listarProductosConStockBajo(); //Se llama a la función listarProductosConStockBajo, que actualiza la lista de productos con stock menor a 10.

  ['nombre', 'precio', 'cantidadEnStock', 'marca'].forEach(id => document.getElementById(id).value = '');  // tambien se puede hacer asi document.getElementById("nombre").value = '';  para limpiar los campos del formulario
});

//Función listarProductosConStockBajo
function listarProductosConStockBajo() { //Esta función actualiza la lista en el DOM para mostrar únicamente los productos que tienen menos de 10 unidades en stock.
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";  // limpiamos el contenedor para evitar duplicaciones al agregar un nuevo producto.
  productos.forEach((producto) => {  //Se utiliza un forEach para iterar sobre todos los elementos del arreglo productos.
    if (producto.cantidadEnStock < 10) { //se evalua . Si la cantidad en stock de producto es menor a 10,
      const p = document.createElement("p"); // Se crea un nuevo elemento <p> para mostrar la información del producto.
      p.textContent = `${producto.nombre} ${producto.marca} - Stock: ${producto.cantidadEnStock} `;  // se asigna con el nombre del producto, la marca (si está presente), y la cantidad en stock.
      contenedor.appendChild(p);  // Finalmente, el elemento <p> se añade al contenedor en el DOM, mostrando así los productos con stock menor a 10 en la página.
    }
  });
}




//SISTEMA DE EMPLEADO//
class Empleado {
  constructor(nombre, sueldo) {
      this.nombre = nombre;
      this.sueldo = sueldo;
  }
}

class EmpleadoTiempoCompleto extends Empleado {
  calcularSueldo(horasTrabajadas) {
      return horasTrabajadas * this.sueldo;
  }
}

class EmpleadoMedioTiempo extends Empleado {
  calcularSueldo(horasTrabajadas) {
      return horasTrabajadas * this.sueldo * 0.5;
  }
}

const empleados = [];


// Agregar un Empleado al Sistema
document.getElementById('agregarEmpleado').addEventListener('click', () => {
  //Captura de Datos del Formulario:
  const nombre = document.getElementById('nombre').value;
  const sueldo = parseFloat(document.getElementById('sueldo').value);
  const horasTrabajadas = parseInt(document.getElementById('horasTrabajadas').value);
  const tipoEmpleado = document.getElementById('tipoEmpleado').value;

  //Crear una Instancia de Empleado Según el Tipo Seleccionado:
  let empleado; // Se declara una variable empleado que se usará para almacenar la nueva instancia de empleado.
//Luego se usa una estructura condicional if para determinar qué tipo de empleado se va a crear.
  if (tipoEmpleado === 'tiempoCompleto') {  //Si el tipoEmpleado es 'tiempoCompleto', se crea una instancia de EmpleadoTiempoCompleto, pasando nombre y sueldo al constructor.
      empleado = new EmpleadoTiempoCompleto(nombre, sueldo);
  } else {
      empleado = new EmpleadoMedioTiempo(nombre, sueldo); //Si no, se asume que es un empleado de medio tiempo y se crea una instancia de EmpleadoMedioTiempo.
  }

  // Asegurarse de que se agregue correctamente con horas trabajadas
  empleados.push({ empleado, horasTrabajadas }); //Aquí se agrega el nuevo empleado al arreglo empleados. Se está utilizando push() para añadir un objeto que contiene tanto el empleado como horasTrabajadas al arreglo.
  listarSueldos();  //Luego, se llama a la función listarSueldos() para actualizar la lista de sueldos que se muestra en la interfaz.
});

 //Listar Sueldos
function listarSueldos() {
  const contenedor = document.getElementById('empleados'); // comienza seleccionando el contenedor donde se mostrará la lista de sueldos utilizando getElementById.
  contenedor.innerHTML = '';  // Limpia el contenido anterior para que cada vez que se añada un nuevo empleado, no se duplique la lista de sueldos anteriores.


  // Calcular y Mostrar Sueldos
  empleados.forEach(({ empleado, horasTrabajadas }) => {  //Se utiliza el método forEach() para recorrer cada empleado en el arreglo empleados.  Para cada empleado, se extrae el objeto empleado y horasTrabajadas usando destructuración de objetos.
      const p = document.createElement('p');   //Se crea un nuevo elemento <p> que contendrá el sueldo total del empleado.
      const sueldoTotal = empleado.calcularSueldo(horasTrabajadas);  //Se llama al método calcularSueldo de la clase del empleado, pasando horasTrabajadas como argumento. Esto calculará el sueldo total en función de si es tiempo completo o medio tiempo.
      p.textContent = `El sueldo Total de ${empleado.nombre} es de: $${sueldoTotal.toFixed(2)}`; //Se establece el texto del párrafo, mostrando el nombre del empleado y su sueldo total.
      contenedor.appendChild(p);  //Finalmente, el párrafo creado  Añade el resultado al contenedor mostrando el sueldo
  });
}




//SISTEMA BANCARIO//

class CuentaBancaria {
  constructor(numeroCuenta, saldo = 0) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldo;
  }

  depositar(cantidad) {
      if (cantidad > 0) {
          this.saldo += cantidad;  //Aumenta el saldo si la cantidad es válida (mayor que 0). Retorna un mensaje con el saldo actual.
          return `Depósito de $${cantidad} realizado. Saldo actual: $${this.saldo}`;
      } else {
          return "La cantidad debe ser mayor a 0.";
      }
  }

  retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) { // Disminuye el saldo si la cantidad es válida (mayor que 0 y menor o igual al saldo).
          this.saldo -= cantidad;
          return `Retiro de $${cantidad} realizado. Saldo actual: $${this.saldo}`;
      } else {
          return "Saldo insuficiente o cantidad no válida.";  // Retorna un mensaje con el saldo actual o un mensaje de error si no se puede retirar.
      }
  }
}

class CuentaAhorros extends CuentaBancaria {
  constructor(numeroCuenta, saldo) {
      super(numeroCuenta, saldo);
      this.tasaInteres = 0.05;  // 5% de interés
  }

  aplicarIntereses() {
      let interes = this.saldo * this.tasaInteres;  //Calcula el interés sobre el saldo y lo añade al saldo. Retorna un mensaje con el interés aplicado y el nuevo saldo.
      this.saldo += interes;
      return `Interés aplicado: $${interes.toFixed(2)}. Saldo actual: $${this.saldo.toFixed(2)}`;
  }
}

class CuentaCorriente extends CuentaBancaria {
  constructor(numeroCuenta, saldo) {
      super(numeroCuenta, saldo);
  }
}

// Arreglo para almacenar las cuentas
let cuentas = []; // Un arreglo para almacenar todas las cuentas creadas.
let cuentaActual;  // Una variable que mantiene la referencia a la cuenta actual en la que se están realizando operaciones.

// Función para crear una nueva cuenta
function crearCuenta() {
  const numeroCuenta = document.getElementById('numeroCuenta').value;
  const saldoInicial = parseFloat(document.getElementById('saldoInicial').value);  //Obtener valores del formulario:
  const tipoCuenta = document.getElementById('tipoCuenta').value;

  //validacion
  if (!numeroCuenta || isNaN(saldoInicial)) { //Se verifica si numeroCuenta está vacío o si saldoInicial no es un número válido (isNaN()).
      document.getElementById('resultado5').innerText = "Por favor, rellena todos los campos correctamente.";  // Si alguna de estas condiciones es cierta, se muestra un mensaje de error y se detiene la ejecución de la función con return.
      return;
  }

  //Crear la cuenta:
  if (tipoCuenta === 'ahorros') {  //Si el tipo de cuenta es "ahorros",
      cuentaActual = new CuentaAhorros(numeroCuenta, saldoInicial);  //se crea una nueva instancia de CuentaAhorros y se almacena en cuentaActual
      document.getElementById('intereses').style.display = 'block';  //Además, se hace visible el botón para aplicar intereses.
  } else if (tipoCuenta === 'corriente') {   //Si el tipo de cuenta es "corriente"
      cuentaActual = new CuentaCorriente(numeroCuenta, saldoInicial); //se crea una instancia de CuentaCorriente  y se almacena en cuentaActual
      document.getElementById('intereses').style.display = 'none'; // y  se oculta el botón de intereses.
  }

  //Almacenar la cuenta:
  cuentas.push(cuentaActual); //La nueva cuenta se agrega al arreglo cuentas, que guarda todas las cuentas creadas
  document.getElementById('resultado5').innerText = `Cuenta ${tipoCuenta} creada con éxito. Saldo inicial: $${cuentaActual.saldo}`; //Se muestra un mensaje en el elemento con el ID resultado5, indicando que la cuenta se ha creado con éxito y mostrando el saldo inicial.
}

// Función para realizar un depósito
function realizarDeposito() {
  const cantidad = parseFloat(document.getElementById('cantidad').value); //Se obtiene el valor de la cantidad a depositar y se convierte a número flotante.
  if (cuentaActual) {  //Se comprueba si cuentaActual existe (es decir, si se ha creado previamente una cuenta).
      const resultado = cuentaActual.depositar(cantidad);  //Si existe, se llama al método depositar() de la cuenta actual y se almacena el resultado.

      //Mostrar resultado:
      document.getElementById('resultado5').innerText = resultado; //Se actualiza el elemento con el ID resultado5 con el resultado de la operación de depósito.
  } else {
      document.getElementById('resultado5').innerText = "Primero crea una cuenta."; //Si no hay una cuenta activa, se muestra un mensaje indicando que primero se debe crear una cuenta.
  }
}

// Función para realizar un retiro
function realizarRetiro() {
  const cantidad = parseFloat(document.getElementById('cantidad').value);  //se obtiene el valor de la cantidad a retirar.
  if (cuentaActual) { //Se comprueba si cuentaActual existe.
      const resultado = cuentaActual.retirar(cantidad);   //Si existe, se llama al método retirar() de la cuenta actual y se almacena el resultado.
      document.getElementById('resultado5').innerText = resultado;  //Se actualiza el elemento con el ID resultado5 con el resultado de la operación de retiro.
  } else {
      document.getElementById('resultado5').innerText = "Primero crea una cuenta."; //Si no hay una cuenta activa, se muestra un mensaje indicando que primero se debe crear una cuenta.
  }
}

// Función para aplicar intereses (solo para cuentas de ahorro)
function aplicarIntereses() {
  if (cuentaActual instanceof CuentaAhorros) { //Se comprueba si cuentaActual es una instancia de CuentaAhorros utilizando instanceof. Esto asegura que solo se apliquen intereses a cuentas de ahorros.
      const resultado = cuentaActual.aplicarIntereses(); //Si la cuenta es de ahorros, se llama al método aplicarIntereses() de la cuenta actual y se almacena el resultado.
      document.getElementById('resultado5').innerText = resultado; // Se actualiza el elemento con el ID resultado5 con el resultado de la operación de aplicación de intereses.
  } else {
      document.getElementById('resultado5').innerText = "Esta cuenta no es de ahorros."; //Si la cuenta no es de ahorros, se muestra un mensaje indicando que no se pueden aplicar intereses.
  }
}


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
// Arreglo para almacenar los vehículos
let vehiculos = [];  //Este arreglo se utilizará para almacenar todas las instancias de vehículos que se agreguen a lo largo de la aplicación.

// Función para agregar un vehículo
function agregarVehiculo() {
  const tipoVehiculo = document.getElementById('tipoVehiculo').value; // Obtener valores de los campos del formulario
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const año = parseInt(document.getElementById('año').value);

  //Validar entradas
  if (!marca || !modelo || isNaN(año)) { //Comprueba si marca o modelo están vacíos.  Utiliza isNaN(año) para verificar que el año ingresado sea un número válido.
      document.getElementById('resultado6').innerText = "Por favor, rellena todos los campos correctamente."; // Si alguna de las validaciones falla, se muestra un mensaje en el div con id resultado y la función se detiene con return.
      return;
  }

// crear un nuevo vehiculo
  let nuevoVehiculo; //Se declara una variable nuevoVehiculo que almacenará la instancia del nuevo vehículo.

  //condicional
  if (tipoVehiculo === 'auto') { //Si el tipo de vehículo es "auto"
      nuevoVehiculo = new Auto(marca, modelo, año); //se crea una nueva instancia de la clase Auto pasando los valores de marca, modelo y año.
  } else {
      nuevoVehiculo = new Moto(marca, modelo, año); //Si el tipo de vehículo es "moto", se crea una nueva instancia de la clase Moto con los mismos parámetros.
  }

  //Agregar vehículo al arreglo
  vehiculos.push(nuevoVehiculo); // El nuevo vehículo se añade al arreglo vehiculos utilizando push().
  document.getElementById('resultado6').innerText = `Vehículo agregado: ${nuevoVehiculo.mostrarInfo()}`; // Se actualiza el div resultado para informar que el vehículo ha sido agregado con éxito, utilizando el método mostrarInfo() de la clase correspondiente.

    // Vaciar el formulario después de agregar el vehículo
    document.getElementById('tipoVehiculo').value = 'auto'; // Restablece el tipo a "auto" (o lo que prefieras)
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('año').value = '';
}



// Función para listar los vehículos
function listarVehiculos() {

  //Verificar si hay vehículos
  if (vehiculos.length === 0) { // Se verifica si el arreglo vehiculos está vacío.
      document.getElementById('resultado6').innerText = "No hay vehículos en el catálogo."; //Si está vacío, se muestra un mensaje en el div resultado y la función se detiene con return.
      return;
  }


  //Crear listado de vehículos
  let listado = "Lista de Vehículos:\n\n"; //se crea una variable llamada listado que inicia como una cadena de texto. La cadena comienza con el título "Lista de Vehículos:" y dos saltos de línea \n\n para dar un espacio visual antes de comenzar a enumerar los vehículos.

  vehiculos.forEach((vehiculo, index) => {   //Se utiliza forEach para iterar sobre cada elemento en el arreglo vehiculos. Este método permite ejecutar una función para cada elemento del arreglo. index: Es el índice actual en el arreglo, comenzando desde 0. Se usa para numerar los vehículos en la lista.
      listado += `${index + 1}. ${vehiculo.mostrarInfo()} (${vehiculo.constructor.name})\n`;   // Esta línea agrega información a la variable listado      ${index + 1}: Añade el número del vehículo en la lista, comenzando desde 1 (por eso se suma 1 al índice, que comienza en 0).
                                                                                              //${vehiculo.mostrarInfo()}: Llama al método mostrarInfo() del objeto vehiculo. Este método devuelve una cadena que describe el vehículo (por ejemplo, "2023 Toyota Corolla").        ${vehiculo.mostrarInfo()}: Llama al método mostrarInfo() del objeto vehiculo. Este método devuelve una cadena que describe el vehículo (por ejemplo, "2023 Toyota Corolla").     \n: Al final, se añade un salto de línea para que cada vehículo aparezca en una nueva línea en el listado.
  });

  document.getElementById('resultado6').innerText = listado;   //: Finalmente, esta línea asigna el contenido de listado al elemento con el id resultado
}


// GESTION DE CURSOS

class Curso {
  constructor(nombreCurso) {
    this.nombreCurso = nombreCurso;
    this.estudiantes = [];
  }

  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
  }

  calcularPromedio() {
    if (this.estudiantes.length === 0) {
      return 0;
    }
    const sumaPromedios = this.estudiantes.reduce((acc, est) => acc + est.calcularPromedio(), 0);
    return sumaPromedios / this.estudiantes.length;
  }
}

// Subclase CursoOnline
class CursoOnline extends Curso {
  constructor(nombreCurso) {
    super(nombreCurso);
  }

  mostrarInfo() {
    return `Curso Online: ${this.nombreCurso}.`;
  }
}

// Subclase CursoPresencial
class CursoPresencial extends Curso {
  constructor(nombreCurso) {
    super(nombreCurso);
  }

  mostrarInfo() {
    return `Curso Presencial: ${this.nombreCurso}.`;
  }
}

const cursos = {};

// Función para agregar curso
document.getElementById("agregarCurso").addEventListener("click", () => {
  const nombreCurso = document.getElementById("nombreCurso").value.trim();
  const tipoCurso = document.querySelector('input[name="tipoCurso"]:checked');

  if (nombreCurso && tipoCurso) {
    if (tipoCurso.value === "online") {
      if (cursos[nombreCurso]) {
        alert("El curso ya existe.");
      } else {
        cursos[nombreCurso] = new CursoOnline(nombreCurso);
        document.getElementById("resultado7").innerHTML += `${nombreCurso} (Online) ha sido agregado.<br>`;
        document.getElementById("nombreCurso").value = ""; // Limpiar campo
      }
    } else if (tipoCurso.value === "presencial") {
      if (cursos[nombreCurso]) {
        alert("El curso ya existe.");
      } else {
        cursos[nombreCurso] = new CursoPresencial(nombreCurso);
        document.getElementById("resultado7").innerHTML += `${nombreCurso} (Presencial) ha sido agregado.<br>`;
        document.getElementById("nombreCurso").value = ""; // Limpiar campo
      }
    } else {
      alert("Por favor, completa todos los campos.");
    }
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Función para agregar estudiante a un curso
document.getElementById("agregarEstudianteCurso").addEventListener("click", () => {
  const nombreEstudiante = document.getElementById("nombreEstudianteCurso").value.trim();
  const cursoNombre = document.getElementById("cursoNombre").value.trim();
  if (cursos[cursoNombre] && estudiantes[nombreEstudiante]) {
    cursos[cursoNombre].agregarEstudiante(estudiantes[nombreEstudiante]);
    document.getElementById("resultado7").innerHTML += `${nombreEstudiante} ha sido agregado al curso ${cursoNombre}.<br>`;
    document.getElementById("nombreEstudianteCurso").value = ""; // Limpiar campo
    document.getElementById("cursoNombre").value = "";
  } else {
    alert("Curso no encontrado o estudiante no existe.");
  }
});

// Función para calcular promedio de un curso
document.getElementById("calcularPromedioCurso").addEventListener("click", () => {
  const nombreCurso = document.getElementById("cursoPromedio").value.trim();
  if (cursos[nombreCurso]) {
    const promedioCurso = cursos[nombreCurso].calcularPromedio();
    document.getElementById("resultado7").innerHTML += `El promedio del curso ${nombreCurso} es ${promedioCurso.toFixed(2)}.<br>`;
    document.getElementById("cursoPromedio").value = ""; // Limpiar campo
  } else {
    alert("Curso no encontrado.");
  }
});



//GESTION DE BIBLIOTECAS//
class Libro {
  constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
  }
}

class LibroDigital extends Libro {
  constructor(titulo, autor) {
      super(titulo, autor);
  }
}

class LibroFisico extends Libro {
  constructor(titulo, autor) {
      super(titulo, autor);
  }
}

const biblioteca = [];

// Función para agregar libro
document.getElementById("agregarLibro").addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const tipoLibro = document.getElementById("tipoLibro").value; //se captura los valores


  //validacion
  if (titulo && autor && tipoLibro) {  // Verifica que todos los campos tengan un valor. Si alguno está vacío, no se procede con la creación del libro.

      //creacion del libro
      let libro;  //Se declara la variable
      if (tipoLibro === "digital") {  //Luego, dependiendo del tipo de libro seleccionado, se instancia ya sea LibroDigital o LibroFisico:
          libro = new LibroDigital(titulo, autor);  // Si se selecciona "Libro Digital", se crea un nuevo objeto de la clase LibroDigital.
      } else if (tipoLibro === "fisico") { //Si se selecciona "Libro Físico", se crea un nuevo objeto de la clase LibroFisico.
          libro = new LibroFisico(titulo, autor);
      }
      
      //Agregar a la biblioteca:
      biblioteca.push(libro); // Se añade el nuevo libro al arreglo biblioteca.
      document.getElementById("resultado8").innerHTML += `Se agregó: "${titulo}" de ${autor} (${tipoLibro}).<br>`; //: Se actualiza el div con el mensaje que indica que se agregó el libro. El uso de += permite añadir más texto al div sin borrar el contenido anterior.

      // Limpiar campos
      document.getElementById("titulo").value = "";
      document.getElementById("autor").value = "";
      document.getElementById("tipoLibro").value = "";
  } else {
      alert("Por favor, completa todos los campos.");
  }
});

// Función para listar libros por autor
document.getElementById("listarLibros").addEventListener("click", () => {
  const autorBuscar = document.getElementById("autorBuscar").value.trim(); // Se obtiene el valor del campo de búsqueda y se eliminan los espacios.

  //Filtrar libros:
  const librosDelAutor = biblioteca.filter(libro => libro.autor === autorBuscar); //Se utiliza el método filter para crear un nuevo arreglo que contiene solo los libros cuyo autor coincide con el autor buscado. libro => libro.autor === autorBuscar es una función de flecha que verifica si el autor del libro es igual al autor buscado.

  //Verificación de resultados:
  if (librosDelAutor.length > 0) { //Comprueba si se encontraron libros. Si el arreglo tiene al menos un libro, se procede a mostrar los resultados.

      //Formatear resultados:
      const resultados = librosDelAutor.map(libro => `Título: "${libro.titulo}", Autor: ${libro.autor}`); // Se utiliza map para transformar cada libro del arreglo librosDelAutor en una cadena que muestra su título y autor.

      //mostrar resultados
      document.getElementById("resultado8").innerHTML += `Libros de ${autorBuscar}:<br>` + resultados.join("<br>") + "<br>"; //Se actualiza el div con los resultados encontrados. join("<br>") se usa para unir los resultados en líneas separadas.
  } else {
      document.getElementById("resultado8").innerHTML += `No se encontraron libros de ${autorBuscar}.<br>`;
  }
});





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

const transportes = []; //. Este arreglo se utilizará para almacenar todos los objetos de transporte que se vayan agregando.

// Función para agregar transporte
document.getElementById("agregarTransporte").addEventListener("click", () => {
  const tipo = document.getElementById("tipo").value.trim().toLowerCase();
  const capacidad = parseInt(document.getElementById("capacidad").value);
  const tipoCombustible = document.getElementById("tipoCombustible").value.trim();  //se capturan los datos


  //Creación del Objeto Transporte
  let transporte; // se declara la variable

  //condicion
  if (tipo === "autobus") { //Si el tipo ingresado es "autobus"
      transporte = new Autobus(capacidad, tipoCombustible); //se crea un nuevo objeto de la clase Autobus, pasando capacidad y tipoCombustible al constructor.
  } else if (tipo === "bicicleta") {//Si el tipo ingresado es "bicicleta"
      transporte = new Bicicleta(capacidad, tipoCombustible);  //se crea un objeto de la clase Bicicleta con los mismos parametros

  } else {
      alert("Tipo de transporte no reconocido. Usa 'Autobus' o 'Bicicleta'.");
      return;
  }


  //Agregar Transporte al Arreglo
  transportes.push(transporte);  //Se añade el objeto transporte al arreglo transportes.
  document.getElementById("resultado9").innerHTML += `Se agregó: ${transporte.constructor.name} (${transporte.info()})<br>`; //Se actualiza el contenido del elemento con ID resultado9 para mostrar un mensaje indicando que se ha agregado un transporte. Utiliza transporte.constructor.name para obtener el nombre de la clase (autobús o bicicleta) y el método info() para obtener detalles del transporte (capacidad y tipo de combustible).

  // Limpiar campos
  document.getElementById("tipo").value = "";
  document.getElementById("capacidad").value = "";
  document.getElementById("tipoCombustible").value = "";
});

// Función para listar transportes
document.getElementById("listarTransportes").addEventListener("click", () => {
  if (transportes.length === 0) {  //Se comprueba si el arreglo transportes está vacío.
      document.getElementById("resultado9").innerHTML += "No hay transportes en el catálogo.<br>";  //si esta vacio se muestra esta alerta
      return;
  }

  // Listado de Transportes
  const listado = transportes.map(transporte => {  //map(): Se utiliza este método para recorrer el arreglo transportes y crear un nuevo arreglo listado.
      const accion = transporte instanceof Autobus ? transporte.arrancar() : transporte.pedalear();  //Para cada transporte, se determina si es una instancia de Autobus o Bicicleta usando instanceof . si es autobus llama al metodo arranchar y si es bicicleta llama al metodo pedalear
      return `${transporte.constructor.name}: ${transporte.info()}. Acción: ${accion}`; //Se devuelve una cadena que incluye el nombre de la clase del transporte, la información de su capacidad y tipo de combustible, y la acción correspondiente (arrancar o pedalear).
  }).join("<br>");  //join("<br>"): Une todos los elementos del arreglo listado en una sola cadena, separándolos con saltos de línea HTML (<br>).

  document.getElementById("resultado9").innerHTML += "<h3>Transportes en el catálogo:</h3>" + listado + "<br>";  // Se actualiza el contenido del elemento con ID resultado9 para mostrar todos los transportes en el catálogo, incluyendo un encabezado y el listado que acabamos de crear.
});





//TIENDA DE MASCOTA//

// Clase base Mascota
class Mascota {
  constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
  }

  info() {
      return `Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
  }
}

// Clase derivada Perro
class Perro extends Mascota {
  constructor(nombre) {
      super(nombre, "Perro");
  }

  ladrar() {
      return `${this.nombre} dice: ¡Guau!`;
  }
}

// Clase derivada Gato
class Gato extends Mascota {
  constructor(nombre) {
      super(nombre, "Gato");
  }

  maullar() {
      return `${this.nombre} dice: ¡Miau!`;
  }
}

// Arreglo para almacenar mascotas
const mascotas = [];

// Función para agregar mascota
document.getElementById("agregarMascota").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const tipo = document.getElementById("tipo").value.trim();

  // Verificar que se haya seleccionado un tipo de mascota
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
      alert("Tipo de mascota no válido."); // Esto no debería aparecer
      return;
  }

  // Agregar la mascota al arreglo
  mascotas.push(mascota);
  document.getElementById("resultado10").innerHTML += `Se agregó: ${mascota.info()}<br>`;

  // Limpiar campos
  document.getElementById("nombre").value = "";
  document.getElementById("tipo").selectedIndex = 0; // Limpiar el selector para permitir nuevas selecciones
});

// Función para realizar acciones de mascotas
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
