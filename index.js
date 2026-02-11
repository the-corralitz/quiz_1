var result = document.getElementById("result");
var input_nombre = document.getElementById("input_nombre");
var input_mood = document.getElementById("input_mood");
var form = document.getElementById("form");
var boton_reiniciar = document.getElementById("boton_reiniciar");
var grupo = document.getElementById("grupo");
var codigo = document.getElementById("codigo");

form.addEventListener("submit", (e) => {
  /*
  e.preventDefault();
  if (!form.reportValidity()) {
    return;
  }
  */
  e.preventDefault();
  console.log(form.checkValidity());
  if (!form.reportValidity()) {
    form.classList.add("error");
    console.log(form);
    // form.reportValidity();
    return;
  }

  mensaje = generarNombre(input_nombre.value, input_mood.value);
  renderMessage(result, mensaje);
});

boton_reiniciar.addEventListener("click", (e) => {
  e.preventDefault();
  result.innerHTML = "";
  input_nombre.value = "";
});

grupo.innerText = "Samuel Corrales Salazar";
codigo.innerText = "A";

function generarNombre(nombre, mood) {
  return `${nombre} ${mood}`;
}

function renderMessage(container, message) {
  text = document.createElement("h2");
  container.appendChild(text);
  text.classList.add("yellow_card");
  text.innerHTML = message;
}

function handleSubmit(event) {
  event.preventDefault();
  if (!form.reportValidity()) {
    form.classList.add("danger");
    return;
  }
}
