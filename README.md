# ⚡ TECH-Store - Tienda Online de Hardware Premium

## 📝 Descripción breve
TECH_STORE es una aplicación web SPA(Single Page Application) desarrollada en React para simular una tienda online de hardware y periféricos. Permite explorar el catálogo, ver el detalle de cada producto, agregar artículos al carrito, controlar el stock y completar una compra simulada mediante un formulario controlado.

Este proyecto fue desarrollado como trabajo práctico para la materia Construcción de Interfaces de Usuario de la Universidad Nacional de Hurlingham (UNAHUR).

## 🚀 Funcionalidades principales
- Navegación dinámica con React Router DOM.
- Catálogo responsive con cards y diseño visual coherente.
- Búsqueda, filtros por categoría, orden por precio y opción de mostrar solo productos con stock.
- Vista de detalle de producto con ruta dinámica.
- Carrito con cálculo de subtotal, total general y cantidad total de productos.
- Formulario de compra controlado con validaciones simples y confirmación simulada.
- Persistencia del carrito mediante localStorage.

## 🛠️ Tecnologías utilizadas
- React
- Vite
- Tailwind CSS
- React Router DOM
- JavaScript ES6+
- Git y GitHub

## 📦 Instalación y ejecución
1. Clonar el repositorio.
2. Instalar dependencias con:
   npm install
3. Ejecutar la aplicación en modo desarrollo:
   npm run dev
4. Para generar una versión de producción:
   npm run build

## 📂 Estructura del proyecto
src/
├── components/        # Navbar, Footer, ProductoCard, CarritoItem
├── pages/             # Inicio, Productos, DetalleProducto, Carrito, Contacto
├── data/              # Array de productos mock
└── App.jsx            # Enrutado y lógica del carrito

## 👥 Integrantes del grupo

Equipo de desarrollo del proyecto TECH_STORE:

- Luis Sebastián Alderete Cuello
- Magalí Gutiérrez
- Martín Marcelo Maldonado
- Felipe Agustín López Acosta
- Ary Diego Albarracín

## 🌐 Deploy
Sin deploy publicado aún.

## 📌 Nota para la entrega
La aplicación fue validada con el comando:

npm run build

El build finalizó correctamente sin errores de compilación.
