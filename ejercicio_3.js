// 3. Lógica Condicional en Expresiones y Seguridad de Datos

// Ejercicio 3.1 (Renderizado condicional): Crea una función obtenerBadgeEstado(usuario) donde usuario puede ser null o un objeto
// { nombre: 'Jaime', rol: 'admin', notificaciones: 3 }. Usando únicamente operadores ternarios, &&, ?. y ?? (sin usar la palabra if):
// Si usuario no existe, devuelve "Invitado".
// Si existe y su rol es 'admin', devuelve "Panel Admin (3)" (si notificaciones es undefined o null, debe mostrar 0).
// Si existe y no es admin, devuelve "Usuario: Jaime".

const usuarios = [
    {
        nombre: "Jaime",
        rol: "Admin",
        notificaciones: 6
    },
    {
        nombre: "Andres",
        rol: "Cliente",
        notificaciones: null
    },
    {
        nombre: "Daniela",
        rol: "Admin",
        notificaciones: null
    }
]

function getBadgeStatus(usuario){

    return !usuario ? 
    `Invitado, bienvenido`
    :
    usuario?.rol === "Admin" ?
    `Panel Admin (${usuario.notificaciones ?? 0})`
    :
    `Usuario: ${usuario.nombre} bienvenido`
    
}

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

const message = getBadgeStatus(usuarios[getRandomInt(0, 4)])

console.log(message)