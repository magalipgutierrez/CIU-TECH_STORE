import { Link } from 'react-router-dom';
import CarritoItem from '../components/CarritoItem';

export default function Carrito({ carrito, modificarCantidad, eliminarDelCarrito, totalPrecio }) {
  const carritoVacio = carrito.length === 0;

  return (
    <div className="space-y-8 py-4">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Tu Carrito de Compras</h1>
        <p className="text-sm text-slate-500 mt-1">Revisá los componentes agregados antes de proceder al checkout.</p>
      </div>

      {carritoVacio ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-4">
          <p className="text-slate-500 text-sm font-medium">El carrito se encuentra actualmente vacío.</p>
          <Link to="/productos" className="inline-block bg-teal-600 hover:bg-teal-700 border border-teal-700 text-xs font-bold text-white px-6 py-2.5 rounded-xl transition-colors shadow-sm">
            Explorar Catálogo 🚀
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Listado de Ítems */}
          <div className="lg:col-span-2 space-y-3">
            {carrito.map((item) => (
              <CarritoItem 
                key={item.id} 
                item={item} 
                modificarCantidad={modificarCantidad} 
                eliminarDelCarrito={eliminarDelCarrito} 
              />
            ))}
          </div>

          {/* Caja de Resumen de Totales */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-3">Resumen de Compra</h3>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Total Neto:</span>
              <span className="text-xl font-black text-emerald-600">${totalPrecio.toLocaleString('es-AR')}</span>
            </div>
            
            <Link 
              to="/contacto" 
              className="block text-center w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm py-3.5 rounded-xl transition-colors shadow-sm"
            >
              Continuar al Checkout 💳
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}