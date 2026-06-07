import { Link } from 'react-router-dom';

export default function ProductoCard({ producto, onAgregar }) {
  const { id, nombre, precio, imagen, stock, categoria } = producto;
  const sinStock = stock === 0;

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-md overflow-hidden border border-slate-200 flex flex-col justify-between p-4 h-full hover:border-slate-300 hover:shadow-lg transition-all group">
      <div>
        {/* Categoría */}
        <span className="text-[10px] font-bold text-teal-700 tracking-widest uppercase bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
          {categoria}
        </span>
        
        {/* Contenedor de Imagen */}
        <div className="w-full h-44 overflow-hidden rounded-lg my-3 bg-slate-50 flex items-center justify-center relative">
          <img 
            className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${sinStock ? 'opacity-40 grayscale' : ''}`} 
            src={imagen} 
            alt={nombre} 
          />
          {sinStock && (
            <span className="absolute bg-red-100 text-red-700 text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm border border-red-200">
              Sin Stock
            </span>
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
          {sinStock ? 'No disponible' : '🛒 Agregar al carrito'}
        </button>
      </div>
    </div>
  );
}