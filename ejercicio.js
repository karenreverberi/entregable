const nombres = ["Pan", "Leche", "Queso", "Arroz", "Fideos", "Carne", "Pollo", "Huevos"];
const precios = [500, 800, 1500, 700, 650, 3000, 2500, 1200];


// 1) Combinar productos
function combinarProductos(nombres, precios) {

    let productos = [];

    for (let i = 0; i < nombres.length; i++) {

        productos.push(nombres[i] + " - $" + precios[i]);

    }

    return productos;
}


// 2) Filtrar precios
function filtrarPrecios(precios, valor) {

    let filtrados = [];

    for (let i = 0; i < precios.length; i++) {

        if (precios[i] > valor) {

            filtrados.push(precios[i]);

        }
    }

    return filtrados;
}


// 3) Calcular promedio
function calcularPromedio(precios, valor) {

    let filtrados = filtrarPrecios(precios, valor);

    let suma = 0;

    for (let i = 0; i < filtrados.length; i++) {

        suma += filtrados[i];

    }

    return suma / filtrados.length;
}


// 4) Generar resumen
function generarResumen(nombres, precios, valor) {

    let mayor = precios[0];
    let menor = precios[0];

    for (let i = 0; i < precios.length; i++) {

        if (precios[i] > mayor) {
            mayor = precios[i];
        }

        if (precios[i] < menor) {
            menor = precios[i];
        }
    }

    let promedio = calcularPromedio(precios, valor);

    return "Cantidad de productos: " + nombres.length +
           "Precio más alto: $" + mayor +
           "Precio más bajo: $" + menor +
           "Promedio: $" + promedio;
}


console.log(combinarProductos(nombres, precios));

console.log(filtrarPrecios(precios, 1000));

console.log(calcularPromedio(precios, 1000));

console.log(generarResumen(nombres, precios, 1000));
