Ejercicio 1: Agregar al carrito sin duplicar (.some() o .find() + .map())
Este es el clásico botón "Agregar al carrito" en cualquier e-commerce. Si el producto ya existe en el carrito, no se agrega una fila nueva; se le suma 1 a su cantidad.

Qué investigar/usar: El método .some() (devuelve true si al menos un elemento del arreglo cumple una condición, y false si ninguno la cumple).

Tu objetivo: Crea una función agregarAlCarrito(carrito, productoNuevo) donde carrito inicia vacío [] (o con ítems { id, nombre, precio, cantidad }):

Verifica con .some() si productoNuevo.id ya existe dentro de carrito.

Si ya existe: usa .map() para devolver un nuevo arreglo donde solo a ese ítem se le sume cantidad + 1.

Si no existe: usa el operador spread (...) para devolver un nuevo arreglo agregando { ...productoNuevo, cantidad: 1 } al final.

Ejercicio 2: Mutación profunda en arreglos anidados (.map() + Spread dentro de Spread)
En React, cuando un usuario deja una calificación en un producto, tienes que agregar esa reseña dentro del arreglo resenas de ese producto específico sin mutar el catálogo original.

Tu objetivo: Crea una función agregarResena(lista, idProducto, nuevaResena) (donde nuevaResena es { usuario: "Jaime", estrellas: 5 }):

Recorre lista con .map().

Cuando encuentres el producto con id === idProducto, retorna una copia del producto ({ ...producto }), sobrescribiendo su propiedad resenas con un nuevo arreglo que contenga las reseñas anteriores más la nueva ([...producto.resenas, nuevaResena]).

Los demás productos deben quedar intactos.

Ejercicio 3: Buscador en tiempo real + Filtro de disponibilidad (Encadenamiento)
En React, los filtros de búsqueda en pantalla nunca borran los datos del estado original; simplemente calculan una lista filtrada al vuelo antes de pintarla.

Tu objetivo: Crea una función filtrarProductos(lista, textoBusqueda, soloDisponibles) donde textoBusqueda es un string (ej. "cRemA" o "") y soloDisponibles es un booleano (true o false):

Usa .filter() sobre lista.

El producto debe pasar el filtro si su nombre (pasado a minúsculas con .toLowerCase()) incluye textoBusqueda (también en minúsculas).

Y además, si soloDisponibles es true, el producto debe tener stock > 0. (Si soloDisponibles es false, no importa si el stock es 0).

Ejercicio 4: Calcular promedio de estrellas (.reduce() con protección contra división por cero)
Tu objetivo: Crea una función calcularPromedioEstrellas(producto) que reciba un solo objeto producto (por ejemplo catalogo[0] o catalogo[2]):

Si producto.resenas.length === 0, retorna 0 inmediatamente (Early Return para evitar 0 / 0 = NaN).

Si tiene reseñas, usa .reduce() sobre producto.resenas para sumar todas las estrellas y divide el resultado entre producto.resenas.length.