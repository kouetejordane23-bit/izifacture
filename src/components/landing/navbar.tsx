"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'

export function LandingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="bg-slate-950 text-slate-200 text-xs sm:text-sm py-2.5 px-4 relative z-50 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/20 text-brand-500 border border-brand-500/30">
              Nouveau standard
            </span>
            <span className="text-slate-300">
              Conforme aux normes fiscales <strong>OHADA & UEMOA</strong> (TVA 18% & mentions obligatoires)
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-6 text-xs text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer">Sénégal 🇸🇳</span>
            <span className="hover:text-white transition-colors cursor-pointer">Côte d'Ivoire 🇨🇮</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cameroun 🇨🇲</span>
          </div>
        </div>
      </aside>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-500 flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">izi<span className="text-brand-500">Facture</span></span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-9 text-sm font-medium text-slate-600">
            <Link href="#fonctionnalites" className="hover:text-brand-500 transition-colors">Fonctionnalités</Link>
            <Link href="#comment-ca-marche" className="hover:text-brand-500 transition-colors">Comment ça marche</Link>
            <Link href="#tarifs" className="hover:text-brand-500 transition-colors">Tarifs</Link>
            <Link href="#temoignages" className="hover:text-brand-500 transition-colors">Témoignages</Link>
          </nav>

          {/* Desktop CTA Actions */}
          <div className="hidden md:flex items-center space-x-5">
            <Link href="/login" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
              Connexion
            </Link>
            <Link href="#tarifs" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-full shadow-cta transition-all duration-300 hover:scale-105 active:scale-95 group">
              Essai gratuit
              <ArrowRight className="w-4 h-4 ml-1.5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-brand-500 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col p-4 space-y-4 text-sm font-medium text-slate-700">
              <Link href="#fonctionnalites" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-slate-50 rounded-lg">Fonctionnalités</Link>
              <Link href="#comment-ca-marche" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-slate-50 rounded-lg">Comment ça marche</Link>
              <Link href="#tarifs" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-slate-50 rounded-lg">Tarifs</Link>
              <Link href="#temoignages" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-slate-50 rounded-lg">Témoignages</Link>
              
              <div className="border-t border-slate-100 pt-4 flex flex-col space-y-3 px-4">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-2.5 text-center text-slate-700 font-semibold border border-slate-200 rounded-lg hover:bg-slate-50">
                  Connexion
                </Link>
                <Link href="#tarifs" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-2.5 text-center text-white bg-brand-500 font-semibold rounded-lg shadow-cta">
                  Essai gratuit
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
