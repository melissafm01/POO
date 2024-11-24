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
  
  document.getElementById("agregarLibro").addEventListener("click", () => {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const tipoLibro = document.getElementById("tipoLibro").value;
  
    if (titulo && autor && tipoLibro) {
      let libro;
      if (tipoLibro === "digital") {
        libro = new LibroDigital(titulo, autor);
      } else if (tipoLibro === "fisico") {
        libro = new LibroFisico(titulo, autor);
      }
      
      biblioteca.push(libro);
      document.getElementById("resultado8").innerHTML += `Se agregó: "${titulo}" de ${autor} (${tipoLibro}).<br>`;
  
      document.getElementById("titulo").value = "";
      document.getElementById("autor").value = "";
      document.getElementById("tipoLibro").value = "";
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
  
  document.getElementById("listarLibros").addEventListener("click", () => {
    const autorBuscar = document.getElementById("autorBuscar").value.trim();
  
    const librosDelAutor = biblioteca.filter(libro => libro.autor === autorBuscar);
  
    if (librosDelAutor.length > 0) {
      const resultados = librosDelAutor.map(libro => `Título: "${libro.titulo}", Autor: ${libro.autor}`);
  
      document.getElementById("resultado8").innerHTML += `Libros de ${autorBuscar}:<br>` + resultados.join("<br>") + "<br>";
    } else {
      document.getElementById("resultado8").innerHTML += `No se encontraron libros de ${autorBuscar}.<br>`;
    }
  });
  