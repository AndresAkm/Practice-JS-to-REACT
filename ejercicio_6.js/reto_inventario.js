const items = [
    {
        id: 1,
        nombre: "Serum ácido hialuronico",
        categoria: ["serum", "hidratacion", "piel grasa"],
        precio: 20000,
        stock: 15,
        descuento: false 
    }, 
    {
        id: 2,
        nombre: "Limpiador facial",
        categoria: ["limpiador", "piel normal"],
        precio: 80000,
        stock: 23,
        descuento: false
    },
    {
        id: 3,
        nombre: "Protector solar 50fps",
        categoria: ["proteccion solar", "50fps", "piel seca"],
        precio: 120000,
        stock: 1,
        descuento: false
    }
]

const newItem = {
        id: 4,
        nombre: "Serum acido salicilico",
        categoria: ["serum", "acne", "piel grasa"],
        precio: 55000,
        stock: 23,
        descuento: false
    }

function addProduct(list, newItem){
    const newList = [...list,
        newItem
    ]
    return newList
}

function applyDiscount(list, category, percentage){
    if (percentage <= 0 || percentage >= 100) return list;
    const categoryParse = category.toLowerCase();
    const discountList = list.map(item => {
        return item.categoria.includes(categoryParse) ?
        {...item,
            precio: item.precio * (1 - percentage / 100),
            descuento: true
        }
        :
        item
    })

    return discountList
}


function totalValue(list){
    const total = list.reduce((a, item) => {
        return a + (item.precio * item.stock)
    }, 0)

    return total
}

// AJSDHA end to end para probar 3 funciones
function endToEnd (){
    const newInventory = addProduct(items, newItem)
    console.log("Producto agregado con exito", newInventory)
    console.log("Total de nuevo inventario antes del descuento:", totalValue(newInventory))
    const discountedInventory = applyDiscount(newInventory, "Serum", 15)
    console.log("Total de nuevo inventario + descuento del 15%", totalValue(discountedInventory))
    console.log("Total del viejo inventario", totalValue(items))
}

endToEnd()