export function LandingTestimonials() {
  return (
    <section className="py-24 bg-surface-50" id="temoignages">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500">Avis Clients</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Ils gèrent leur business avec sérénité
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Témoignages vérifiés d'entrepreneurs locaux.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex text-amber-400 gap-1 text-sm mb-4">
                ★★★★★
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "Avant, je perdais 4 heures chaque fin de mois sur Excel avec des formules qui sautaient. Avec iziFacture, mes clients reçoivent un devis impeccable en 2 minutes."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-sm">
                AD
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">Amadou Diallo</p>
                <p className="text-xs text-slate-500">Fondateur Agence Digitale • Dakar, Sénégal 🇸🇳</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex text-amber-400 gap-1 text-sm mb-4">
                ★★★★★
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "Le calcul automatique de la TVA à 18% et les montants en FCFA ont sauvé mes relations avec mes comptables. Je gagne une crédibilité folle auprès des multinationales."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                KK
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">Kouamé Koffi</p>
                <p className="text-xs text-slate-500">Consultant Logistique • Abidjan, Côte d'Ivoire 🇨🇮</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex text-amber-400 gap-1 text-sm mb-4">
                ★★★★★
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "Mes clients règlent 2 fois plus vite depuis que j'envoie des factures professionnelles avec les relances automatiques. Le meilleur investissement pour ma trésorerie."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-sm">
                PE
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">Patricia Ebanda</p>
                <p className="text-xs text-slate-500">CEO E-commerce & Retail • Douala, Cameroun 🇨🇲</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
