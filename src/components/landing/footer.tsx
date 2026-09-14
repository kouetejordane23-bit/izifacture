import Link from 'next/link'
import { ShieldCheck, CalendarCheck, Hexagon } from 'lucide-react'

export function LandingFooter() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 animate-in fade-in zoom-in-95 duration-500">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-500">Passez à la vitesse supérieure</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Rejoins les entrepreneurs qui facturent comme des pros
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Commence gratuitement dès aujourd'hui sans carte bancaire requise. Configuration de votre compte en moins de 3 minutes.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/login" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-base font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-xl shadow-cta transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Commencer gratuitement
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              Données sécurisées
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarCheck className="w-4 h-4 text-brand-500" />
              Sans engagement
            </span>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
            
            {/* Brand Description */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">
                  <Hexagon className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xl font-extrabold text-slate-900 tracking-tight">izi<span className="text-brand-500">Facture</span></span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                La solution logicielle la plus intuitive pour facturer, relancer et gérer sa fiscalité en Afrique de l'Ouest et Centrale.
              </p>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Produit</h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li><Link href="#fonctionnalites" className="hover:text-brand-500 transition-colors">Fonctionnalités</Link></li>
                <li><Link href="#tarifs" className="hover:text-brand-500 transition-colors">Tarifs</Link></li>
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Modèles de factures</Link></li>
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Calculateur TVA 18%</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Entreprise</h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-brand-500 transition-colors">À propos</Link></li>
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Blog & Guides fiscaux</Link></li>
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Carrières</Link></li>
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Légal</h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Mentions légales</Link></li>
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Sécurité & Données</Link></li>
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Conditions d'utilisation</Link></li>
                <li><Link href="#" className="hover:text-brand-500 transition-colors">Conformité OHADA</Link></li>
              </ul>
            </div>

          </div>

          {/* Copyright & Local Pride */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} iziFacture Technologies SAS. Tous droits réservés.</p>
            <p className="font-medium text-slate-700">Fait avec fierté en Afrique 🌍</p>
          </div>
        </div>
      </footer>
    </>
  )
}
