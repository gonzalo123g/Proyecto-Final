let numeroSecreto;
let intentos;

// Función para iniciar el juego
function jugar() {
  // Inicializar variables
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 3;

  console.log("Nuevo juego iniciado. Número secreto:", numeroSecreto);

  // Bucle del juego
  while (intentos > 0) {
    let intentoUsuario = parseInt(prompt(`Adivina el número (1 al 10). Te quedan ${intentos} intento(s):`));

    if (intentoUsuario === numeroSecreto) {
      alert("🎉 ¡Felicidades! Adivinaste el número.");
      console.log("El usuario ganó el juego.");
      break; // Termina el bucle
    } else if (intentoUsuario > numeroSecreto) {
      alert("📉 El número secreto es menor.");
    } else if (intentoUsuario < numeroSecreto) {
      alert("📈 El número secreto es mayor.");
    } else {
      alert("⚠️ Ingresa un número válido.");
      continue; // No descontar intento si no fue un número
    }

    intentos--; // Restar intento
  }

  if (intentos === 0) {
    alert(`😢 Se acabaron tus intentos. El número era ${numeroSecreto}.`);
    console.log("El usuario perdió el juego.");
  }

  // Mostrar botón de reinicio
  document.getElementById("btnReiniciar").style.display = "inline-block";
}

// Función para reiniciar el juego sin recargar la página
function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 3;
  console.log("El juego se reinició. Nuevo número secreto:", numeroSecreto);
  alert("🔁 ¡El juego ha sido reiniciado! Vamos de nuevo.");

  // Ocultar botón de reinicio hasta que termine otra partida
  document.getElementById("btnReiniciar").style.display = "none";
  
  // Volver a jugar automáticamente
  jugar();
}

// Asignar eventos a los botones
document.getElementById("btnJugar").addEventListener("click", jugar);
document.getElementById("btnReiniciar").addEventListener("click", reiniciarJuego);
