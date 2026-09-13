"use client"

import { useState } from 'react'
import { login, signup } from './actions'
import { Hexagon } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 p-4">
      <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
              <Hexagon className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">izi facture</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden p-1 sm:p-2">
          {/* Tabs Header */}
          <div className="flex p-1 bg-gray-50/50 rounded-xl mb-4 sm:mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={cn(
                "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                activeTab === 'login' 
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200/50" 
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
              )}
            >
              Se connecter
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={cn(
                "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                activeTab === 'register' 
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200/50" 
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
              )}
            >
              S'inscrire
            </button>
          </div>

          <div className="px-4 pb-6 sm:px-6">
            <div className="mb-6">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 mb-1">
                {activeTab === 'login' ? 'Bon retour !' : 'Créer un compte'}
              </h1>
              <p className="text-gray-500 text-sm">
                {activeTab === 'login' 
                  ? 'Entrez vos identifiants pour accéder à votre espace.'
                  : 'Remplissez vos informations pour démarrer.'}
              </p>
            </div>

            {/* Formulaires séparés pour éviter les conflits de validation (required) */}
            {activeTab === 'login' ? (
              <form action={login} className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email-login">
                    Email
                  </label>
                  <input
                    id="email-login"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                    name="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password-login">
                      Mot de passe
                    </label>
                    <a href="#" className="text-xs text-gray-500 hover:text-gray-900">Mot de passe oublié ?</a>
                  </div>
                  <input
                    id="password-login"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button className="w-full px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm">
                    Se connecter
                  </button>
                </div>
              </form>
            ) : (
              <form action={signup} className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="first_name">
                    Prénom
                  </label>
                  <input
                    id="first_name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                    name="first_name"
                    type="text"
                    placeholder="Votre prénom"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email-register">
                    Email
                  </label>
                  <input
                    id="email-register"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                    name="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="password-register">
                    Mot de passe
                  </label>
                  <input
                    id="password-register"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button className="w-full px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm">
                    Créer mon compte
                  </button>
                </div>
              </form>
            )}

            {searchParams?.message && (
              <div className="mt-6 animate-in fade-in duration-300">
                <p className="p-3 bg-red-50 text-red-600 text-sm text-center rounded-lg border border-red-100">
                  {searchParams.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
