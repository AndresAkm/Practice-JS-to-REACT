Reto Integrador: Mini Gestor de Inventario Inmutable
Dataset inicial: Crea un arreglo inventario con 3 productos. Cada objeto debe tener la estructura:{ id, nombre, categoria, precio, stock } (puedes usar categorías como 'facial' y 'corporal').

Agregar producto (Inmutabilidad con Spread):
Crea una función agregarProducto(lista, nuevoProducto) que retorne un nuevo arreglo con todos los productos anteriores más nuevoProducto al final, sin mutar lista (prohibido .push()).

Aplicar descuento por categoría (.map() + Spread + Ternario/If):
Crea una función aplicarDescuento(lista, categoria, porcentaje) que recorra lista y retorne un nuevo arreglo donde únicamente los productos que coincidan con categoria tengan su precio rebajado según el porcentaje (ej. si porcentaje es 20, multiplica producto.precio * (1 - porcentaje / 100)), dejando los demás productos intactos.

Calcular valor total del inventario (.reduce()):
Crea una función calcularValorTotal(lista) que use .reduce() (con 0 como valor inicial) para sumar producto.precio * producto.stock de cada producto y retornar el total global en dinero.

Prueba el flujo completo en consola:

Agrega un 4.º producto usando agregarProducto y guarda el resultado en una nueva variable.

Aplica un descuento del 15% a una categoría sobre ese nuevo inventario.

Calcula e imprime el valor total antes y después del descuento, comprobando también que el inventario original de 3 productos siga intacto.