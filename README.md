# 🍹 Plataforma de Menú Interactivo & Panel Administrativo BullBar Social Lounge

Plataforma web completa diseñada para **BullBar** (Barquisimeto, Venezuela), con:
1. **Menú Digital Interactivo de Clientes (`index.html`)**: Catálogo completo, fotos en alta resolución, descripciones gastronómicas, visor de imágenes a pantalla completa, carrito de compras y toma de pedidos dirigida a **WhatsApp (+58 422 888 8356)**.
2. **Panel Administrativo Interno (`admin.html`)**: Plataforma interna de control estilo OlaClick para editar precios, descripciones, subir fotos desde la computadora, pausar/activar productos agotados, gestionar horarios y categorías sin tocar código.

---

## 🖥️ 1. Panel Administrativo Interno (`admin.html`)

El panel administrativo permite al equipo de BullBar controlar todo el menú en tiempo real:

- **Gestión de Productos:**
  - Agregar nuevos platos, tragos o botellas con el botón **"+ Nuevo Producto"**.
  - Modificar precios en USD ($), nombres y descripciones.
  - Asignar etiquetas promocionales (ej: *"2x1"*, *"Super Promo"*, *"Autor BullBar"*).
  - **Adjuntar imágenes:** Puedes subir fotos directamente desde tu computadora (PC o móvil) o ingresar un enlace URL externo.
  - **Switch de disponibilidad en un clic:** Marca productos como *"Disponible"* o *"Agotado / Pausado"* para que los clientes no puedan pedirlo cuando se termine el inventario.
  - **Duplicar o eliminar productos**.
- **Gestión de Categorías:**
  - Crear nuevas secciones (ej: *Postres, Shots, Hamburguesas*), editar nombres y ordenar el menú.
- **Horarios y Estado de Apertura:**
  - Interruptor rápido para abrir o cerrar el bar temporalmente con un solo clic.
  - Configurar horarios de domingo a miércoles y de jueves a sábado.
- **WhatsApp y Enlaces de Redes:**
  - Cambiar el número de WhatsApp receptor de pedidos.
  - Actualizar enlaces de Instagram y Google Maps.
- **Sincronización en Tiempo Real:**
  - Los cambios se guardan instantáneamente en el navegador y se reflejan en el menú de clientes en vivo.
- **Descargar `data.js` Actualizado:**
  - Con el botón **"Descargar data.js"**, se genera una copia limpia y lista para producción para respaldar tus cambios.

---

## 📊 2. Módulo de Métricas, Visitas y Analítica (`admin.html -> Métricas & Visitas`)

Apartado dedicado a medir la efectividad comercial del menú con filtros por períodos de tiempo:

- **Filtros por Períodos de Tiempo:**
  - *Hoy*, *Últimos 7 Días*, *Últimos 30 Días*, *Este Mes* y *Todo el Historial*.
- **Indicadores Clave de Desempeño (KPIs):**
  - **Visitas al Menú:** Total de visitas y desglose porcentual móvil vs. computadora.
  - **Clics / Interacciones:** Clics en fotos, botones de ver más y exploraciones.
  - **Pedidos Concretados:** Cantidad de órdenes efectivamente enviadas a WhatsApp.
  - **Facturación Total ($ USD):** Ingresos totales generados en el período.
  - **Tasa de Conversión (%):** Porcentaje de visitantes que completaron un pedido.
  - **Ticket Promedio ($ USD):** Gasto medio por cliente.
- **Gráficos & Visualizaciones:**
  - **Tendencia Diaria (Visitas vs. Pedidos):** Gráfico interactivo de barras con tooltips de visitas, pedidos y facturación día por día.
  - **Modalidad de Consumo:** Comparativa porcentual entre *Mesa (Consumo en Local)*, *Delivery a Domicilio* y *Pick-Up*.
  - **Métodos de Pago:** Distribución entre *Pago Móvil (Bs)*, *Efectivo ($ USD)*, *Zelle* y *Punto de Venta*.
- **Top 5 Productos Más Populares:**
  - Ranking de los cócteles, cervezas o platos más pedidos con fotos, volumen de venta y recaudación.
- **Historial Completo de Pedidos Concretados:**
  - Buscador en tiempo real por cliente o código.
  - Visualización del ticket detallado con productos, cantidades, notas del comensal y método de pago.
  - Botón **"+ Pedido de Prueba"** para simular una comanda al instante y ver la reacción de las métricas.
  - Botón **"Exportar CSV"** para descargar la data completa a Microsoft Excel o Google Sheets.
---

## 📱 3. Menú de Clientes (`index.html`)

- **Diseño Mobile-First:** Rápido y fluido, pensado para usuarios que ingresan desde el link en la biografía de Instagram (`@bullbar_bqto`).
- **Buscador en tiempo real y filtros por categoría**.
- **Modal de Detalle con Visor de Fotos en Pantalla Completa (Lightbox):** Los clientes pueden pulsar sobre la foto de cualquier producto para verla ampliada como referencia visual.
- **Acceso Directo a Redes:** Botones para Instagram, ficha de Google Maps, WhatsApp y botón de acceso al panel administrativo.
- **Carrito de Compras y Pedidos:**
  - Selección de modalidad: *En Mesa / Salón*, *Para Retirar (Pick Up)* o *Delivery*.
  - Selección de método de pago: *Efectivo USD*, *Pago Móvil (Bs.)*, *Zelle* o *Punto de Venta*.
  - Envío formateado con emojis directamente al WhatsApp de BullBar.

---

## 🔐 4. Control de Acceso y Seguridad del Panel

El panel administrativo incluye protección mediante usuario y contraseña para evitar modificaciones no autorizadas:

- **Pantalla de Inicio de Sesión (`admin.html`):** Bloquea el panel hasta que se introduzcan las credenciales correctas.
- **Credenciales Iniciales por Defecto:**
  - **Usuario:** `admin`
  - **Contraseña:** `bullbar2026`
- **Cambio de Contraseña:** Desde la sección **"Horarios y Negocio -> Seguridad y Contraseña del Panel"**, puedes cambiar tanto el nombre de usuario como la clave en cualquier momento.
- **Cierre de Sesión:** Botones dedicados en la barra lateral y en la esquina superior derecha para salir de forma segura.

---

## 🚀 ¿Cómo Probar la Plataforma?

1. **Para ver el menú como cliente:** Abre el archivo [index.html](file:///c:/Users/pauli/Downloads/menu%20interactivo%20bullbar/index.html) con doble clic.
2. **Para ingresar al panel administrativo:** Abre el archivo [admin.html](file:///c:/Users/pauli/Downloads/menu%20interactivo%20bullbar/admin.html) e ingresa con `admin` / `bullbar2026`.

## 🌐 Publicación Gratuita en Internet

Puedes alojar tanto el menú de clientes como el panel administrativo gratis en cualquiera de estas opciones:

1. **Netlify Drop (30 segundos):** Arrastra la carpeta `menu interactivo bullbar` completa a [app.netlify.com/drop](https://app.netlify.com/drop).
2. **Vercel:** Sube la carpeta a [vercel.com](https://vercel.com).
3. **GitHub Pages:** Sube los archivos a un repositorio y activa GitHub Pages en la rama principal.
