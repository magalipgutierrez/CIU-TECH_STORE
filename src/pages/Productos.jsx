import { useState } from 'react';
import ProductoCard from '../components/ProductoCard';
import { productos } from '../data/productos';

export default function Productos({ onAgregar }) {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('Todas');
  const [soloStock, setSoloStock] = useState(false);
  const [orden, setOrden] = useState('relevancia');

  const productosFiltrados = productos
    .filter((prod) => {
      const coincideTexto = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCat = categoriaSel === 'Todas' || prod.categoria === categoriaSel;
      const coincideStock = !soloStock || prod.stock > 0;
      return coincideTexto && coincideCat && coincideStock;
    })
    .sort((a, b) => {
      if (orden === 'menor') return a.precio - b.precio;
      if (orden === 'mayor') return b.precio - a.precio;
      return a.id - b.id;
    });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">Catálogo Tecnológico</h1>
        <p className="mt-2 text-sm text-slate-500">Explorá componentes de hardware de alta calidad y periféricos premium.</p>
      </div>

      {/* Controles de Búsqueda y Filtros */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <input
          type="text"
          placeholder="Buscar hardware por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-grow bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors"
        />
        
        <select
          value={categoriaSel}
          onChange={(e) => setCategoriaSel(e.target.value)}
          className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:border-teal-500 transition-colors"
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Auriculares">Auriculares</option>
          <option value="Componentes">Componentes</option>
          <option value="Notebooks">Notebooks</option>
          <option value="Perifericos">Periféricos</option>
        </select>

        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:border-teal-500 transition-colors"
        >
          <option value="relevancia">Orden: por defecto</option>
          <option value="menor">Precio: menor a mayor</option>
          <option value="mayor">Precio: mayor a menor</option>
        </select>

        <label className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 cursor-pointer">
          <input
            type="checkbox"
            checked={soloStock}
            onChange={(e) => setSoloStock(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
          />
          Solo con stock disponible
        </label>
      </div>

      {/* Grilla Responsive de Componentes */}
      {productosFiltrados.length === 0 ? (
        <div className="text-center py-12 text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-300">
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