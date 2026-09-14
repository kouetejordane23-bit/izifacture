import { FileX, Calculator, ClockAlert } from 'lucide-react'

export function LandingProblems() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500">Problèmes Fréquents</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            La facturation traditionnelle freine votre croissance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Gérer son entreprise ne devrait pas être une source d'anxiété administrative permanente.
          </p>
        </div>

        {/* 3 Columns Problems Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Problem Card 1 */}
          <div className="p-8 rounded-2xl bg-surface-50 border border-slate-200/80 hover:border-brand-500/40 transition-colors group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <FileX className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Factures non professionnelles</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Les fichiers Word bricolés et décalés décrédibilisent votre entreprise auprès des grands comptes et investisseurs institutionnels.
            </p>
          </div>

          {/* Problem Card 2 */}
          <div className="p-8 rounded-2xl bg-surface-50 border border-slate-200/80 hover:border-brand-500/40 transition-colors group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Calculs manuels de TVA 18%</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Erreurs de calcul manuelles coûteuses, pénalités et stress garanti lors de la déclaration mensuelle des impôts aux centres fiscaux.
            </p>
          </div>

          {/* Problem Card 3 */}
          <div className="p-8 rounded-2xl bg-surface-50 border border-slate-200/80 hover:border-brand-500/40 transition-colors group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <ClockAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Suivi des paiements impossible</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Retards de règlement interminables, impayés oubliés et gestion de trésorerie totalement à l'aveugle sans visibilité claire.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
