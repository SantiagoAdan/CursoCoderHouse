const products = [
    {
      id: 1,
      name: "ASUS ROG RTX 3090",
      price: 2500,
      category: "Placas De Video",
      img: "https://m.media-amazon.com/images/I/51qTaaObeGL._AC_.jpg",
      stock: 10,
      description: "Descripcion de rtx3090",
    },
    {
      id: 2,
      name: "AMD RYZEN 3950X",
      price: 500,
      category: "Procesador",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAmvHrnXS8Y2Ug7NpDwtIL8kK_OGgDYWU7epfxgZNmu4NROWwX39he3YLzdEbKcaUko0&usqp=CAU",
      stock: 16,
      description: "Descripcion de ryzen",
    },
    {
      id: 3,
      name: "Gskill TridentZ 32gb DDR4 KIT",
      price: 250,
      category: "RAM",
      img: "https://m.media-amazon.com/images/I/61l4EStxhnL._AC_SX450_.jpg",
      stock: 10,
      description: "Descripcion de gskill",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };