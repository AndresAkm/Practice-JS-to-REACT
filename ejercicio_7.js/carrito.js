// Funcion add cart que sume cantidad a item ya existente y agregue el item si no existe

export function addCart(cart, newItem){
  const isInCart = cart.some((item) => item.items.id === newItem.id)

    if (isInCart) {
      return cart.map((item) => item.items.id === newItem.id
      ? 
      {...item, cantidad: item.cantidad + 1}
      : 
      item
      )
    }

    return [...cart, {
        items: newItem,
        cantidad: 1
        } 
      ]
    }