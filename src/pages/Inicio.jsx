import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Banner Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-50 via-slate-50 to-white border border-slate-200 px-6 py-16 text-center md:py-24 md:px-12 shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.08),transparent_50%)]" />
        <div className="relative max-w-2xl mx-auto space-y-6">
          <span className="text-xs font-bold text-teal-700 tracking-widest uppercase bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200/50">
            Especialistas en Hardware Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-none">
            Potenciá tu Setup al <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">Máximo Nivel</span>
          </h1>
          <p className="text-base text-slate-500 font-medium max-w-md mx-auto">
            Explorá nuestro catálogo con los componentes más potentes del mercado. Garantía oficial y envío simulado inmediato.
          </p>
          <div className="pt-4">
            <Link 
              to="/productos" 
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-sm active:scale-[0.98]"
            >
              Ver Catálogo Completo 🚀
            </Link>
          </div>
        </div>
      </div>

      {/* Características Destacadas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
          <div className="text-2xl">🛡️</div>
          <h3 className="text-sm font-bold text-slate-800">Componentes 100% Originales</h3>
          <p className="text-xs text-slate-500">Trabajamos directo con las marcas líderes de la industria tecnológica.</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
          <div className="text-2xl">⚡</div>
          <h3 className="text-sm font-bold text-slate-800">Rendimiento Extremo</h3>
          <p className="text-xs text-slate-500">Hardware testeado y seleccionado minuciosamente por expertos.</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
          <div className="text-2xl">👨‍💻</div>
          <h3 className="text-sm font-bold text-slate-800">Soporte Dedicado</h3>
          <p className="text-xs text-slate-500">Asesoramiento técnico personalizado para armar la computadora de tus sueños.</p>
        </div>
      </div>
    </div>
  );
}