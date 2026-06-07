export default function CarritoItem({ item, modificarCantidad, eliminarDelCarrito }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover rounded-lg bg-slate-50 flex-shrink-0" />
        <div>
          <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{item.nombre}</h4>
          <p className="text-xs text-slate-500">Precio Unitario: ${item.precio.toLocaleString('es-AR')}</p>
          <p className="text-xs text-green-600 font-semibold mt-0.5">Subtotal: ${(item.precio * item.cantidad).toLocaleString('es-AR')}</p>
        </div>
      </div>

      {/* Controles de Cantidad y Eliminación */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t border-slate-100 sm:border-0 pt-3 sm:pt-0">
        <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 p-1 rounded-lg">
          <button 
            onClick={() => modificarCantidad(item.id, 'decrementar')}
            className="w-7 h-7 text-sm font-bold text-slate-500 hover:text-slate-800 rounded hover:bg-slate-200 transition-colors"
          >
            -
          </button>
          <span className="text-sm font-bold text-slate-800 w-6 text-center">{item.cantidad}</span>
          <button 
            onClick={() => modificarCantidad(item.id, 'incrementar')}
            disabled={item.cantidad >= item.stock}
            className={`w-7 h-7 text-sm font-bold rounded transition-colors ${
              item.cantidad >= item.stock ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
            }`}
          >
            +
          </button>
        </div>

        <button 
          onClick={() => eliminarDelCarrito(item.id)}
          className="text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-1.5 rounded-lg transition-colors"
        >
          🗑️ Quitar
        </button>
      </div>
    </div>
  );
}