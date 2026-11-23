import {cart, newProduct, catalogo, newReview} from "./const.js"
import {addCart} from "./carrito.js"
import {addNewReview} from "./resena.js"

function testAddCart(){
    const prueba = addCart(cart, newProduct)
    const prueba2 = addCart(cart, catalogo[0])
    console.log("Carrito original", cart)
    console.log("Carrito con nuevo item agregado", prueba)
    console.log("Carrito con item ya existente agregado", prueba2)
}

function testAddReview(){
    const prueba = addNewReview(catalogo, 1, newReview)
    console.log("Producto sin reseña agregada", catalogo[0])
    console.log("Producto despues de la reseña", prueba[0])

    const prueba2 = addNewReview(catalogo, 6, newReview)
    console.log("Si producto no coincide con IdProduct", prueba2)
}

// testAddCart()
testAddReview()