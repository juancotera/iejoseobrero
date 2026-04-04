const anio = new Date().getFullYear();

const btnMatricula = document.getElementById("matricula-anio");

if (btnMatricula) {
  btnMatricula.textContent = `Matrícula ${anio}`;
}