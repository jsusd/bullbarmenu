// Catálogo oficial y Configuración de BullBar Social Lounge
// Extraído y optimizado de la plataforma BullBar (Barquisimeto, Venezuela)

const BULLBAR_CONFIG = {
  name: "BullBar",
  tagline: "Tu Social Lounge Favorito",
  address: "BullBar Social - Barquisimeto, Lara, Venezuela",
  whatsappNumber: "584228888356", // Número de WhatsApp para recibir los pedidos
  instagramUser: "bullbar_bqto",
  instagramUrl: "https://www.instagram.com/bullbar_bqto",
  googleBusinessUrl: "https://www.google.com/maps/place/Bullbar/data=!4m2!3m1!1s0x0:0x516330bed763570d?sa=X&ved=1t:2428&ictx=111",
  googleReviewUrl: "https://g.page/r/CQ1XY9e-MGNREBE/review",
  currency: {
    symbol: "$",
    code: "USD",
    rateBS: 0 // Si se desea habilitar tasa BCV en el futuro
  },
  schedule: {
    weekdays: "Domingo a Miércoles: 2:00 PM - 10:00 PM",
    weekend: "Jueves a Sábado: 2:00 PM - 12:00 AM"
  },
  deliveryMethods: [
    { id: "onsite", label: "Consumo en Local / Mesa", icon: "chair", reqAddress: false, reqTable: true },
    { id: "pickup", label: "Para Retirar (Pick Up)", icon: "bag-shopping", reqAddress: false, reqTable: false },
    { id: "delivery", label: "Delivery a Domicilio", icon: "motorcycle", reqAddress: true, reqTable: false }
  ],
  paymentMethods: [
    { id: "cash_usd", label: "Efectivo USD ($)" },
    { id: "zelle", label: "Zelle" },
    { id: "pagomovil", label: "Pago Móvil (Bs. Tasa del día)" },
    { id: "tarjeta", label: "Punto de Venta / Tarjeta (En local)" }
  ],
  bannerImage: "https://assets.olaclick.app/companies/backgrounds/71f08f36-70b6-4ee3-8624-93bf76479d2b.webp",
  logoImage: "https://assets.olaclick.app/companies/logos/46b22ae5-e7a7-48fb-89c7-b14f810a391b.png"
};

const CATEGORIES = [
  { id: "all", name: "Todos", icon: "fire" },
  { id: "social-lounge", name: "Social Lounge", icon: "sparkles", badge: "Promos" },
  { id: "cerveza", name: "Cervezas", icon: "beer" },
  { id: "coleccion-1552", name: "Colección 1552", icon: "cocktail", badge: "Cocuy de Autor" },
  { id: "tapas", name: "Tapas & Entradas", icon: "utensils" },
  { id: "pizzas", name: "Pizzas", icon: "pizza-slice" },
  { id: "ensalada", name: "Ensaladas", icon: "carrot" },
  { id: "ron", name: "Coctelería Ron", icon: "glass-water" },
  { id: "tequila", name: "Tequila", icon: "wine-glass" },
  { id: "cocuy", name: "Cocuy", icon: "flask" },
  { id: "vodka", name: "Vodka", icon: "glass-martini" },
  { id: "whisky", name: "Whisky Cocteles", icon: "whiskey-glass" },
  { id: "ginebra", name: "Ginebra", icon: "martini-glass" },
  { id: "licores", name: "Licores & Spritz", icon: "champagne-glasses" },
  { id: "bebidas", name: "Bebidas sin Alcohol", icon: "mug-saucer" },
  { id: "servicio", name: "Botellas / Servicio", icon: "bottle-droplet", badge: "Servicio" }
];

const PRODUCTS = [
  // --- SOCIAL LOUNGE ---
  {
    id: "sl-after-office",
    categoryId: "social-lounge",
    categoryName: "SOCIAL LOUNGE",
    name: "LUNES - DOMINGO AFTER OFFICE",
    description: "La promo perfecta para compartir con amigos o compañeros: 9 cervezas bien frías acompañadas de 5 crujientes tequeños de queso.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/335ec03f-dc51-40dd-9f09-af34c0c43941.png",
    badge: "Super Promo",
    available: true
  },
  {
    id: "sl-2x1-miercoles-jueves",
    categoryId: "social-lounge",
    categoryName: "SOCIAL LOUNGE",
    name: "MIÉRCOLES Y JUEVES 2X1 EN TRAGOS",
    description: "Aprovecha los 2x1 en tus cocteles clásicos favoritos: Mojitos, Daiquirí, Piña Colada, Cuba Libre y Aperol Spritz.",
    price: 6.99,
    image: "https://assets.olaclick.app/companies/products/images/800/6a0e07cd-dfaf-44d8-a683-ee0d43febae0.JPG",
    badge: "2x1",
    available: true
  },

  // --- CERVEZAS ---
  {
    id: "crv-pilsen",
    categoryId: "cerveza",
    categoryName: "CERVEZA",
    name: "TOBO CERVEZA PILSEN (9 UND)",
    description: "Tobo con 9 cervezas Polar Pilsen servidas en hielo a punto de nieve.",
    price: 9.95,
    image: "https://assets.olaclick.app/companies/products/images/800/0f1d2178-9816-4027-ac66-2c18717be583.jpeg",
    badge: "9 Unidades",
    available: true
  },
  {
    id: "crv-light",
    categoryId: "cerveza",
    categoryName: "CERVEZA",
    name: "TOBO CERVEZA POLAR LIGHT (9 UND)",
    description: "Tobo con 9 cervezas Polar Light ultra refrescantes con hielo al tope.",
    price: 9.95,
    image: "https://assets.olaclick.app/companies/products/images/800/715ff194-b67f-449e-9c55-3c15d08d56d8.jpeg",
    badge: "9 Unidades",
    available: true
  },
  {
    id: "crv-solera-light",
    categoryId: "cerveza",
    categoryName: "CERVEZA",
    name: "TOBO SOLERA LIGHT (9 UND)",
    description: "Tobo con 9 botellas de Solera Light premium servidas a la temperatura ideal.",
    price: 12.99,
    image: "https://assets.olaclick.app/companies/products/images/800/8f3febe2-a0ed-44ad-93d3-8dbfdc4c1c48.jpeg",
    badge: "Premium",
    available: true
  },
  {
    id: "crv-solera-clasica",
    categoryId: "cerveza",
    categoryName: "CERVEZA",
    name: "TOBO SOLERA CLÁSICA VERDE (9 UND)",
    description: "Tobo con 9 botellas de la tradicional Solera Verde con todo su cuerpo y sabor cervecero.",
    price: 13.99,
    image: "https://assets.olaclick.app/companies/products/images/800/07f26ddb-56dc-447a-9e51-17bcd1541431.jpeg",
    badge: "Premium",
    available: true
  },

  // --- COLECCIÓN 1552 (COCTELERÍA DE AUTOR CON COCUY) ---
  {
    id: "c1552-ocaso-larense",
    categoryId: "coleccion-1552",
    categoryName: "COLECCION 1552",
    name: "OCASO LARENSE",
    description: "Un homenaje líquido a los atardeceres de Barquisimeto. La acidez frutal de la parchita y la elegancia floral y astringente de la Jamaica se funden sobre una estructura firme de Cocuy Saroche. Cítrico, fresco y sutilmente ahumado, con un final seco y equilibrado.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/06cfbb67-db1c-4689-89f6-b68cf0a25ba0.jfif",
    badge: "Autor BullBar",
    available: true
  },
  {
    id: "c1552-tierra-mestiza",
    categoryId: "coleccion-1552",
    categoryName: "COLECCION 1552",
    name: "TIERRA MESTIZA",
    description: "Penca ahumada, acidez tropical de tamarindo y parchita, con un final cálido de jengibre. Un trago de cuerpo aterciopelado y acidez vibrante donde la fuerza del agave ancestral se entrelaza con la frescura frutal del trópico y el picor elegante del jengibre.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/f86ad5d1-0714-46bc-9118-727ca39fd44f.jfif",
    badge: "Exclusivo",
    available: true
  },
  {
    id: "c1552-semiarido",
    categoryId: "coleccion-1552",
    categoryName: "COLECCION 1552",
    name: "SEMIÁRIDO",
    description: "Trago de carácter robusto y espíritu criollo. La entrada es envolvente y agridulce, marcada por la acidez densa del tamarindo y el toque brillante del limón criollo. En el centro, el melao de papelón aporta una untuosidad con matices de caramelo tostado y melasa.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/82dccb51-fd79-4e12-973f-7912a71cc471.jfif",
    badge: "Insignia",
    available: true
  },
  {
    id: "c1552-brisas-dinira",
    categoryId: "coleccion-1552",
    categoryName: "COLECCION 1552",
    name: "BRISAS DE DINIRA",
    description: "La jugosidad de la piña fresca y el brillo del limón criollo se elevan con la efervescencia de la soda, dejando que el carácter terroso del Cocuy Saroche brille en un trago largo, refrescante y vibrante.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/db6b8ffc-1e69-44c7-9c20-c31448a05e6c.jfif",
    badge: "Refrescante",
    available: true
  },
  {
    id: "c1552-caiman-sanare",
    categoryId: "coleccion-1552",
    categoryName: "COLECCION 1552",
    name: "CAIMÁN DE SANARE",
    description: "Un trago de cuerpo aterciopelado donde la intensidad del espresso recién extraído y la dulzura compleja del melao de papelón se funden con el carácter vegetal, ahumado y terroso del Cocuy Saroche. Un tributo sobrio y de autor a la tradición larense.",
    price: 7.95,
    image: "https://assets.olaclick.app/companies/products/images/800/3ee1f8c4-9ae0-4dda-a852-50d3c7a642d4.jfif",
    badge: "Café & Cocuy",
    available: true
  },

  // --- TAPAS & ENTRADAS ---
  {
    id: "tapa-chicharron-acevichado",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "CHICHARRÓN ACEVICHADO",
    description: "Crocante panceta rebanada servida con exquisita mezcla acevichada que equilibra la grasa y el frescor cítrico.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/89cd2584-2f6d-4a52-bf93-8380b1d9283a.jpeg",
    badge: "Recomendado",
    available: true
  },
  {
    id: "tapa-cestas-camaron",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "CESTAS DE COCTEL DE CAMARÓN",
    description: "Cesticas de plátano fritas rellenas de coctel de camarón y surimi con un toque especial de mayosriracha.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/7d7f135d-5cad-4b63-96f0-9fc463c6e463.jpeg",
    badge: "Favorito",
    available: true
  },
  {
    id: "tapa-cestas-atun",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "CESTAS DE ANTIPASTO DE ATÚN",
    description: "Cesticas de plátano frito rellenas de delicioso antipasto casero, aceituna negra y perejil fresco.",
    price: 10.95,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "tapa-cestas-mechada",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "CESTAS DE PLÁTANO MECHADA Y QUESO",
    description: "Cesticas de plátano frito rellenas de carne mechada o pollo sazonado, queso amarillo fundido y coronado con mayosriracha.",
    price: 10.95,
    image: "https://assets.olaclick.app/companies/products/images/800/ff5538b1-7490-4608-a446-81d882ea9d63.JPG",
    badge: "",
    available: true
  },
  {
    id: "tapa-alitas",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "ALITAS BULLBAR",
    description: "Crujientes alitas salteadas a tu elección en salsa BBQ ahumada o Búfalo picante, acompañadas de papas rústicas doradas.",
    price: 11.95,
    image: "https://assets.olaclick.app/companies/products/images/800/9113cbfe-84a4-42ad-b1f4-29268f08fcd1.jpeg",
    badge: "Clásico",
    available: true
  },
  {
    id: "tapa-tenders-bacon",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "TENDERS BACON CHEESE",
    description: "Tenders de pechuga de pollo crujiente bañados con abundante topping de queso cheddar fundido y trocitos de tocineta crocante.",
    price: 11.75,
    image: "https://assets.olaclick.app/companies/products/images/800/2d462a5a-2ee9-4190-9dad-f6e6dd36faaa.JPG",
    badge: "",
    available: true
  },
  {
    id: "tapa-panota-gratinada",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "PAÑOTA GRATINADA",
    description: "Pan rústico campesino horneado y relleno de pollo o camarón en cremosa salsa nápoles o bechamel con queso mozzarella gratinado.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/11c808e0-eda2-4cf5-8ad4-be63fec9ee38.jpeg",
    badge: "Especial",
    available: true
  },
  {
    id: "tapa-tequenos",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "RACIÓN DE TEQUEÑOS",
    description: "Porción de tequeños artesanales a escoger: Queso tradicional, Queso con chistorra, Queso con tocineta o Queso con jamón.",
    price: 11.95,
    image: "https://assets.olaclick.app/companies/products/images/800/50c028e8-7eac-43d4-8227-919391682690.png",
    badge: "Imperdible",
    available: true
  },
  {
    id: "tapa-chistorra-champinon",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "CHISTORRA CON CHAMPIÑÓN",
    description: "Chistorras españolas salteadas a la plancha con champiñones frescos y perejil, servidas con casabe tostado crujiente.",
    price: 9.99,
    image: "https://assets.olaclick.app/companies/products/images/800/6f4247d9-186a-468e-aa56-2a7e541c84c7.JPG",
    badge: "",
    available: true
  },
  {
    id: "tapa-camarones-ajillo",
    categoryId: "tapas",
    categoryName: "TAPAS",
    name: "CAMARONES AL AJILLO",
    description: "Camarones seleccionados salteados con aceite de oliva virgen extra, láminas de ajo dorado y perejil fresco.",
    price: 14.95,
    image: "https://assets.olaclick.app/companies/products/images/800/1fc8d88a-9c43-4795-bfb0-7c0a578c978b.JPG",
    badge: "Mariscos",
    available: true
  },

  // --- PIZZAS ---
  {
    id: "pizza-alfredo",
    categoryId: "pizzas",
    categoryName: "PIZZAS",
    name: "PIZZA ALFREDO",
    description: "Pizza rectangular al estilo rústico, salsa nápoles de la casa, queso mozzarella fundido, tocineta ahumada, maíz dulce, champiñón y pimienta negra molida.",
    price: 9.95,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    badge: "Rectangular",
    available: true
  },
  {
    id: "pizza-4-cheese",
    categoryId: "pizzas",
    categoryName: "PIZZAS",
    name: "PIZZA 4 QUESOS",
    description: "Pizza rectangular, salsa bechamel sedosa, combinación de quesos mozzarella, parmesano curado, queso amarillo y queso azul con toque de pimienta.",
    price: 12.95,
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "pizza-fugazzetta",
    categoryId: "pizzas",
    categoryName: "PIZZAS",
    name: "PIZZA FUGAZZETTA",
    description: "Base crujiente rectangular, doble porción de queso mozzarella, cebolla caramelizada a la perfección y orégano silvestre.",
    price: 9.95,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "pizza-casa",
    categoryId: "pizzas",
    categoryName: "PIZZAS",
    name: "PIZZA DE LA CASA",
    description: "Nuestra creación estrella: pizza rectangular con salsa nápoles, abundante queso mozzarella, chistorra artesanal salteada, champiñón y pimienta.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/6fc3625f-9ca8-4e4a-aa71-1dbc7a1b2601.JPG",
    badge: "Especialidad",
    available: true
  },
  {
    id: "pizza-iberica",
    categoryId: "pizzas",
    categoryName: "PIZZAS",
    name: "PIZZA IBÉRICA",
    description: "Pizza rectangular gourmet: salsa nápoles, bocconcini de mozzarella fresca, pesto casero de albahaca, lonjas finas de prosciutto y hojas frescas de rúgula.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80",
    badge: "Gourmet",
    available: true
  },
  {
    id: "pizza-capressa",
    categoryId: "pizzas",
    categoryName: "PIZZAS",
    name: "PIZZA CAPRESSA",
    description: "Pizza rectangular, salsa nápoles, queso mozzarella fundido, bocconcini fresco, pesto aromático y tomates cherry confitados.",
    price: 12.95,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },

  // --- ENSALADAS ---
  {
    id: "ensalada-rusttys",
    categoryId: "ensalada",
    categoryName: "ENSALADA",
    name: "RUSTTYS SALAD",
    description: "Fresco mix de lechugas hidropónicas, tu proteína a escoger (pollo crispy dorado, lomito a la plancha o camarón salteado), tocineta, lascas de queso pecorino y piña confitada en almíbar ligero.",
    price: 12.95,
    image: "https://assets.olaclick.app/companies/products/images/800/5c1bd909-c5af-407a-b35a-2f5bfe887cd5.jpeg",
    badge: "Plato Completo",
    available: true
  },

  // --- COCTELERÍA RON ---
  {
    id: "ron-pina-colada",
    categoryId: "ron",
    categoryName: "RON",
    name: "PIÑA COLADA",
    description: "Ron blanco, ron de coco, crema de coco rica y cremosa, leche condensada y zumo natural de piña recién exprimida.",
    price: 6.99,
    image: "https://assets.olaclick.app/companies/products/images/800/20c4b048-f3f0-4f52-b454-8066cc3aad4e.jpeg",
    badge: "Clásico Tropical",
    available: true
  },
  {
    id: "ron-daiquiris",
    categoryId: "ron",
    categoryName: "RON",
    name: "DAIQUIRÍ (CLÁSICO / SABORES)",
    description: "Ron blanco, jarabe simple y zumo de limón criollo. Disponible en versión Clásica, Fresa, Fresa Frozen o Parchita refrescante.",
    price: 5.99,
    image: "https://assets.olaclick.app/companies/products/images/800/fa90d133-50aa-4013-b0f4-24d43628dc21.jpeg",
    badge: "",
    available: true
  },
  {
    id: "ron-mojito",
    categoryId: "ron",
    categoryName: "RON",
    name: "MOJITO CUBANO",
    description: "Ron blanco macerado con hojas frescas de hierbabuena aromática, zumo de limón, jarabe simple y terminado con soda bien fría.",
    price: 5.99,
    image: "https://assets.olaclick.app/companies/products/images/800/81a82cfe-e3b8-477b-827f-2c7189860a81.jpeg",
    badge: "Favorito",
    available: true
  },
  {
    id: "ron-cuba-libre",
    categoryId: "ron",
    categoryName: "RON",
    name: "CUBA LIBRE",
    description: "Ron añejo venezolano de alta gama, zumo de limón criollo recién exprimido, refresco de cola y un toque de amargo de angostura.",
    price: 7.05,
    image: "https://assets.olaclick.app/companies/products/images/800/69f401ef-bf4f-4406-ad73-0aacbe732a63.jpeg",
    badge: "",
    available: true
  },
  {
    id: "ron-mai-tai",
    categoryId: "ron",
    categoryName: "RON",
    name: "MAI TAI TIKI",
    description: "Combinación de ron añejo, ron blanco, triple sec, jarabe de almendras (orgeat), zumo de limón y toque de jarabe simple.",
    price: 8.99,
    image: "https://assets.olaclick.app/companies/products/images/800/fc82eb83-dac3-4cf8-b0e5-3d8318422bb6.jpeg",
    badge: "Tiki Style",
    available: true
  },

  // --- TEQUILA ---
  {
    id: "teq-margarita",
    categoryId: "tequila",
    categoryName: "TEQUILA",
    name: "MARGARITA (CLÁSICA / FRUTAL)",
    description: "Tequila premium, triple sec, zumo de limón y jarabe simple con borde escarchado en sal marina o tajín. (Clásica, Parchita o Fresa).",
    price: 7.50,
    image: "https://assets.olaclick.app/companies/products/images/800/f110d3e3-337d-43b7-87bf-971dcbbc8883.jpeg",
    badge: "Best Seller",
    available: true
  },
  {
    id: "teq-sunrise",
    categoryId: "tequila",
    categoryName: "TEQUILA",
    name: "TEQUILA SUNRISE",
    description: "Tequila rubio, abundante zumo de naranja natural y jarabe de granadina con su vibrante degradado de color.",
    price: 9.99,
    image: "https://assets.olaclick.app/companies/products/images/800/9b24fc29-77ff-4f7f-9a37-ec4b4fc18bc9.jpeg",
    badge: "",
    available: true
  },
  {
    id: "teq-paloma",
    categoryId: "tequila",
    categoryName: "TEQUILA",
    name: "PALOMA",
    description: "Tequila blanco 100% agave, zumo de limón fresco y refresco de toronja (grapefruit) con borde escarchado.",
    price: 7.99,
    image: "https://assets.olaclick.app/companies/products/images/800/4655d514-bb97-4346-b4b8-52f10f86aca3.jpeg",
    badge: "Refrescante",
    available: true
  },

  // --- COCUY ---
  {
    id: "cocuy-bull-fresh",
    categoryId: "cocuy",
    categoryName: "COCUY",
    name: "BULL FRESH",
    description: "Jarabe de mango dulce, zumo ácido de parchita larense, toque cítrico de tajín y la fuerza del Cocuy Saroche artesanal.",
    price: 8.99,
    image: "https://assets.olaclick.app/companies/products/images/800/47951545-4667-4af6-8a5c-6896590f3512.jpeg",
    badge: "Casa BullBar",
    available: true
  },
  {
    id: "cocuy-amarita",
    categoryId: "cocuy",
    categoryName: "COCUY",
    name: "AMARITA",
    description: "Jarabe artesanal de ají dulce criollo, zumo de limón, maceración de piña fresca y Cocuy Saroche.",
    price: 8.05,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    badge: "Sabor Criollo",
    available: true
  },

  // --- VODKA ---
  {
    id: "vdk-espresso-martini",
    categoryId: "vodka",
    categoryName: "VODKA",
    name: "ESPRESSO MARTINI",
    description: "Vodka suave, licor de café Kahlúa, jarabe de vainilla bourbon y café espresso recién extraído con espuma sedosa.",
    price: 7.99,
    image: "https://assets.olaclick.app/companies/products/images/800/494ae64a-d46a-4653-8f08-3be26704e2d7.JPG",
    badge: "Favorito Noche",
    available: true
  },
  {
    id: "vdk-caipiroska",
    categoryId: "vodka",
    categoryName: "VODKA",
    name: "CAIPIROSKA",
    description: "Vodka puro macerado con trozos de limón sutil y azúcar blanca con hielo frappé.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "vdk-bloody-mary",
    categoryId: "vodka",
    categoryName: "VODKA",
    name: "BLOODY MARY",
    description: "Vodka, zumo de tomate condimentado, zumo de limón, gotas de salsa tabasco, salsa inglesa, sal de apio, pimienta negra y tallo de apio españa.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "vdk-cosmopolitan",
    categoryId: "vodka",
    categoryName: "VODKA",
    name: "COSMOPOLITAN RUBÍ",
    description: "Vodka, triple sec, zumo de limón criollo y jarabe artesanal de frutos rojos.",
    price: 6.95,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "vdk-madrina",
    categoryId: "vodka",
    categoryName: "VODKA",
    name: "MADRINA",
    description: "Clásica combinación equilibrada de Vodka y licor dulce de almendras Amaretto Disaronno.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "vdk-moscow-mule",
    categoryId: "vodka",
    categoryName: "VODKA",
    name: "MOSCOW MULE",
    description: "Vodka, zumo de limón fresco y cerveza de jengibre (ginger beer) servido en taza de cobre con abundante hielo.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },

  // --- WHISKY ---
  {
    id: "wky-old-fashioned",
    categoryId: "whisky",
    categoryName: "WHISKY",
    name: "OLD FASHIONED",
    description: "Whisky de barrica, gotas de amargo de angostura, azúcar granulada disuelta y piel de naranja flambeada.",
    price: 7.99,
    image: "https://assets.olaclick.app/companies/products/images/800/4134ccbd-8609-43c3-9354-474e8c3a1eec.jpeg",
    badge: "Clásico Intenso",
    available: true
  },
  {
    id: "wky-el-padrino",
    categoryId: "whisky",
    categoryName: "WHISKY",
    name: "EL PADRINO (GODFATHER)",
    description: "La legendaria mezcla de Whisky escocés con notas dulces y aterciopeladas de Amaretto.",
    price: 8.99,
    image: "https://assets.olaclick.app/companies/products/images/800/deb2c5e2-9f82-49ca-b2e8-86a6b32a7c11.jpeg",
    badge: "",
    available: true
  },
  {
    id: "wky-manhattan",
    categoryId: "whisky",
    categoryName: "WHISKY",
    name: "MANHATTAN",
    description: "Whisky premium, Vermouth rosso dulce, amargo de angostura y cereza marrasquino.",
    price: 8.99,
    image: "https://assets.olaclick.app/companies/products/images/800/837c7f95-be23-4d65-8410-12e518fad7d6.jpeg",
    badge: "",
    available: true
  },
  {
    id: "wky-mango-tango",
    categoryId: "whisky",
    categoryName: "WHISKY",
    name: "MANGO TANGO",
    description: "Whisky, amaretto, zumo de parchita fresca, jarabe simple y pulpa de mango tropical.",
    price: 6.99,
    image: "https://assets.olaclick.app/companies/products/images/800/0cdf063f-1140-42f7-b831-07129fd7f514.jpeg",
    badge: "Tropical",
    available: true
  },

  // --- GINEBRA ---
  {
    id: "gin-dry-martini",
    categoryId: "ginebra",
    categoryName: "GINEBRA",
    name: "DRY MARTINI",
    description: "Ginebra botanica, toque sutil de Vermouth extra dry y aceituna verde o twist de limón.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=600&q=80",
    badge: "Elegante",
    available: true
  },
  {
    id: "gin-negroni",
    categoryId: "ginebra",
    categoryName: "GINEBRA",
    name: "NEGRONI",
    description: "Partes iguales de Ginebra premium, Campari bitter italiano y Vermouth rosso con rodaja de naranja.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    badge: "Icono",
    available: true
  },
  {
    id: "gin-jardin-secreto",
    categoryId: "ginebra",
    categoryName: "GINEBRA",
    name: "JARDÍN SECRETO",
    description: "Ginebra, licor de coco, zumo de parchita silvestre, jarabe de frutos rojos y jarabe simple.",
    price: 8.99,
    image: "https://assets.olaclick.app/companies/products/images/800/8adfc05d-daf3-448b-855f-96e2bfd33e7c.JPEG",
    badge: "Exclusivo",
    available: true
  },
  {
    id: "gin-gin-tonic",
    categoryId: "ginebra",
    categoryName: "GINEBRA",
    name: "GIN TONIC (CLÁSICO / FRUTOS ROJOS)",
    description: "Ginebra aromática, limón o bayas de frutos rojos y agua tónica quina con burbuja persistente.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "gin-tom-collins",
    categoryId: "ginebra",
    categoryName: "GINEBRA",
    name: "TOM COLLINS",
    description: "Ginebra, zumo de limón exprimido, jarabe simple y finalizado con soda burbujeante.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "gin-limoncello",
    categoryId: "ginebra",
    categoryName: "GINEBRA",
    name: "LIMONCELLO GIN",
    description: "Ginebra infusionada, limoncello italiano dulce y agua tónica aromatizada.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },

  // --- LICORES & SPRITZ ---
  {
    id: "lic-garibaldi",
    categoryId: "licores",
    categoryName: "LICORES",
    name: "GARIBALDI",
    description: "Campari bitter con jugo de naranja natural espumado al momento.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "lic-aperol-spritz",
    categoryId: "licores",
    categoryName: "LICORES",
    name: "APEROL SPRITZ",
    description: "Prosecco espumoso italiano, Aperol amargo dulce, golpe de soda y rodaja de naranja fresca.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80",
    badge: "Favorito Tarde",
    available: true
  },
  {
    id: "lic-caipirina",
    categoryId: "licores",
    categoryName: "LICORES",
    name: "CAIPIRIÑA",
    description: "Cachaça brasileña original, limón macerado con azúcar granulada y hielo triturado.",
    price: 9.99,
    image: "https://assets.olaclick.app/companies/products/images/800/81a82cfe-e3b8-477b-827f-2c7189860a81.jpeg",
    badge: "",
    available: true
  },
  {
    id: "lic-limoncello-spritz",
    categoryId: "licores",
    categoryName: "LICORES",
    name: "LIMONCELLO SPRITZ",
    description: "Prosecco burbujeante, licor de Limoncello y soda con aroma a limón mediterráneo.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },

  // --- BEBIDAS SIN ALCOHOL ---
  {
    id: "beb-limonadas",
    categoryId: "bebidas",
    categoryName: "BEBIDAS",
    name: "LIMONADA NATURAL / FRAPPÉ",
    description: "Limonada fresca preparada al instante: Natural, Menta con Hierbabuena, o Frappé helada.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "beb-batidos",
    categoryId: "bebidas",
    categoryName: "BEBIDAS",
    name: "BATIDOS DE FRUTAS NATURALES",
    description: "Batidos de fruta de temporada: Fresa, Parchita, Piña o Mango.",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "beb-merengadas",
    categoryId: "bebidas",
    categoryName: "BEBIDAS",
    name: "MERENGADAS ESPECIALES",
    description: "Merengada cremosa con helado, leche y siropes: Chocolate, Vainilla o Fresa.",
    price: 5.95,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    badge: "Dulce",
    available: true
  },
  {
    id: "beb-cafe",
    categoryId: "bebidas",
    categoryName: "BEBIDAS",
    name: "CAFÉ GOURMET",
    description: "Café recién extraído de grano venezolano: Espresso, Americano, Capuchino o Marrón.",
    price: 2.95,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },

  // --- SERVICIO (BOTELLAS COMPLETAS) ---
  {
    id: "srv-whisky-bw",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "WHISKY BLACK & WHITE (SERVICIO)",
    description: "Botella completa de Black & White acompañada con hielera y servicio de vasos.",
    price: 45.99,
    image: "https://assets.olaclick.app/companies/products/images/800/27aab82f-f35b-433f-8441-5dbaf1c1f973.jpg",
    badge: "Botella",
    available: true
  },
  {
    id: "srv-jw-black",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "JOHNNIE WALKER BLACK LABEL 0.75L",
    description: "Botella de Johnnie Walker Etiqueta Negra 12 años con servicio de hielo y mezcladores.",
    price: 55.99,
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80",
    badge: "12 Años",
    available: true
  },
  {
    id: "srv-buchanans",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "BUCHANAN'S 12 AÑOS (SERVICIO)",
    description: "Botella de Buchanan's De Luxe 12 años servida en mesa con hielera.",
    price: 65.95,
    image: "https://assets.olaclick.app/companies/products/images/800/7a2be212-22bf-40b0-acd1-3715f2495012.JPG",
    badge: "Top Ventas",
    available: true
  },
  {
    id: "srv-ron-cacique",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "RON CACIQUE 0.75L",
    description: "Botella de Ron Cacique Añejo con hielo y limón.",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    badge: "Ron Nacional",
    available: true
  },
  {
    id: "srv-tequila-don-julio",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "TEQUILA DON JULIO BLANCO / REPOSADO",
    description: "Servicio exclusivo de Tequila Don Julio premium en mesa.",
    price: 152.06,
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    badge: "Ultra Premium",
    available: true
  },
  {
    id: "srv-gin-tanqueray",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "GINEBRA TANQUERAY LONDON DRY 0.75L",
    description: "Servicio de Ginebra Tanqueray con hielera y botánicos de adorno.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "srv-wild-turkey-honey",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "WILD TURKEY AMERICAN HONEY",
    description: "Bourbon con infusión de miel pura servido con hielera.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80",
    badge: "Bourbon & Honey",
    available: true
  },
  {
    id: "srv-vodka-gordons",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "GORDON'S VODKA 0.75L",
    description: "Botella de Vodka Gordon's con servicio de hielo.",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "srv-old-parr",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "OLD PARR 12 AÑOS 0.75L",
    description: "El inconfundible whisky Old Parr servido en mesa con servicio completo.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80",
    badge: "12 Años",
    available: true
  },
  {
    id: "srv-hendricks",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "HENDRICK'S GIN 0.75L",
    description: "Ginebra escocesa con infusión de pepino y pétalos de rosa.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80",
    badge: "Super Premium",
    available: true
  },
  {
    id: "srv-canaima",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "GINEBRA CANAIMA 0.75L",
    description: "Ginebra artesanal venezolana con 19 botánicos recolectados en la Amazonía.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80",
    badge: "Orgullo Venezolano",
    available: true
  },
  {
    id: "srv-glenfiddich",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "GLENFIDDICH SINGLE MALT 12 AÑOS 0.75L",
    description: "Single Malt escocés envejecido en barricas de roble americano y europeo.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80",
    badge: "Single Malt",
    available: true
  },
  {
    id: "srv-jack-daniels",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "JACK DANIEL'S OLD NO. 7 (0.75L)",
    description: "Tennessee Whiskey filtrado gota a gota por carbón de arce dulce.",
    price: 90.99,
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80",
    badge: "Tennessee Whiskey",
    available: true
  },
  {
    id: "srv-cocuy-saroche",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "COCUY SAROCHE EDICIÓN BOTELLA",
    description: "El auténtico Cocuy de penca Saroche de Lara, destilado artesanal de agave nativo.",
    price: 99.99,
    image: "https://assets.olaclick.app/companies/products/images/800/06cfbb67-db1c-4689-89f6-b68cf0a25ba0.jfif",
    badge: "Denominación de Origen",
    available: true
  },
  {
    id: "srv-grey-goose",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "VODKA GREY GOOSE 1L",
    description: "Vodka francés ultra premium elaborado con trigo de invierno y agua de manantial de Gensac.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    badge: "1 Litro",
    available: true
  },
  {
    id: "srv-balzamal",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "BALZAMAL REPOSADO 0.75L",
    description: "Destilado de agave reposado de notas amaderadas y especiadas.",
    price: 120.99,
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    badge: "Reserva",
    available: true
  },
  {
    id: "srv-jose-cuervo",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "TEQUILA JOSE CUERVO 0.75L",
    description: "El tequila dorado tradicional para brindar y celebrar.",
    price: 120.99,
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "srv-jagermeister",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "JÄGERMEISTER 0.75L",
    description: "Licor de 56 hierbas botánicas servido a temperatura bajo cero (-18°C).",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80",
    badge: "Ice Cold",
    available: true
  },
  {
    id: "srv-monkey-shoulder",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "MONKEY SHOULDER BLENDED MALT",
    description: "Mezcla de tres de los mejores single malts de Speyside con ricas notas de vainilla y naranja.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80",
    badge: "Triple Malt",
    available: true
  },
  {
    id: "srv-vino-santa-carolina",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "VINO SANTA CAROLINA (BOTELLA)",
    description: "Vino tinto chileno reserva con taninos suaves y notas a frutas rojas.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    badge: "Vino Tinto",
    available: true
  },
  {
    id: "srv-vino-estancia-mendoza",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "VINO ESTANCIA MENDOZA MALBEC",
    description: "Malbec argentino con aromas a ciruela, vainilla y final redondo.",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    badge: "Malbec",
    available: true
  },
  {
    id: "srv-santa-teresa",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "RON SANTA TERESA 1796 (SERVICIO)",
    description: "El ron súper premium con método Solera más premiado del mundo.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    badge: "Solera 1796",
    available: true
  },
  {
    id: "srv-grand-marnier",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "GRAND MARNIER CORDON ROUGE 0.75L",
    description: "Licor francés de fino cognac y esencia destilada de naranjas amargas exóticas.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80",
    badge: "Cognac & Naranja",
    available: true
  },
  {
    id: "srv-hacienda-saruro",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "RON HACIENDA SARURO",
    description: "Ron de autor con gran complejidad aromática y final envolvente.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    badge: "",
    available: true
  },
  {
    id: "srv-smirnoff",
    categoryId: "servicio",
    categoryName: "SERVICIO",
    name: "SMIRNOFF RED NO. 21 (0.75L)",
    description: "Botella de Smirnoff triple destilación servida con abundante hielo.",
    price: 49.99,
    image: "https://assets.olaclick.app/companies/products/images/800/7a419b58-a350-4692-b6c9-14a6b356dfea.JPG",
    badge: "Vodka Clásico",
    available: true
  }
];
