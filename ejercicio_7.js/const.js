 
export const catalogo = [
  {
    id: 1,
    nombre: "Sérum Vitamina C",
    precio: 65000,
    stock: 10,
    resenas: [
      { usuario: "Laura", estrellas: 5 },
      { usuario: "Carlos", estrellas: 4 }
    ]
  },
  {
    id: 2,
    nombre: "Gel Limpiador",
    precio: 42000,
    stock: 0,
    resenas: [
      { usuario: "Sofia", estrellas: 5 }
    ]
  },
  {
    id: 3,
    nombre: "Crema Reparadora",
    precio: 58000,
    stock: 6,
    resenas: []
  }
];

export const newProduct = {
    id: 4,
    nombre: "Sérum Acido Glicolico",
    precio: 23000,
    stock: 20,
    resenas: [
      { usuario: "Fabian", estrellas: 4 },
      { usuario: "Carlos", estrellas: 4 }
    ]
};

 export const cart = [
      {
          items: catalogo[0], cantidad: 1
      },
      {
          items: catalogo[1],
         cantidad: 1
      }
];

export const newReview = {
    usuario: "Alexandra",
    estrella: 2
}