import { FileCheck2, Percent, BellRing, Users2 } from 'lucide-react'

export function LandingFeatures() {
  return (
    <section className="py-24 bg-surface-50" id="fonctionnalites">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500">Fonctionnalités Clés</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Tout pour encaisser rapidement et en toute conformité
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Conçu spécifiquement pour les réalités des entrepreneurs en Côte d'Ivoire, au Sénégal, au Cameroun et partout en zone CFA.
          </p>
        </div>

        {/* 4 Columns Modern Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-brand-500 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Factures professionnelles en 2 clics</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Modèles conformes et élégants avec votre logo. Exportez instantanément en format PDF pro prêt pour l'impression ou l'envoi client.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-brand-600 flex items-center gap-1 group-hover:text-brand-500 transition-colors">
                PDF instantané haute définition →
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">TVA 18% calculée automatiquement</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Zéro prise de tête sur les taxes : ventilation HT, TVA à 18% et montant total TTC calculés en temps réel sans aucune erreur.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                Conforme UEMOA & CEMAC ✓
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <BellRing className="w-6 h-6 group-hover:animate-bounce" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Suivi des paiements en temps réel</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Alertes automatiques quand une échéance approche. Envoyez des rappels polis et percutants directement via WhatsApp.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-blue-700 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                Relance WhatsApp en 1 clic 💬
              </span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Gestion de clients intégrée</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Gardez un répertoire soigné avec IFU, NINEA, RCCM et historique complet des factures et devis émis pour chaque partenaire.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-purple-700 flex items-center gap-1 group-hover:text-purple-600 transition-colors">
                Fiches entreprises complètes 🗂️
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
