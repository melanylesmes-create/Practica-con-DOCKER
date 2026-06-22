function cargarDatos() {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      document.getElementById('respuesta').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error al conectar al backend:', error));
}
