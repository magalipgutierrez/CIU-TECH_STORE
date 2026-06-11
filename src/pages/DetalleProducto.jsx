import { useParams, Link } from 'react-router-dom';
import { productos } from '../data/productos';
import { useState } from 'react';

export default function DetalleProducto({ onAgregar }) {
  const { id } = useParams();
  
  const producto = productos.find((p) => p.id === parseInt(id));

  // Usamos useState para simular un carrusel al igual que en 'ProductoCard'
  const [imagenActiva, setImagenActiva] = useState(0);
  const listaImagenes = producto.imagenes || [];

  if (!producto) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-slate-500 font-medium">El componente solicitado no se encuentra en el catálogo.</p>
        <Link to="/productos" className="inline-block text-sm text-teal-600 font-bold hover:underline">← Volver al catálogo</Link>
      </div>
    );
  }

  const sinStock = producto.stock === 0;

  return (
    <div className="space-y-6 py-4">
      <Link to="/productos" className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-teal-600 transition-colors">
        ← Volver al Catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm" >

        {/* Contenedor Izquierdo: Imagen Ampliada */}
        <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center p-4 relative border border-slate-100">
          <img 
            src={listaImagenes[imagenActiva]} 
            alt={`${producto.nombre} - vista ${imagenActiva + 1}`} 
            className={`w-full h-full object-contain rounded-lg ${sinStock ? 'opacity-30 grayscale' : ''}`} 
          />
  
          {sinStock && (
            <span className="absolute bg-red-100 text-red-700 font-black text-xs px-3 py-1.5 rounded-md uppercase tracking-wider shadow-sm border border-red-200">
              Agotado Temporalmente
            </span>
          )}

          {/* FLECHITAS Y PUNTITOS (Se muestran solo si hay más de 1 imagen) */}
          {listaImagenes.length > 1 && (
            <>
              {/* Botón Izquierdo */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setImagenActiva((prev) => (prev === 0 ? listaImagenes.length - 1 : prev - 1));
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md z-10"
              >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Botón Derecho */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setImagenActiva((prev) => (prev === listaImagenes.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md z-10"
              >
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Puntitos Indicadores */}
              <div className="absolute bottom-4 flex gap-1.5 z-10">
                {listaImagenes.map((_, index) => (
                  <div 
                    key={index} 
                    className={`h-2 rounded-full transition-all ${index === imagenActiva ? 'w-4 bg-teal-500' : 'w-2 bg-slate-300'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Contenedor Derecho: Información Técnica */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-teal-700 tracking-wider uppercase bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
              {producto.categoria}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight">{producto.nombre}</h1>
            <p className="text-sm text-slate-500 leading-relaxed">{producto.descripcion}</p>
            
            <div className="pt-2 flex items-baseline space-x-4">
              <span className="text-3xl font-black text-emerald-600">${producto.precio.toLocaleString('es-AR')}</span>
              <span className={`text-xs font-semibold ${sinStock ? 'text-red-500' : 'text-slate-500'}`}>
                {sinStock ? '❌ Sin unidades' : `✔️ Stock disponible: ${producto.stock} unidades`}
              </span>
            </div>
          </div>

          <button
            onClick={() => onAgregar(producto)}
            disabled={sinStock}
            className={`w-full font-bold py-3.5 rounded-xl transition-all text-sm ${
              sinStock 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' 
                : 'bg-teal-500 hover:bg-teal-600 text-white shadow-sm active:scale-[0.98]'
          }`}
        >
          {sinStock ? 'Producto Agotado' : '🛒 Añadir al Carrito de Compras'}
        </button>
      </div>
    </div>
    </div>
  );
}