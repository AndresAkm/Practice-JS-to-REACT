// Ejercicio 2: Mutación profunda en arreglos anidados (.map() + Spread dentro de Spread)
// En React, cuando un usuario deja una calificación en un producto, tienes que agregar esa reseña dentro del arreglo resenas de ese producto específico
// sin mutar el catálogo original.

// Tu objetivo: Crea una función agregarResena(lista, idProducto, nuevaResena) (donde nuevaResena es { usuario: "Jaime", estrellas: 5 }):

// Recorre lista con .map().

// Cuando encuentres el producto con id === idProducto, retorna una copia del producto ({ ...producto }), sobrescribiendo su propiedad resenas con un nuevo arreglo que
// contenga las reseñas anteriores más la nueva ([...producto.resenas, nuevaResena]).

// Los demás productos deben quedar intactos.

export function addNewReview(list, idProduct, newReview){
    const isProduct = list.some((item) => item.id === idProduct)

    if (!isProduct) {
    return "'Message: Los ID no coinciden'";
    }

    return list.map(item => item.id === idProduct ?
    {...item,
        resenas: [...item.resenas, newReview]
    }
    :
    item
    )
}