import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contacto({ carritoVacio, vaciarCarrito }) {
  const navigate = useNavigate();
  
  const [formulario, setFormulario] = useState({
    nombreApellido: '',
    email: '',
    telefono: '',
    localidad: '',
    metodoEntrega: 'Retiro en Sucursal',
    aclaracion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carritoVacio) {
      alert('Error: No podés simular una compra si tu carrito está vacío.');
      return;
    }
    if (!formulario.nombreApellido.trim() || !formulario.email.trim() || !formulario.telefono.trim() || !formulario.localidad.trim()) {
      alert('Por favor, completá todos los campos obligatorios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formulario.email)) {
      alert('Por favor, ingresá un formato de correo electrónico válido (ejemplo@dominio.com).');
      return;
    }

    alert(`¡Compra Simulada con Éxito! 🎉\n\nGracias ${formulario.nombreApellido}, registramos tu pedido bajo la modalidad de: ${formulario.metodoEntrega}.`);
    vaciarCarrito();
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 py-4">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Finalizar Compra / Contacto</h1>
        <p className="text-sm text-slate-500 mt-1">Completá tus datos de entrega para simular la orden de compra.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl space-y-4">
        {/* Nombre y Apellido */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Nombre y Apellido *</label>
          <input 
            type="text" name="nombreApellido" value={formulario.nombreApellido} onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 text-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none transition-colors"
            placeholder="Juan Pérez" required
          />
        </div>

        {/* mail */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Corporativo / Personal *</label>
          <input 
            type="email" name="email" value={formulario.email} onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 text-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none transition-colors"
            placeholder="juan@ejemplo.com" required
          />
        </div>

        {/* Teléfono y Localidad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Teléfono de Contacto *</label>
            <input 
              type="tel" name="telefono" value={formulario.telefono} onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 text-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none transition-colors"
              placeholder="11 2345-6789" required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Dirección / Localidad *</label>
            <input 
              type="text" name="localidad" value={formulario.localidad} onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 text-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none transition-colors"
              placeholder="Hurlingham, Buenos Aires" required
            />
          </div>
        </div>

        {/* Método de Entrega */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Método de Distribución</label>
          <select 
            name="metodoEntrega" value={formulario.metodoEntrega} onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 text-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none transition-colors"
          >
            <option value="Retiro en Sucursal">Retiro en Sucursal Tecnológica (Sin Costo)</option>
            <option value="Envio Express">Envío Express a Domicilio (Simulado)</option>
          </select>
        </div>

        {/* Mensaje Opcional */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Aclaración / Notas Adicionales (Opcional)</label>
          <textarea 
            name="aclaracion" value={formulario.aclaracion} onChange={handleChange} rows="3"
            className="w-full bg-slate-50 border border-slate-200 focus:border-teal-500 text-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none transition-colors resize-none"
            placeholder="Ej: Piso, departamento o indicaciones para el repartidor..."
          />
        </div>

        {/* Botón de Envió */}
        <button
          type="submit"
          disabled={carritoVacio}
          className={`w-full font-black text-sm py-3.5 rounded-xl transition-all mt-2 ${
            carritoVacio 
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed' 
              : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm active:scale-[0.98]'
          }`}
        >
          {carritoVacio ? 'Carrito vacío - No se puede comprar' : 'Confirmar Orden de Compra 🚀'}
        </button>
      </form>
    </div>
  );
}