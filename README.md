# 🍹 Plataforma Digital BullBar Social Lounge (Menú, Reservas & Administración)

Plataforma web integral diseñada para **BullBar** (Barquisimeto, Venezuela), compuesta por 3 aplicaciones complementarias:
1. **Menú Digital Interactivo de Clientes (`index.html`)**: Catálogo gastronómico completo, fotos HD, descripciones, visor de imágenes, carrito de compras y toma de pedidos dirigida a **WhatsApp (+58 422 888 8356)**.
2. **App de Recepción y Captación de Reservaciones (`reservas.html`)**: Plataforma dirigida a captar clientes para mesas, cumpleaños y eventos VIP, con catálogo de servicios, precios transparentes, fotos de instalaciones con Lightbox, generador de comprobante con código QR, envío a WhatsApp y **Panel de Recepción & Hostess** en vivo para controlar la llegada de comensales en puerta.
3. **Panel Administrativo Interno (`admin.html`)**: Plataforma de control estilo OlaClick para editar precios, productos, subir fotos, gestionar categorías, horarios, métricas y pedidos sin tocar código.

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

---

## 📱 3. Menú de Clientes (`index.html`)

- **Diseño Mobile-First:** Rápido y fluido, pensado para usuarios que ingresan desde el link en la biografía de Instagram (`@bullbar_bqto`).
- **Buscador en tiempo real y filtros por categoría**.
- **Modal de Detalle con Visor de Fotos en Pantalla Completa (Lightbox):** Los clientes pueden pulsar sobre la foto de cualquier producto para verla ampliada como referencia visual.
- **Acceso Directo a Redes:** Botones para Instagram, ficha de Google Maps, WhatsApp y botón de acceso directo a Reservas (`reservas.html`).
- **Carrito de Compras y Pedidos:**
  - Selección de modalidad: *En Mesa / Salón*, *Para Retirar (Pick Up)* o *Delivery*.
  - Selección de método de pago: *Efectivo USD*, *Pago Móvil (Bs.)*, *Zelle* o *Punto de Venta*.
  - Envío formateado con emojis directamente al WhatsApp de BullBar.

---

## 📅 4. App de Reservas & Recepción (`reservas.html`)

Aplicación dedicada a la **captación de clientes** y a la **recepción y control de mesas en local**:

### 🎯 A. Modo Captación (Cliente)
- **Servicios que Ofrecemos:**
  - *Mesas & Salón VIP Lounge*: Sillones capitonados, atención de mesero exclusivo y servicio de botellas.
  - *Celebraciones de Cumpleaños*: Bengalas chispeantes de cortesía, shot especial y dedicatoria del DJ.
  - *After Office & Amigos*: Promos de tobo de 9 cervezas frías + 5 tequeños por $14.95 desde las 2:00 PM.
  - *Coctelería de Autor & Colección 1552*: Mixología de autor con Cocuy Saroche y 2x1 en cócteles seleccionados.
  - *Eventos Corporativos & Privados*: Alquiler de áreas, pantallas HD y sonido para empresas.
  - *Noches de DJ & Música en Vivo*: Jueves a sábado con la mejor vibra bailable.
- **Precios & Paquetes Transparentes:**
  - *Consumo Libre*: **$0 costo de reserva** (consumo directo en local sin mínimo).
  - *Pack After Office*: **$14.95** (Tobo 9 cervezas Polar + 5 tequeños).
  - *Pack Cumpleaños VIP*: **$24.99** (Mesa decorada, bengala, 5 shots cumpleañeros y dedicatoria).
  - *Pack VIP Lounge Botella*: **$49.99** (Sofás VIP, botella de licor, 4 mezcladores, hielera y snack).
  - *Pack Pareja & Cócteles*: **$29.99** (2 cócteles de autor + 1 pizza artesanal + postre).
  - *Extras Opcionales*: Torta de cumpleaños ($12), Vela de bengala ($2.50), Descorche ($15), Tobo extra ($9.95).
- **Fotos de Nuestras Instalaciones (Galería con Lightbox HD):**
  - Fotos de alta resolución de *Zona VIP Lounge*, *Terraza Open-Air*, *Barra de Coctelería* y *Salón Central*.
  - Visor a pantalla completa con navegación por flechas, detalles de capacidad y botón de reserva rápida de zona.
- **Formulario Inteligente de Reservación:**
  - Atajos de fecha (*Hoy, Mañana, Este Viernes, Este Sábado*) y selector de calendario.
  - Franjas horarias con slots acordes a los horarios de BullBar.
  - Control de cantidad de personas (1 a 40+ invitados).
  - Selección de motivo de visita y paquete de consumo.
  - Resumen en tiempo real del monto estimado.
  - **Envío a WhatsApp (+58 422 888 8356):** Formatea el mensaje con emojis y código único de reserva.
  - **Comprobante Digital (Voucher VIP):** Muestra un ticket digital con código de verificación QR interactivo.

### 📋 B. Modo Recepción & Hostess (Personal del Bar)
- Acceso rápido protegido por PIN (`bullbar2026`) con switch en el menú superior.
- **KPIs en Vivo:** Reservaciones de hoy, total de personas esperadas, cumpleaños agendados y pendientes.
- **Gestión Operativa de Mesas:**
  - Filtro por fecha (*Hoy, Mañana, Fin de Semana, Todas*) y por estado (*Pendientes, Confirmadas, En Mesa, Canceladas*).
  - Buscador en tiempo real por nombre, teléfono o código de reserva.
  - Botones de 1 clic para cambiar estado: *Confirmar*, *Sentar en Mesa (cliente en local)* y *Cancelar*.
  - **Botón de Contacto por WhatsApp:** Abre WhatsApp con un saludo personalizado hacia el cliente para reconfirmar su asistencia.
  - **Botón "+ Cargar Reservas Demo":** Para probar el flujo operativo al instante.
  - **Exportar a CSV / Excel:** Descarga el listado completo para el capitán de meseros o administración.

---

## 🔐 5. Control de Acceso y Seguridad del Panel

El panel administrativo y el modo de recepción incluyen protección mediante credenciales para evitar modificaciones no autorizadas:

- **Panel Administrativo (`admin.html`):** Usuario `admin`, Contraseña `bullbar2026`.
- **Modo Recepción / Hostess (`reservas.html -> Modo Recepción`):** Clave de acceso rápido `bullbar2026`.
- **Cambio de Contraseña:** Desde la sección **"Horarios y Negocio -> Seguridad y Contraseña del Panel"** en `admin.html`.

---

## 🚀 ¿Cómo Probar la Plataforma?

1. **Para reservar mesas o ver instalaciones (`reservas.html`):** Abre [reservas.html](file:///c:/Users/pauli/Downloads/menu%20interactivo%20bullbar/reservas.html) con doble clic. Puedes explorar los servicios, precios, la galería de fotos en pantalla completa, completar una reserva de prueba hacia WhatsApp y entrar al **Modo Recepción & Hostess** con la clave `bullbar2026`.
2. **Para ver el menú como cliente (`index.html`):** Abre [index.html](file:///c:/Users/pauli/Downloads/menu%20interactivo%20bullbar/index.html) con doble clic.
3. **Para ingresar al panel administrativo del menú (`admin.html`):** Abre [admin.html](file:///c:/Users/pauli/Downloads/menu%20interactivo%20bullbar/admin.html) e ingresa con `admin` / `bullbar2026`.

## 🌐 Publicación Gratuita en Internet

Puedes alojar la plataforma web completa de BullBar gratis en cualquiera de estas opciones:

1. **Netlify Drop (30 segundos):** Arrastra la carpeta `menu interactivo bullbar` completa a [app.netlify.com/drop](https://app.netlify.com/drop).
2. **Vercel:** Sube la carpeta a [vercel.com](https://vercel.com).
3. **GitHub Pages:** Sube los archivos a un repositorio y activa GitHub Pages en la rama principal.

