# ⚡ TECH_STORE - Tienda Online de Hardware Premium

## 📝 Descripción del Proyecto
Este proyecto es una aplicación web SPA (Single Page Application) desarrollada en **React** que simula un e-commerce de tecnología. Los usuarios pueden explorar un catálogo de hardware, filtrar componentes por categorías o mediante un buscador interactivo por texto, analizar las especificaciones técnicas en detalle, gestionar un carrito de compras dinámico con control estricto de stock y finalizar la transacción mediante un formulario de checkout controlado.

Desarrollado como trabajo práctico para la materia **Construcción de Interfaces de Usuario** de la **Universidad Nacional de Hurlingham (UNAHUR)**.

---

## 🚀 Características y Funcionalidades
* **Navegación Dinámica:** Implementada con `react-router-dom` para una transición fluida sin recargar el navegador.
* **Catálogo e Interfaz:** Grilla totalmente responsive diseñada con **Tailwind CSS**, adaptada para celulares, tablets y computadoras de escritorio.
* **Buscador y Filtros Reactivos:** Sistema combinado que filtra el array de productos en tiempo real según el texto ingresado (`.toLowerCase().includes()`) y la categoría seleccionada.
* **Gestión de Stock Estricta:** Lógica centralizada en el estado de React que impide agregar al carrito más unidades de las disponibles físicamente en el inventario.
* **Persistencia Local (Extra Opcional):** Integración con `localStorage` para salvaguardar el estado del carrito ante recargas de página accidentales.
* **Formulario Controlado:** Validación lógica del correo electrónico (`regex`) y bloqueo preventivo del checkout en caso de carritos vacíos.

---

## 🛠️ Tecnologías Utilizadas
* **React** (v18+)
* **Vite** (Entorno de desarrollo ultra rápido)
* **Tailwind CSS** & **PostCSS** (Estilos y diseño responsive)
* **React Router DOM** (Enrutamiento y parámetros dinámicos)
* **Git & GitHub** (Control de versiones)

---

## 📂 Estructura del Código
Siguiendo las pautas requeridas por la cátedra, el código se organiza de manera modular:
```text
src/
├── components/
│   ├── Navbar.jsx          # Barra de navegación con contador dinámico
│   ├── Footer.jsx          # Cierre institucional del sitio
│   ├── ProductoCard.jsx    # Tarjeta de producto con control de stock visual
│   ├── CarritoItem.jsx     # Fila interactiva para modificar unidades
│   └── FormularioCompra.jsx
├── pages/
│   ├── Inicio.jsx          # Landing page con identidad de la marca y Hero Banner
│   ├── Productos.jsx       # Catálogo general con buscador y select de categorías
│   ├── DetalleProducto.jsx # Vista ampliada que consume el parámetro dinámico (:id)
│   ├── Carrito.jsx         # Desglose de totales calculados con .reduce()
│   └── Contacto.jsx        # Formulario controlado de checkout y validaciones
├── data/
│   └── productos.js        # Array con el mock de los 12 productos iniciales
├── App.jsx                 # Centralización del estado global y rutas de la app
└── main.jsx                # Punto de entrada de la aplicación

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
