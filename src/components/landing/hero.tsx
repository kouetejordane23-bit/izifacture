import Link from 'next/link'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'

export function LandingHero() {
  return (
    <section className="relative pt-16 pb-24 hero-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-semibold mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
          Facturation nouvelle génération en Afrique
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-tight max-w-4xl mx-auto leading-[1.12] animate-in fade-in zoom-in-95 duration-500 delay-150 fill-mode-both">
          Fini la galère des factures sur{' '}
          <span className="relative inline-block text-brand-500">
            Word et Excel.
            <svg className="absolute -bottom-2 left-0 w-full text-brand-200 -z-10" fill="none" height="12" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
          iziFacture simplifie votre gestion financière : créez des factures conformes aux normes locales en <strong>FCFA</strong>, calculez la <strong>TVA 18%</strong> en 1 clic et suivez vos paiements sans stress.
        </p>

        {/* CTA Buttons Group */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-both">
          <Link href="/login" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-xl shadow-cta transition-all duration-300 hover:scale-105 active:scale-95">
            Commencer gratuitement
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="group inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 active:scale-95">
            <Play className="mr-2 w-4 h-4 text-brand-500 fill-brand-500 group-hover:scale-110 transition-transform" />
            Voir la démo rapide
          </button>
        </div>

        {/* Social Proof / Customer count */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-600 font-medium animate-in fade-in duration-500 delay-700 fill-mode-both">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white z-30">AD</div>
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white z-20">KK</div>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white z-10">PE</div>
          </div>
          <span>Déjà adopté par <strong>+850 PME</strong> à Dakar, Abidjan & Douala</span>
        </div>

        {/* Hero SaaS Mockup */}
        <div className="mt-16 max-w-5xl mx-auto bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-card border border-slate-100/80 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-1000 fill-mode-both">
          
          {/* Tab selector pills */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-full text-xs font-semibold text-slate-600 overflow-x-auto max-w-full">
              <button className="px-4 sm:px-5 py-2 rounded-full bg-white text-slate-900 shadow-sm whitespace-nowrap">Facturation</button>
              <button className="px-4 sm:px-5 py-2 rounded-full hover:text-slate-900 whitespace-nowrap transition-colors">Devis</button>
              <button className="px-4 sm:px-5 py-2 rounded-full hover:text-slate-900 whitespace-nowrap transition-colors">Clients</button>
              <button className="px-4 sm:px-5 py-2 rounded-full hover:text-slate-900 whitespace-nowrap transition-colors">Paiements</button>
            </div>
          </div>

          {/* Dashboard Internal Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-left">
            
            {/* Invoice Card Preview (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl p-6 border border-slate-200/70 group hover:border-brand-200 transition-colors">
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Facture #FC-2024-089</h3>
                    <p className="text-xs text-slate-500">Émise pour Dakar Tech Studio</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                  ● Payée
                </span>
              </div>

              {/* Line Items Table */}
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between text-slate-500 text-xs uppercase font-semibold">
                  <span>Description</span>
                  <span>Montant</span>
                </div>
                <div className="flex justify-between font-medium text-slate-800">
                  <span>Développement Web & Hébergement</span>
                  <span>300 000 FCFA</span>
                </div>
                <div className="flex justify-between font-medium text-slate-800">
                  <span>Identité Visuelle & Stratégie</span>
                  <span>150 000 FCFA</span>
                </div>
              </div>

              {/* Financial Calculation Breakdown */}
              <div className="mt-5 pt-4 border-t border-slate-200 space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Sous-total (HT)</span>
                  <span className="font-semibold">450 000 FCFA</span>
                </div>
                <div className="flex justify-between items-center text-brand-600 font-semibold bg-brand-50/80 px-3 py-1.5 rounded-lg group-hover:bg-brand-100/60 transition-colors">
                  <span className="flex items-center gap-1.5">
                    TVA (18% calculée auto) 
                    <span className="text-[10px] uppercase tracking-wider bg-brand-200/70 text-brand-800 px-1.5 py-0.5 rounded font-bold">UEMOA</span>
                  </span>
                  <span>+ 81 000 FCFA</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 text-slate-950 font-extrabold text-lg">
                  <span>Total Net TTC</span>
                  <span className="text-2xl font-black text-slate-950">531 000 FCFA</span>
                </div>
              </div>

              {/* Payment confirmation metadata */}
              <div className="mt-5 pt-3 border-t border-dashed border-slate-300 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Reçu via <strong>Orange Money & Wave</strong>
                </span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">✓ Clôturé</span>
              </div>
            </div>

            {/* Business Context / Team Image Block (5 Cols) */}
            <div className="lg:col-span-5 h-full flex flex-col justify-between space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-inner bg-slate-900 min-h-[260px] flex items-end p-6 group cursor-pointer">
                <img 
                  alt="Entrepreneurs concluant un partenariat commercial" 
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                <div className="relative z-10 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="inline-flex items-center gap-1 text-xs text-amber-400 font-bold mb-1">
                    ★★★★★
                  </div>
                  <p className="text-sm font-medium leading-snug">
                    "Nos devis sont signés en 1 heure et payés sans retard."
                  </p>
                  <p className="text-xs text-slate-300 mt-1">Dakar Tech Studio • Sénégal</p>
                </div>
              </div>

              {/* Real-time indicator mini-badge */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-3 hover:bg-emerald-100/50 transition-colors cursor-pointer">
                <div className="p-2 bg-emerald-500 text-white rounded-lg">
                  <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-950">Relance automatique WhatsApp</p>
                  <p className="text-[11px] text-emerald-700">Envoi programmé à J-2 de l'échéance</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
