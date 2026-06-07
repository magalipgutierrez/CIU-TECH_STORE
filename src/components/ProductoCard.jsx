import { Link } from 'react-router-dom';

export default function ProductoCard({ producto, onAgregar }) {
  const { id, nombre, precio, imagen, stock, categoria } = producto;
  const sinStock = stock === 0;

  return (
    <div className="bg-slate-900 text-white rounded-xl shadow-xl overflow-hidden border border-slate-800 flex flex-col justify-between p-4 h-full hover:border-slate-700 transition-all group">
      <div>
        {/* Categoría */}
        <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase bg-cyan-950/50 border border-cyan-900/60 px-2 py-0.5 rounded-md">
          {categoria}
        </span>
        
        {/* Contenedor de Imagen */}
        <div className="w-full h-44 overflow-hidden rounded-lg my-3 bg-slate-950 flex items-center justify-center relative">
          <img 
            className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${sinStock ? 'opacity-40 grayscale' : ''}`} 
            src={imagen} 
            alt={nombre} 
          />
          {sinStock && (
            <span className="absolute bg-red-600/90 text-white text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
              Sin Stock
            </span>
          )}
        </div>

        {/* Nombre y Precio */}
        <h3 className="text-sm font-bold text-slate-200 line-clamp-2 min-h-[40px] group-hover:text-white transition-colors">
          {nombre}
        </h3>
        <p className="text-lg font-black text-emerald-400 mt-2">
          ${precio.toLocaleString('es-AR')}
        </p>
      </div>

      {/* Botones de Acción */}
      <div className="mt-4 space-y-2">
        <Link 
          to={`/producto/${id}`} 
          className="block text-center w-full bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium py-2 rounded-lg transition-colors border border-slate-800"
        >
          Ver Detalle
        </Link>

        <button
          onClick={() => onAgregar(producto)}
          disabled={sinStock}
          className={`w-full text-xs font-bold py-2 rounded-lg transition-all ${
            sinStock 
              ? 'bg-slate-950 text-slate-600 cursor-not-allowed border border-slate-900' 
              : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 active:scale-[0.98]'
          }`}
        >
          {sinStock ? 'No disponible' : '🛒 Agregar al carrito'}
        </button>
      </div>
    </div>
  );
}