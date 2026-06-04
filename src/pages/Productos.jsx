import { useState } from 'react';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';

export default function Productos({ onAgregar }) {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('Todas');

  // Filtrado reactivo combinado (Texto + Categoría)
  const productosFiltrados = productos.filter((prod) => {
    const coincideTexto = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCat = categoriaSel === 'Todas' || prod.categoria === categoriaSel;
    return coincideTexto && coincideCat;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Catálogo Tecnológico</h1>
        <p className="mt-2 text-sm text-slate-400">Explorá componentes de hardware de alta calidad y periféricos premium.</p>
      </div>

      {/* Controles de Búsqueda y Filtros */}
      <div className="flex flex-col md:flex-row gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
        <input
          type="text"
          placeholder="Buscar hardware por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-grow bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
        />
        
        <select
          value={categoriaSel}
          onChange={(e) => setCategoriaSel(e.target.value)}
          className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Componentes">Componentes</option>
          <option value="Notebooks">Notebooks</option>
          <option value="Perifericos">Periféricos</option>
        </select>
      </div>

      {/* Grilla Responsive de Componentes */}
      {productosFiltrados.length === 0 ? (
        <div className="text-center py-12 text-slate-500 bg-slate-900/50 rounded-xl border border-dashed border-slate-800">
          No encontramos ningún componente que coincida con tu búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map((item) => (
            <ProductoCard key={item.id} producto={item} onAgregar={onAgregar} />
          ))}
        </div>
      )}
    </div>
  );
}