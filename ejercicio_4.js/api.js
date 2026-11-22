// 4.1 (Simulador de ciclo de petición):
// Crea un archivo api.js y exporta de forma nombrada (export const) una función asíncrona obtenerUsuarios().
// Dentro, haz un fetch a [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).
// Valida if (!respuesta.ok) throw new Error('Fallo en la red').
// Transforma la respuesta con .map() para quedarte únicamente con { id, name, email } de cada usuario
// (limpiar datos antes de guardarlos en el estado es una buena práctica clave en React).
// Usa un bloque finally para imprimir "Petición finalizada" (así es como apagarás los spinners de carga en React).
// Impórtala en un archivo index.js (recuerda agregar "type": "module" en un package.json si lo corres en Node) y ejecútala.

export const obtenerUsuarios = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!res.ok) throw new Error("Error en la respuesta de la API")
        const data = await res.json()
        return data.map(dato => {
            return {
                id: dato.id,
                name: dato.name,
                email: dato.email
            }
        })

    } catch (err) {
        console.error("Error en la peticion", err)
    } finally {
        console.info("Peticion finalizada")
    }
}