import { Link } from 'react-router-dom';

export default function Navbar({ totalProductos }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 text-slate-800 px-4 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Identidad / Logo de la Tienda */}
        <Link to="/" className="text-xl font-black tracking-wider bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          ⚡ TECH_STORE
        </Link>

        {/* Enlaces de Navegación */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-teal-600 transition-colors">Inicio</Link>
          <Link to="/productos" className="hover:text-teal-600 transition-colors">Productos</Link>
          <Link to="/contacto" className="hover:text-teal-600 transition-colors">Contacto</Link>
          
          {/* Ícono de Carrito Dinámico */}
          <Link to="/carrito" className="relative group flex items-center bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg hover:border-teal-500 hover:bg-teal-50/50 transition-all">
            <span className="text-base mr-1">🛒</span>
            <span className="hidden sm:inline text-xs text-slate-600 group-hover:text-teal-700 transition-colors">Mi Carrito</span>
            {totalProductos > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white font-black text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                {totalProductos}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}