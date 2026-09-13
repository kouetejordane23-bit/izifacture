"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getServices() {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching services:", error)
    return []
  }
  return data
}

export async function createService(formData: FormData) {
  const supabase = createClient()
  
  const newService = {
    name: formData.get("name") as string,
    category: formData.get("category") as string,
    type: formData.get("type") as string,
    price: Number(formData.get("price")),
  }

  const { error } = await supabase
    .from("services")
    .insert([newService])

  if (error) {
    console.error("Error creating service:", error)
    throw new Error("Impossible de créer le service")
  }

  revalidatePath("/services")
}

export async function deleteService(id: string) {
  const supabase = createClient()
  
  const { error } = await supabase
    .from("services")
    .delete()
    .eq("id", id)

  if (error) {
    console.error("Error deleting service:", error)
    throw new Error("Impossible de supprimer le service")
  }

  revalidatePath("/services")
}
