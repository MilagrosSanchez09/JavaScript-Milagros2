let monto = parseFloat(prompt("Ingresar Monto"))

let cantidadCuotas = parseInt(prompt("Cantidad de cuotas"))

let montoConCuota = monto

const calculador = () => {

    if (cantidadCuotas != 1) {
        for (i = 1; i <= cantidadCuotas; i++) {
            let porCuota =((monto * 10) / 100)
            montoConCuota = montoConCuota + porCuota

        }
        let valorPorCuota = (montoConCuota / cantidadCuotas).toFixed(2)

        document.write( "El valor del producto es $" + monto + ", la cantidad de cuotas son " + cantidadCuotas + " y el precio por cada una es de $" + valorPorCuota + ". Lo cual queda en un monto de $" + montoConCuota)

    } 
}

calculador()