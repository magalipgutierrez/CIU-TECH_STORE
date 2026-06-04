export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 text-xs py-6 text-center">
      <div className="max-w-7xl mx-auto px-4 space-y-2">
        <p>© {new Date().getFullYear()} TECH_STORE. Trabajo Práctico - UNAHUR.</p>
        <p className="text-slate-600">Construcción de Interfaces de Usuario • Grupo de Desarrollo</p>
      </div>
    </footer>
  );
}