import { Link } from 'react-router-dom';

export default function Navbar({ totalProductos }) {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Identidad / Logo de la Tienda */}
        <Link to="/" className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
          ⚡ TECH_STORE
        </Link>

        {/* Enlaces de Navegación */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
          <Link to="/productos" className="hover:text-cyan-400 transition-colors">Productos</Link>
          <Link to="/contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link>
          
          {/* Ícono de Carrito Dinámico */}
          <Link to="/carrito" className="relative group flex items-center bg-slate-950 border border-slate-700 px-3 py-1.5 rounded-lg hover:border-cyan-500 transition-colors">
            <span className="text-base mr-1">🛒</span>
            <span className="hidden sm:inline text-xs text-slate-300 group-hover:text-cyan-400 transition-colors">Mi Carrito</span>
            {totalProductos > 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-slate-950 font-black text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalProductos}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}