import { Check } from 'lucide-react'

export function LandingPricing() {
  return (
    <section className="py-24 bg-white border-y border-slate-100" id="tarifs">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500">Tarification Transparente</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Des prix adaptés aux réalités locales
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Payable facilement par <strong>Orange Money, Wave, MTN MoMo</strong> ou Carte bancaire.
          </p>
        </div>

        {/* Pricing 3 Columns Desktop Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: Gratuit */}
          <div className="bg-surface-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900">Gratuit</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">Starter</span>
              </div>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-4xl font-black text-slate-950">0</span>
                <span className="text-sm font-semibold text-slate-500">FCFA / mois</span>
              </div>
              <p className="mt-3 text-xs text-slate-500">Idéal pour débuter et tester l'outil.</p>
              
              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={3} />
                  Jusqu'à 5 factures par mois
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={3} />
                  1 utilisateur
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={3} />
                  Export PDF basique
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={3} />
                  Support standard par email
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <button className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors">
                Choisir le plan gratuit
              </button>
            </div>
          </div>

          {/* Tier 2: Plan Pro (Featured) */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-brand-500 shadow-2xl flex flex-col justify-between scale-100 lg:scale-105 z-20 hover:scale-105 lg:hover:scale-[1.07] transition-transform duration-300">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-brand-600 to-brand-500 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow animate-pulse">
              Recommandé
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  Plan Pro
                  <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">Le plus populaire 🔥</span>
                </h3>
              </div>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-4xl font-black text-slate-950">5 000</span>
                <span className="text-sm font-semibold text-slate-500">FCFA / mois</span>
              </div>
              <p className="mt-3 text-xs text-slate-500">Idéal pour les indépendants, prestataires et TPE en croissance rapide.</p>
              
              <ul className="mt-8 space-y-4 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-500 flex-shrink-0" strokeWidth={3} />
                  <span><strong>Factures & Devis illimités</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-500 flex-shrink-0" strokeWidth={3} />
                  Relances automatiques via WhatsApp
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-500 flex-shrink-0" strokeWidth={3} />
                  Personnalisation complète (logo & couleurs)
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-500 flex-shrink-0" strokeWidth={3} />
                  Export comptable FEC & Excel
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-500 flex-shrink-0" strokeWidth={3} />
                  Calcul TVA 18% certifié
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <button className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 shadow-cta transition-all duration-200 hover:-translate-y-1">
                Essayer 14 jours gratuitement
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">Sans engagement • Annulable à tout moment</p>
            </div>
          </div>

          {/* Tier 3: Business */}
          <div className="bg-surface-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:border-brand-300 transition-colors">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900">Business</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">Équipes</span>
              </div>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-4xl font-black text-slate-950">15 000</span>
                <span className="text-sm font-semibold text-slate-500">FCFA / mois</span>
              </div>
              <p className="mt-3 text-xs text-slate-500">Pour les PME établies et équipes commerciales.</p>
              
              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={3} />
                  Jusqu'à 10 collaborateurs
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={3} />
                  Accès dédié Expert-Comptable
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={3} />
                  Gestion multi-devises (FCFA, EUR, USD)
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={3} />
                  Support VIP prioritaire WhatsApp 24/7
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <button className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors">
                Contacter l'équipe commerciale
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
