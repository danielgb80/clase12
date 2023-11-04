console.log("Entro a index.js");
//  EDONPINT: https://dev4humans.com.mx/api/Clases/ventas_libros
const tbody = document.getElementById('tbody');
axios.get('https://dev4humans.com.mx/api/Clases/personajes')
    .then(datosApi => {
        console.log(datosApi);
        const ctx = document.getElementById('myChart');

        const labels = datosApi.data.data.labels;
        const data = datosApi.data.data.data;

        // Creacion de graficas
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Promedio Ventas Diarias',
                    data: data,
                    borderWidth: 1,
                    borderColor: [
                        "#3677D4",
                        "#5FD436",
                        "#D436C5",
                        "#D43636",
                        "#D1D436"
                    ],
                    backgroundColor: [
                        "#3677D4",
                        "#5FD436",
                        "#D436C5",
                        "#D43636",
                        "#D1D436"
                    ],
                }],

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
            const tr = document.createElement("tr");
            if (data[index] > 50) {
                tr.classList.add("table-danger");
                tr.classList.add("fw-bold");
            }
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${label}</td>
                <td>${data[index]}</td>
            `;
            tbody.appendChild(tr);
        });

        console.log("Libro", labels[0]);
        console.log("Promedio", data[0]);

        console.log("Libro", labels[1]);
        console.log("Promedio", data[1]);


    })
    .catch(error => {
        console.log("axios error", error);
    });

//  Usando fetch
// fetch("https://dev4humans.com.mx/api/Clases/personajes")
//     .then(response => response.json())
//     .then(datosApi => {
//         console.log("Respuesta desde fetch", datosApi);
//     });

// Usando axios
// axios.get("https://dev4humans.com.mx/api/Clases/personajes")
//     .then(datosApi => {
//         console.log("Respuesta desde axios", datosApi.data);
//     });


// mandar headers con axios
// const headers = { "Authorization": "9faa4f2eed9b6c5f9a748d54ed32cc90" };
// axios.get("https://dev4humans.com.mx/api/Clases/ventas_variadas", {
//     headers: headers
// })
//     .then(datosApi => {
//         console.log("Respuesta desde axios header", datosApi.data);
//     });