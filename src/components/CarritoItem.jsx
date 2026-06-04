export default function CarritoItem({ item, modificarCantidad, eliminarDelCarrito }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover rounded-lg bg-slate-950 flex-shrink-0" />
        <div>
          <h4 className="text-sm font-bold text-white line-clamp-1">{item.nombre}</h4>
          <p className="text-xs text-slate-400">Precio Unitario: ${item.precio.toLocaleString('es-AR')}</p>
          <p className="text-xs text-cyan-400 font-semibold mt-0.5">Subtotal: ${(item.precio * item.cantidad).toLocaleString('es-AR')}</p>
        </div>
      </div>

      {/* Controles de Cantidad y Eliminación */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t border-slate-800 sm:border-0 pt-3 sm:pt-0">
        <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 p-1 rounded-lg">
          <button 
            onClick={() => modificarCantidad(item.id, 'decrementar')}
            className="w-7 h-7 text-sm font-bold text-slate-400 hover:text-white rounded hover:bg-slate-900 transition-colors"
          >
            -
          </button>
          <span className="text-sm font-bold text-white w-6 text-center">{item.cantidad}</span>
          <button 
            onClick={() => modificarCantidad(item.id, 'incrementar')}
            disabled={item.cantidad >= item.stock}
            className={`w-7 h-7 text-sm font-bold rounded transition-colors ${
              item.cantidad >= item.stock ? 'text-slate-700 cursor-not-allowed' : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            +
          </button>
        </div>

        <button 
          onClick={() => eliminarDelCarrito(item.id)}
          className="text-xs font-semibold text-red-400 hover:text-red-300 bg-red-950/30 hover:bg-red-950/60 border border-red-900/40 px-2.5 py-1.5 rounded-lg transition-colors"
        >
          🗑️ Quitar
        </button>
      </div>
    </div>
  );
}