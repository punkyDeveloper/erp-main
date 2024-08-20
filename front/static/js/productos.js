fetch('/static/json/productos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(datos => {
        console.log(datos); // Esto debería mostrar los datos del JSON en la consola
    })
    .catch(err => {
        console.error('Error al cargar el JSON:', err);
    });
