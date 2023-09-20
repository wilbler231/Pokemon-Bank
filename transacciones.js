
const transacciones = [
    { fecha: '2023-09-01', descripcion: 'Compra en tienda', monto: 50.00 },
    { fecha: '2023-09-05', descripcion: 'Depósito de salario', monto: 1000.00 },
    { fecha: '2023-09-10', descripcion: 'Retiro de cajero', monto: -200.00 },
];


function agregarTransacciones() {
    const tbody = document.querySelector('tbody');

    transacciones.forEach(transaccion => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaccion.fecha}</td>
            <td>${transaccion.descripcion}</td>
            <td>${transaccion.monto.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

const formulario = document.getElementById('formulario-transaccion');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value;
    const monto = parseFloat(document.getElementById('monto').value);

 
    if (fecha && descripcion && !isNaN(monto)) {
        transacciones.push({ fecha, descripcion, monto });
        mostrarTransacciones();
        formulario.reset();
    }
});


function mostrarTransacciones() {
    const tbody = document.querySelector('tbody');

  
    tbody.innerHTML = '';

    transacciones.forEach(transaccion => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaccion.fecha}</td>
            <td>${transaccion.descripcion}</td>
            <td>${transaccion.monto.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

const borrarHistorialButton = document.getElementById('borrar-historial');

borrarHistorialButton.addEventListener('click', function() {
    
    transacciones.length = 0;

    mostrarTransacciones();
});



window.addEventListener('load', mostrarTransacciones);

window.addEventListener('load', agregarTransacciones);
