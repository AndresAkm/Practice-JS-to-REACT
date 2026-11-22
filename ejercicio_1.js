// 1. Inmutabilidad, destructuring y spread operator

const itemCart = {
    id: 1,
    nombre: "Crema hidratante",
    precio: 25000,
    cantidad: 2,
    detalles: {
        marca: "Cera Ve",
        stock: 22    
    }
}

// 1.1 Crea una función incrementarCantidad(producto) que devuelva un nuevo 
// objeto con cantidad aumentada en 1 y stock educido en 1, sin 
// modificar el objeto itemCarrito original 
// (verifícalo con console.log en ambos).

function incrementarCantidad(producto){
    const updateItemCart = {
        ...producto,
        cantidad: producto.cantidad + 1,
        detalles: {
            ...producto.detalles,
            stock: producto.detalles.stock - 1
        }
    }
    return updateItemCart
}

const updateItemCart = incrementarCantidad(itemCart)

console.log("Item carrito antiguo:", itemCart)
console.log("Item carrito nuevo:", updateItemCart)

// Ejercicio 1.2 (Parámetros desestructurados): Escribe una función mostrarResumen({ nombre, precio, detalles: { marca } }) 
// que reciba el objeto anterior y retorne un string usando Template Literals: "Producto: Crema Hidratante (Carely) - $45000".

function showPreview({nombre, precio, detalles: {marca}}){
    return `Producto: ${nombre} (${marca}) - $${precio}`
}

console.log(showPreview(itemCart)) 