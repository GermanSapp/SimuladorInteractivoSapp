

// Mi idea de proyecto final es poder aplicar javascript la tienda virtual que arme para mi papa sobre electronica y radio que hice en el curso de desarrollo web
// Para el esqueleto html use el index mas basico que tenia armado, en realidad ya tengo toda la pagina armada en un hosting gratuito que utilice, pero lo queria dejar mas simple para esta entrega

// los precios son todos en dolares, porque la mayoria son productos importados

//Simulador para calcular el monto total de tu compra
function calcularPrecio (precioValvula, cantidadValvula, porcentajeDescuento, costoEnvio) {
    //calculo los descuentos
    let descuento = (precioValvula * porcentajeDescuento) / 100;
    //se lo aplico al precio
    let precioConDescuento = precioValvula - descuento;
    //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de prendas
    return (precioConDescuento * cantidadValvula) + costoEnvio;
}

const envio = 5; //valor aproximado del costo de envio en dolar promedio dentro de Cordoba Capital

//le pedimos al usuario el precio de la valvula, la cantidad y el porcentaje del descuento
let valvula = parseFloat(prompt("Ingrese el precio en dolares de la valvula que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar :"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:")) //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(valvula, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes, cuando todo falla la unica solucion es la radio!");