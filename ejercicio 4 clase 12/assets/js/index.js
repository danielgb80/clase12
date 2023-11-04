console.log("Entro a index.js");
//  EDONPINT: https://dev4humans.com.mx/api/Clases/ventas_libros
const tbody = document.getElementById('tbody');
fetch("https://dev4humans.com.mx/api/Clases/ventas_libros")
    .then(response => response.json())
    .then(datosApi => {
        const ctx = document.getElementById('myChart');

        const labels = datosApi.data.labels;
        const data = datosApi.data.data;

        // Creacion de graficas
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Promedio Ventas Diarias',
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        // Cracion de datos de tabla
        tbody.innerHTML = "";
        labels.forEach((label, index) => {
            console.log(index);
            tbody.innerHTML += `
            <tr>
                <th>${index + 1}</th>
                <td>${label}</td>
                <td>${data[index]}</td>
            </tr>
            `;
        });

        console.log("Libro", labels[0]);
        console.log("Promedio", data[0]);

        console.log("Libro", labels[1]);
        console.log("Promedio", data[1]);


    });

