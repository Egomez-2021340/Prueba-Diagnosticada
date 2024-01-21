function enviarDatos() {
  const nombre = document.getElementById("nombre").value;
  enviarDatosAlServidor(nombre).then(mensajeAgradecimiento).catch(mensajeError);
}

function enviarDatosAlServidor(nombre) {
  return new Promise((resolve, eject) => {
    setTimeout(() => {
      const exito = nombre.tolowerCase() !== 'error';

      if (exito) {
        resolve("Bienvenido al Sistema UwU");
      } else {
        reject("Acceso Denegado >:v");
      }
    }, 2000);
  });
}

function mensajeAgradecimiento(mensaje) {
  const mensajeElement = document.getElementById('mensaje');
  mensajeElement.textContent = mensaje;
  mensajeElement.classList.remove('oculto');
}

function mensajeError(error) {
  const mensajeElement = document.getElementById('mensaje');
  mensajeElement.textContent = error;
  mensajeElement.classList.remove('oculto');
}
