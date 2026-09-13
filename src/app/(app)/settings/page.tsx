export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Paramètres</h2>
        <p className="text-gray-500 text-sm">
          Gérez les paramètres de votre entreprise et vos préférences.
        </p>
      </div>
      
      <div className="grid gap-6">
        <div className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profil de l'entreprise</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom de l'entreprise</label>
              <input type="text" defaultValue="Studio Arsa Digital" className="w-full max-w-md px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email de contact</label>
              <input type="email" defaultValue="contact@arsa.digital" className="w-full max-w-md px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Devise par défaut</label>
              <select className="w-full max-w-md px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-shadow text-sm bg-white">
                <option>FCFA (Franc CFA)</option>
                <option>EUR (Euro)</option>
                <option>USD (Dollar US)</option>
              </select>
            </div>
            <div className="pt-2">
              <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Enregistrer les modifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
