var result = document.getElementById("result");
var input_nombre = document.getElementById("input_nombre");

document.getElementById("form_bienvenida").addEventListener("submit", (e) => {
  e.preventDefault();

  if (!document.getElementById("form_bienvenida").reportValidity()) {
    return;
  }
  mensaje = input_nombre.value;
  result.innerHTML = mensaje;
});

document.getElementById("boton_reiniciar").addEventListener("click", (e) => {
  e.preventDefault();
  result.innerHTML = "";
  input_nombre.value = "";
});

function generarNombre(nombre, mood) {
  return `${nombre} ${mood}`;
}
