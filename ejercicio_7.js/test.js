import {addCart, cart, newProduct, catalogo} from "./carrito.js"

function testAddCart(){
    const prueba = addCart(cart, newProduct)
    const prueba2 = addCart(cart, catalogo[0])
    console.log("Carrito original", cart)
    console.log("Carrito con nuevo item agregado", prueba)
    console.log("Carrito con item ya existente agregado", prueba2)
}

testAddCart()