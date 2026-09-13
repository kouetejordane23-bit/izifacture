"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Edit, Trash2, X, Loader2 } from "lucide-react"
import { createCustomer, deleteCustomer } from "@/lib/actions/customers"

type Customer = any // We will use any for now or import from Database types

export function CustomersClient({ initialCustomers }: { initialCustomers: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCustomer, setEditingCustomer] = useState<Partial<Customer>>({})
  const [isSaving, setIsSaving] = useState(false)

  const openModal = (customer?: Customer) => {
    setEditingCustomer(customer || { name: "", email: "", phone: "", address: "" })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingCustomer({})
  }

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      const formData = new FormData(e.currentTarget)
      if (editingCustomer.id) {
        // Update logic not yet implemented in Server Actions, keep simple for now
        alert("Modification non supportée dans cette démo")
      } else {
        await createCustomer(formData)
      }
      closeModal()
    } catch (error) {
      alert("Erreur lors de la sauvegarde")
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
      await deleteCustomer(id)
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Clients</h2>
          <p className="text-gray-500 text-sm">
            Gérez votre répertoire client et vos contacts.
          </p>
        </div>
        <button 
          onClick={() => openModal()}
          className="px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Nouveau client
        </button>
      </div>

      <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white overflow-hidden flex flex-col transition-all duration-300">
        <div className="p-0 w-full overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50/80">
              <TableRow className="hover:bg-transparent border-gray-200">
                <TableHead className="h-12 font-semibold text-gray-600 pl-6">Nom</TableHead>
                <TableHead className="h-12 font-semibold text-gray-600">Email</TableHead>
                <TableHead className="h-12 font-semibold text-gray-600">Téléphone</TableHead>
                <TableHead className="hidden md:table-cell h-12 font-semibold text-gray-600">Adresse</TableHead>
                <TableHead className="h-12 font-semibold text-gray-600 text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {initialCustomers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">Aucun client trouvé.</TableCell>
                </TableRow>
              ) : initialCustomers.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-gray-50/50 border-gray-100 transition-colors group">
                  <TableCell className="font-semibold text-gray-900 py-4 pl-6">{customer.name}</TableCell>
                  <TableCell className="font-medium text-gray-600 py-4">{customer.email}</TableCell>
                  <TableCell className="font-medium text-gray-600 py-4">{customer.phone}</TableCell>
                  <TableCell className="hidden md:table-cell font-medium text-gray-500 py-4 truncate max-w-xs">{customer.address}</TableCell>
                  <TableCell className="text-right pr-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openModal(customer)} className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" title="Modifier">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(customer.id)} className="p-1.5 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Supprimer">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Modal d'ajout/modification */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingCustomer.id ? "Modifier le client" : "Nouveau client"}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-900 transition-colors p-1 rounded-md hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSave}>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    defaultValue={editingCustomer.name || ""}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    defaultValue={editingCustomer.email || ""}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                  <input 
                    name="phone"
                    type="tel" 
                    defaultValue={editingCustomer.phone || ""}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Adresse complète</label>
                  <textarea 
                    name="address"
                    rows={3}
                    defaultValue={editingCustomer.address || ""}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-sm resize-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 p-6 bg-gray-50 border-t border-gray-100">
                <button type="button" onClick={closeModal} className="px-4 py-2 bg-white text-gray-700 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Annuler
                </button>
                <button type="submit" disabled={isSaving} className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                  {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
