import { Book, MessageCircle, Mail } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Aide et Support</h2>
        <p className="text-gray-500 text-sm">
          Trouvez des réponses à vos questions ou contactez notre équipe.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors border border-gray-100">
            <Book className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Base de connaissances</h3>
          <p className="text-sm text-gray-500">Guides et tutoriels pour utiliser Izi Facture au quotidien.</p>
        </div>
        
        <div className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors border border-gray-100">
            <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Chat en direct</h3>
          <p className="text-sm text-gray-500">Discutez en temps réel avec notre équipe de support technique.</p>
        </div>

        <div className="border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors border border-gray-100">
            <Mail className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Nous contacter</h3>
          <p className="text-sm text-gray-500">Envoyez-nous un e-mail détaillé à support@izifacture.com.</p>
        </div>
      </div>
    </div>
  )
}
