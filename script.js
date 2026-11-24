 const temporadas = [
  { titulo: "Temporada 1", texto: "estrenada el 15 de julio de 2016. Ambientada en 1983 en Hawkins, Indiana, inicia con la desaparición de Will Byers y la llegada de Eleven", video: "Wre1F5YyIlA" },
  { titulo: "Temporada 2", texto: "estrenada el 27 de octubre de 2017. Ambientada en 1984; Will queda conectado al Upside Down y el grupo enfrenta al Mind Flayer", video: "R1ZXOOLMJ8s" },
  { titulo: "Temporada 3", texto: "estrenada el 4 de julio de 2019. Ambientada en el verano de 1985; se descubre una base secreta soviética bajo el centro comercial Starcourt y el Mind Flayer posee a Billy", video: "6Am4v0C_z8c" },
  { titulo: "Temporada 4", texto: " estrenada en dos volúmenes en 2022 (Volumen 1 el 27 de mayo y Volumen 2 el 1 de julio). Ambientada en 1986; surge Vecna y se abren grietas que amenazan a Hawkins.", video: "a3thyAnShck" },
  { titulo: "Temporada 5", texto: "estrenada en tres partes en 2025 (Volumen 1 el 26 de noviembre, Volumen 2 el 25 de diciembre y el episodio final el 31 de diciembre)", video: "Zf03hjU1MWA" }
];

function verTemporada(n) {
  document.getElementById("temp-titulo").textContent = temporadas[n].titulo;
  document.getElementById("temp-texto").textContent = temporadas[n].texto;
  document.getElementById("trailer").src = "https://www.youtube.com/embed/" + temporadas[n].video;

  const botones = document.querySelectorAll("#botones button");
  botones.forEach(function (b) { b.classList.remove("activo"); });
  botones[n].classList.add("activo");
}

verTemporada(0);
 
 
 //busca los datos: temporadas[n].titulo;
 // []: es una lista
 //{}:busca los datos que se encuentran entre esas lineas
 
 

 const visibles = 4;
  const paso = 260;
  const total = document.querySelectorAll(".tarjeta").length;
  //cuantos elementos hay
  let pos = 0;
  //la posicion inicial

  function mover() {
    document.getElementById("track").style.transform = "translateX(-" + (pos * paso) + "px)";
  }
  //movimiento

  function siguiente() {
    if (pos < total - visibles) {
      pos++;
      mover();
    }
  }

  function anterior() {
    if (pos > 0) {
      pos--;
      mover();
    }
  }

  //const visibles = 4; cuantas tarjetas se ven a la vez
  //const paso = 260; cuantos pixeles se vueven
