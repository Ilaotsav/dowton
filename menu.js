const menu = [
  {
    categoria: "ENTRADAS",
    productos: [
      { nombre: "Salchipapas", precio: 6.80 },
      { nombre: "Papas Fritas x Kilos", precio: 5.80 },
      { nombre: "Racion de Chistoras", precio: 6.00 },
      { nombre: "Pastelito de Carne", precio: 1.50 },
      { nombre: "Mini Empanadas Surtidas", precio: 1.00 },
      { nombre: "Tequenos de Capresa x 5 Und", precio: 7.00 },
      { nombre: "Racion de Nuggets con Papas", precio: 8.70 },
      { nombre: "Combo Mini Empanadas", precio: 5.00 },
      { nombre: "Pastelito de Pollo", precio: 1.50 },
      { nombre: "Tequenos de Papas x 5 Und", precio: null },
      { nombre: "Tequenos de Chistorra x 5 Und", precio: 8.50 },
      { nombre: "Tequenos de Queso x 5 Und", precio: 6.96 }
    ]
  },

  {
    categoria: "HAMBURGUESAS",
    productos: [
      { nombre: "Choripan Juan Canalla", precio: 5.00 },
      { nombre: "Granjero Pollo", precio: 8.50 },
      { nombre: "Combo Choripan Canalla", precio: 12.00 },
      { nombre: "Hamburguesa Carne", precio: 9.00 },
      { nombre: "Hamburguesa Doble Carne", precio: 11.60 },
      { nombre: "Perros Normales", precio: 1.50 },
      { nombre: "Combo 3 Perros Calientes", precio: 4.00 },
      { nombre: "Menu Ejecutivo", precio: 8.00 }
    ]
  },

  {
    categoria: "PIZZA",
    productos: [
      { nombre: "1/8 Peperoni", precio: 5.80 },
      { nombre: "1/4 Peperoni", precio: 11.02 },
      { nombre: "1/4 Campagnola", precio: 12.76 },
      { nombre: "Campagnolo 1/8", precio: 6.38 },
      { nombre: "Capresa", precio: 15.08 },
      { nombre: "1/4 Margarita", precio: 9.86 },
      { nombre: "1/8 Margarita", precio: 5.80 }
    ]
  },

  {
    categoria: "PARRILLAS",
    productos: [
      { nombre: "1 Pincho de Lomito", precio: 5.00 },
      { nombre: "Pinchos", precio: null },
      { nombre: "Parrillas", precio: null },
      { nombre: "Parrilla de Carne", precio: 16.24 }
    ]
  },

  {
    categoria: "COCTELES",
    productos: [
      { nombre: "Cuba Libre", precio: 7.00 },
      { nombre: "Destornillador", precio: 7.00 },
      { nombre: "Daiquiri de Fresa", precio: 11.00 },
      { nombre: "Margarita", precio: 8.00 },
      { nombre: "Gin Tonic", precio: 8.00 },
      { nombre: "Mojito", precio: 9.00 },
      { nombre: "Shot de Limon", precio: 2.00 },
      { nombre: "Daiquiri de Durazno", precio: null },
      { nombre: "Shot de Tequila", precio: 7.50 },
      { nombre: "Margarita Spicy", precio: 10.00 }
    ]
  },

  {
    categoria: "TRAGOS",
    productos: [
      { nombre: "Casique 500", precio: 8.00 },
      { nombre: "Michelada", precio: 1.80 },
      { nombre: "Negroni", precio: 13.00 },
      { nombre: "Moscow Mule", precio: 11.00 },
      { nombre: "Trago Silver Old Par", precio: 7.00 },
      { nombre: "Trago Tanqueray Ten", precio: 9.50 },
      { nombre: "Aperol Spritz", precio: 6.50 },
      { nombre: "Santa Teresa Linaje Trago", precio: 8.00 },
      { nombre: "Vodka Tonic", precio: 8.00 },
      { nombre: "Stolichnaya Trago", precio: 4.64 },
      { nombre: "Buchannas Trago", precio: 9.00 },
      { nombre: "Casique", precio: 7.00 },
      { nombre: "Smirnoff Trago", precio: 6.50 },
      { nombre: "Old Parr Trago", precio: 9.00 },
      { nombre: "Santa Teresa Gran Reserva Trago", precio: 7.00 }
    ]
  },

  {
    categoria: "BOTELLAS",
    productos: [
      { nombre: "Vodka Absolut", precio: 52.20 },
      { nombre: "Smirnoff", precio: 46.40 },
      { nombre: "Ron Carupano 6 Anos", precio: 20.00 },
      { nombre: "Old Parr Silver", precio: 52.20 },
      { nombre: "Tequila Arraigo Silver", precio: 55.00 },
      { nombre: "Santa Teresa Gran Reserva", precio: 46.40 },
      { nombre: "Aperol", precio: null },
      { nombre: "Black and White 0.75 lts", precio: 30.00 },
      { nombre: "Ron Carupano 12 Anos", precio: 35.00 },
      { nombre: "Vodka Stolichnaya", precio: 45.00 },
      { nombre: "Ron Cacique 500", precio: 28.00 },
      { nombre: "Tanqueray 10", precio: 92.80 },
      { nombre: "Buchanan's 18 Anos", precio: 162.40 },
      { nombre: "Volcanes de Chile Cabernet Sauv.", precio: 29.00 },
      { nombre: "Vino CastellBlanc Cava", precio: 29.00 },
      { nombre: "Buchanans", precio: 60.00 },
      { nombre: "Ron Carupano Reserva Limitada", precio: 45.00 },
      { nombre: "Ron Carupano Cristalino", precio: 25.00 },
      { nombre: "Old Parr", precio: 55.00 },
      { nombre: "Don Julio Reposado", precio: 95.00 },
      { nombre: "Santa Teresa Linaje", precio: 58.00 },
      { nombre: "Ron Cacique", precio: 28.00 },
      { nombre: "Black & White 1 Litro", precio: 35.00 }
    ]
  },

  {
    categoria: "CERVEZAS",
    productos: [
      { nombre: "Regional Morena", precio: 1.16 },
      { nombre: "Polar Pilsen", precio: 1.74 },
      { nombre: "Polar Light", precio: 1.74 },
      { nombre: "Solera Azul", precio: 1.98 },
      { nombre: "Solera Verde", precio: 1.97 },
      { nombre: "Zulia", precio: 1.74 }
    ]
  },

  {
    categoria: "PROMO TOBOS",
    productos: [
      { nombre: "Tobo Mixto Polar Light y Pilsen", precio: 10.00 },
      { nombre: "Tobo Polar Light", precio: 10.00 },
      { nombre: "Tobo Zulia", precio: 10.00 },
      { nombre: "Tobo Polar Pilsen", precio: 10.00 }
    ]
  },

  {
    categoria: "REFRESCOS",
    productos: [
      { nombre: "Pepsi / Golden Lata 355 ML", precio: 2.00 },
      { nombre: "Gatorade Mandarina", precio: 3.00 },
      { nombre: "Refresco Litro", precio: 3.50 },
      { nombre: "Maltin Polar", precio: 1.16 }
    ]
  }
];