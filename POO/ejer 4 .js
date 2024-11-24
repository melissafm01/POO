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

document.getElementById('agregarEmpleado').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;
  const sueldo = parseFloat(document.getElementById('sueldo').value);
  const horasTrabajadas = parseInt(document.getElementById('horasTrabajadas').value);
  const tipoEmpleado = document.getElementById('tipoEmpleado').value;

  let empleado;
  if (tipoEmpleado === 'tiempoCompleto') {
    empleado = new EmpleadoTiempoCompleto(nombre, sueldo);
  } else {
    empleado = new EmpleadoMedioTiempo(nombre, sueldo);
  }

  empleados.push({ empleado, horasTrabajadas });
  listarSueldos();
});

function listarSueldos() {
  const contenedor = document.getElementById('empleados');
  contenedor.innerHTML = '';

  empleados.forEach(({ empleado, horasTrabajadas }) => {
    const p = document.createElement('p');
    const sueldoTotal = empleado.calcularSueldo(horasTrabajadas);
    p.textContent = `El sueldo Total de ${empleado.nombre} es de: $${sueldoTotal.toFixed(2)}`;
    contenedor.appendChild(p);
  });
}
