// GESTIÓN DE ESTUDIANTES

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
document.getElementById("agregarEstudiante")?.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);

  if (nombre && !isNaN(edad)) {
    if (estudiantes[nombre]) {
      alert("El estudiante ya existe.");
    } else {
      estudiantes[nombre] = new Estudiante(nombre, edad);
      document.getElementById("resultado1").innerHTML += `${nombre} ha sido agregado.<br>`;
      document.getElementById("nombre").value = "";
      document.getElementById("edad").value = "";
    }
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Función para agregar calificación
document.getElementById("agregarCalificacion")?.addEventListener("click", () => {
  const nombreEstudiante = document.getElementById("nombreEstudianteCalificacion").value.trim();
  const calificacion = parseFloat(document.getElementById("calificacion").value);

  if (estudiantes[nombreEstudiante] && !isNaN(calificacion)) {
    estudiantes[nombreEstudiante].agregarCalificacion(calificacion);
    document.getElementById("resultado1").innerHTML += `Se agregó la calificación ${calificacion} a ${nombreEstudiante}.<br>`;
    document.getElementById("nombreEstudianteCalificacion").value = "";
    document.getElementById("calificacion").value = "";
  } else {
    alert("Estudiante no encontrado o calificación no válida.");
  }
});

// Función para calcular promedio
document.getElementById("calcularPromedio")?.addEventListener("click", () => {
  const nombreEstudiante = document.getElementById("nombreEstudiantePromedio").value.trim();

  if (estudiantes[nombreEstudiante]) {
    const promedio = estudiantes[nombreEstudiante].calcularPromedio();
    document.getElementById("resultado1").innerHTML += `El promedio de ${nombreEstudiante} es ${promedio.toFixed(2)}.<br>`;
    document.getElementById("nombreEstudiantePromedio").value = "";
  } else {
    alert("Estudiante no encontrado.");
  }
});




//EJERCICIO 7

// GESTIÓN DE CURSOS

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
document.getElementById("agregarCurso")?.addEventListener("click", () => {
  const nombreCurso = document.getElementById("nombreCurso").value.trim();
  const tipoCurso = document.querySelector('input[name="tipoCurso"]:checked');

  if (nombreCurso && tipoCurso) {
    if (tipoCurso.value === "online") {
      if (cursos[nombreCurso]) {
        alert("El curso ya existe.");
      } else {
        cursos[nombreCurso] = new CursoOnline(nombreCurso);
        document.getElementById("resultado7").innerHTML += `${nombreCurso} (Online) ha sido agregado.<br>`;
        document.getElementById("nombreCurso").value = "";
      }
    } else if (tipoCurso.value === "presencial") {
      if (cursos[nombreCurso]) {
        alert("El curso ya existe.");
      } else {
        cursos[nombreCurso] = new CursoPresencial(nombreCurso);
        document.getElementById("resultado7").innerHTML += `${nombreCurso} (Presencial) ha sido agregado.<br>`;
        document.getElementById("nombreCurso").value = "";
      }
    }
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Función para agregar estudiante a un curso
document.getElementById("agregarEstudianteCurso")?.addEventListener("click", () => {
  const nombreEstudiante = document.getElementById("nombreEstudianteCurso").value.trim();
  const cursoNombre = document.getElementById("cursoNombre").value.trim();

  if (cursos[cursoNombre] && estudiantes[nombreEstudiante]) {
    cursos[cursoNombre].agregarEstudiante(estudiantes[nombreEstudiante]);
    document.getElementById("resultado7").innerHTML += `${nombreEstudiante} ha sido agregado al curso ${cursoNombre}.<br>`;
    document.getElementById("nombreEstudianteCurso").value = "";
    document.getElementById("cursoNombre").value = "";
  } else {
    alert("Curso no encontrado o estudiante no existe.");
  }
});

// Función para calcular promedio de un curso
document.getElementById("calcularPromedioCurso")?.addEventListener("click", () => {
  const nombreCurso = document.getElementById("cursoPromedio").value.trim();
  if (cursos[nombreCurso]) {
    const promedioCurso = cursos[nombreCurso].calcularPromedio();
    document.getElementById("resultado7").innerHTML += `El promedio del curso ${nombreCurso} es ${promedioCurso.toFixed(2)}.<br>`;
    document.getElementById("cursoPromedio").value = "";
  } else {
    alert("Curso no encontrado.");
  }
});
