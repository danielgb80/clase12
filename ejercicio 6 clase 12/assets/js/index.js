console.log("Entro a index.js");
//  EDONPINT: https://dev4humans.com.mx/api/Clases/ventas_libros
const tbody = document.getElementById('tbody');
const headers = new Headers();
headers.append('Content-Type', "application/json");
headers.append('Authorization', "9faa4f2eed9b6c5f9a748d54ed32cc90");
fetch("https://dev4humans.com.mx/api/Clases/ventas_variadas",
{
    method: 'GET',
    headers: headers
})
    .then(response => response.json())
    .then(datosApi => {
        const ctx = document.getElementById('myChart');

        const labels = datosApi.data.labels;
        const datasets = datosApi.data.datasets;

        // Creacion de graficas
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
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
        const data = datasets[0];
        tbody.innerHTML = "";
        labels.forEach((label, index) => {
            console.log(index);
            const tr = document.createElement("tr");
            if (data[index] > 50) {
                tr.classList.add("table-danger");
                tr.classList.add("fw-bold");
            }
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${label}</td>
                <td>${data.data[index]}</td>
            `;
            tbody.appendChild(tr);
        });

        console.log("Libro", labels[0]);
        console.log("Promedio", data[0]);

        console.log("Libro", labels[1]);
        console.log("Promedio", data[1]);


    });