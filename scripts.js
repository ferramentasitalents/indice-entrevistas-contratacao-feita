function calculateIndex() {
  const numEntrevistas = parseFloat(document.getElementById("num-entrevistas").value);
  const numContratados = parseFloat(document.getElementById("num-contratados").value);
  const index = numEntrevistas / numContratados;
  document.getElementById("result").innerHTML = `Índice de entrevistas por contratação feita: ${index.toFixed(2)}%`;
}

