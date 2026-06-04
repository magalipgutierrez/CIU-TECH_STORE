import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Banner Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border border-slate-800 px-6 py-16 text-center md:py-24 md:px-12 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_50%)]" />
        <div className="relative max-w-2xl mx-auto space-y-6">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-900/50">
            Especialistas en Hardware Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
            Potenciá tu Setup al <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Máximo Nivel</span>
          </h1>
          <p className="text-base text-slate-400 font-medium max-w-md mx-auto">
            Explorá nuestro catálogo con los componentes más potentes del mercado. Garantía oficial y envío simulado inmediato.
          </p>
          <div className="pt-4">
            <Link 
              to="/productos" 
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              Ver Catálogo Completo 🚀
            </Link>
          </div>
        </div>
      </div>

      {/* Características Destacadas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/50 border border-slate-850 p-6 rounded-2xl space-y-2">
          <div className="text-2xl">🛡️</div>
          <h3 className="text-sm font-bold text-white">Componentes 100% Originales</h3>
          <p className="text-xs text-slate-400">Trabajamos directo con las marcas líderes de la industria tecnológica.</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-850 p-6 rounded-2xl space-y-2">
          <div className="text-2xl">⚡</div>
          <h3 className="text-sm font-bold text-white">Rendimiento Extremo</h3>
          <p className="text-xs text-slate-400">Hardware testeado y seleccionado minuciosamente por expertos.</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-850 p-6 rounded-2xl space-y-2">
          <div className="text-2xl">👨‍💻</div>
          <h3 className="text-sm font-bold text-white">Soporte Dedicado</h3>
          <p className="text-xs text-slate-400">Asesoramiento técnico personalizado para armar la computadora de tus sueños.</p>
        </div>
      </div>
    </div>
  );
}