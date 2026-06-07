import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';

export default function App() {
  // Inicializamos el estado desde localStorage o array vacío
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito_unahur');
    return guardado ? JSON.parse(guardado) : [];
  });

  // Efecto para persistir cambios en el carrito automáticamente
  useEffect(() => {
    localStorage.setItem('carrito_unahur', JSON.stringify(carrito));
  }, [carrito]);

  // Lógica: Agregar controlando Stock estricto
  const agregarAlCarrito = (producto) => {
    setCarrito((itemPrevio) => {
      const encontrado = itemPrevio.find((item) => item.id === producto.id);
      if (encontrado) {
        if (encontrado.cantidad < producto.stock) {
          return itemPrevio.map((item) =>
            item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
          );
        }
        alert(`Disculpá, no hay más de ${producto.stock} unidades disponibles.`);
        return itemPrevio;
      }
      return [...itemPrevio, { ...producto, cantidad: 1 }];
    });
  };

  // Lógica: Modificar cantidad (+1 o -1) de manera controlada
  const modificarCantidad = (id, tipo) => {
    setCarrito((itemPrevio) =>
      itemPrevio.map((item) => {
        if (item.id === id) {
          const delta = tipo === 'incrementar' ? 1 : -1;
          const nuevaCantidad = item.cantidad + delta;
          if (nuevaCantidad > 0 && nuevaCantidad <= item.stock) {
            return { ...item, cantidad: nuevaCantidad };
          }
        }
        return item;
      })
    );
  };

  // Lógica: Eliminar producto completo
  const eliminarDelCarrito = (id) => {
    setCarrito((itemPrevio) => itemPrevio.filter((item) => item.id !== id));
  };

  // Lógica: Vaciar tras checkout exitoso
  const vaciarCarrito = () => setCarrito([]);

  // Cálculos dinámicos utilizando .reduce()
  const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-teal-200 selection:text-teal-900">
        <Navbar totalProductos={totalProductos} />
        
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos onAgregar={agregarAlCarrito} />} />
            <Route path="/producto/:id" element={<DetalleProducto onAgregar={agregarAlCarrito} />} />
            <Route 
              path="/carrito" 
              element={
                <Carrito 
                  carrito={carrito} 
                  modificarCantidad={modificarCantidad} 
                  eliminarDelCarrito={eliminarDelCarrito} 
                  totalPrecio={totalPrecio}
                  vaciarCarrito={vaciarCarrito}
                />
              } 
            />
            <Route path="/contacto" element={<Contacto carritoVacio={carrito.length === 0} vaciarCarrito={vaciarCarrito} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}