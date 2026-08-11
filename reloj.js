function actualizarReloj() {
  const ahora = new Date();
  
  const segundos = ahora.getSeconds();
  const minutos = ahora.getMinutes();
  const horas = ahora.getHours();

  // Cálculo de ángulos de rotación (360 grados por vuelta)
  const anguloSegundos = (segundos / 60) * 360; // Corrección 1: Dividido entre 60 segundos
  const anguloMinutos = (minutos / 60) * 360;
  const anguloHoras = ((horas % 12) / 12) * 360 + (minutos / 60) * 30; // Corrección 2: Formato de 12 horas (horas % 12)

  // Aplicación del estilo de rotación en el DOM
  document.getElementById("aguja-segundos").style.transform = `rotate(${anguloSegundos}deg)`; // Corrección 3: Agregado 'deg'
  document.getElementById("aguja-minutos").style.transform = `rotate(${anguloMinutos}deg)`;
  document.getElementById("aguja-horas").style.transform = `rotate(${anguloHoras}deg)`;
}

// Ejecución inicial
actualizarReloj();

// Corrección 4: Actualización continua cada segundo (1000 ms)
setInterval(actualizarReloj, 1000);