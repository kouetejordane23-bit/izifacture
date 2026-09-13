import { getCustomers } from "@/lib/actions/customers"
import { NewInvoiceClient } from "./new-invoice-client"

export const dynamic = 'force-dynamic'

export default async function NewInvoicePage() {
  const customers = await getCustomers()

  return <NewInvoiceClient customers={customers} />
}
