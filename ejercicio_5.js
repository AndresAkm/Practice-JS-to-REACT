// Ejercicio 5.1 (Mini useState casero): Implementa una función crearEstado(valorInicial) 
// que retorne un arreglo con dos funciones: [obtenerValor, actualizarValor].

function crearEstado(valorInicial) {
    let valor = valorInicial
    const obtenerValor = () => valor
    const actualizarValor = (nuevoValor) => {valor = nuevoValor}

    return [obtenerValor, actualizarValor]
}

const [verValor, actualizarValor] = crearEstado(12)
console.log(verValor())
actualizarValor(32)
console.log(verValor())