import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductoCard({ producto, onAgregar }) {
  const { id, nombre, precio, imagenes, stock, categoria } = producto;
  const sinStock = stock === 0;

  // ESTADO: Memoria para saber qué foto estamos viendo (arranca en la 0)
  const [imagenActiva, setImagenActiva] = useState(0);

  //actualizar algún producto al nuevo formato de array
  const listaImagenes = imagenes || []; 

  // Para mover el carrusel
  const siguienteImagen = (e) => {
    e.preventDefault(); // Evita que se disparen otros clic sin querer
    // Si llegamos a la última foto-> volvemos a la primera (0)
    setImagenActiva((prev) => (prev === listaImagenes.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = (e) => {
    e.preventDefault();
    // Si estamos en la primera foto-> vamos a la última
    setImagenActiva((prev) => (prev === 0 ? listaImagenes.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-md overflow-hidden border border-slate-200 flex flex-col justify-between p-4 h-full hover:border-slate-300 hover:shadow-lg transition-all group">
      <div>
        <span className="text-[10px] font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
          {categoria}
        </span>
        
        {/* CONTENEDOR DE CARRUSEL */}
        <div className="w-full h-44 overflow-hidden rounded-lg my-3 bg-slate-50 flex items-center justify-center relative group/img">
          <img 
            className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${sinStock ? 'opacity-40 grayscale' : ''}`} 
            src={listaImagenes[imagenActiva]} // Mostramos la imagen según el estado
            alt={`${nombre} - vista ${imagenActiva + 1}`} 
          />
          
          {sinStock && (
            <span className="absolute bg-red-100 text-red-700 text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm border border-red-200">
              Sin Stock
            </span>
          )}

          {/* FLECHITAS*/}
          {listaImagenes.length > 1 && (
            <>
              <button 
                onClick={anteriorImagen}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-1.5 rounded-full shadow-md opacity-0 group-hover/img:opacity-100 transition-opacity"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button 
                onClick={siguienteImagen}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-1.5 rounded-full shadow-md opacity-0 group-hover/img:opacity-100 transition-opacity"
              >
                {/* Ícono de flecha derecha */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Puntitos indicadores abajo (como en ML) */}
              <div className="absolute bottom-2 flex gap-1">
                {listaImagenes.map((_, index) => (
                  <div 
                    key={index} 
                    className={`h-1.5 rounded-full transition-all ${index === imagenActiva ? 'w-3 bg-teal-500' : 'w-1.5 bg-slate-300'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Nombre y Precio */}
        <h3 className="text-sm font-bold text-slate-700 line-clamp-2 min-h-[40px] group-hover:text-teal-700 transition-colors">
          {nombre}
        </h3>
        <p className="text-lg font-black text-green-600 mt-2">
          ${precio.toLocaleString('es-AR')}
        </p>
      </div>

      {/* Botones de Acción */}
      <div className="mt-4 space-y-2">
        <Link 
          to={`/producto/${id}`} 
          className="block text-center w-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 text-xs font-medium py-2 rounded-lg transition-colors border border-slate-200"
        >
          Ver Detalle
        </Link>

        <button
          onClick={() => onAgregar(producto)}
          disabled={sinStock}
          className={`w-full text-xs font-bold py-2 rounded-lg transition-all ${
            sinStock 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' 
              : 'bg-teal-500 hover:bg-teal-600 text-white shadow-sm active:scale-[0.98]'
          }`}
        >
          {sinStock ? 'No disponible' : ' 🛒 Agregar al carrito '}
        </button>
      </div>
    </div>
  );
}