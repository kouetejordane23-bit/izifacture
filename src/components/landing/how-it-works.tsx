export function LandingHowItWorks() {
  return (
    <section className="py-24 bg-white border-y border-slate-100" id="comment-ca-marche">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500">Simplicité Absolue</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Prêt à facturer en 3 minutes chrono
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Aucune installation compliquée, tout fonctionne directement sur votre ordinateur ou smartphone.
          </p>
        </div>

        {/* 3 Steps Connected Layout */}
        <div className="mt-20 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-slate-200 -z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-brand-500 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-brand-500/30 ring-8 ring-white group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
                1
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Inscris-toi</h3>
              <p className="mt-3 text-sm text-slate-600 max-w-xs leading-relaxed">
                Crée ton compte en 30 secondes avec ton numéro de téléphone ou ton adresse email. Pas besoin de carte bancaire.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-brand-500 text-brand-500 font-extrabold text-xl flex items-center justify-center shadow-md ring-8 ring-white group-hover:scale-110 group-hover:-translate-y-2 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                2
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Crée ta première facture</h3>
              <p className="mt-3 text-sm text-slate-600 max-w-xs leading-relaxed">
                Sélectionne ton client, ajoute les articles ou services et la TVA 18% ainsi que les montants FCFA se calculent automatiquement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 ring-8 ring-white group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
                3
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Envoie et encaisse</h3>
              <p className="mt-3 text-sm text-slate-600 max-w-xs leading-relaxed">
                Partage instantanément le lien ou le PDF via WhatsApp ou Email et reçois tes notifications dès que le client paie.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
