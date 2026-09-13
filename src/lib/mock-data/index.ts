export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";

export interface Invoice {
  id: string;
  customerId: string;
  customer?: Customer; // Computed
  issueDate: string;
  dueDate: string;
  paymentTerms: string;
  items: InvoiceItem[];
  discount: number;
  taxRate: number;
  notes: string;
  status: InvoiceStatus;
  subtotal?: number;
  taxAmount?: number;
  total?: number;
}

export const customersData: Customer[] = [
  {
    id: "CUST-001",
    name: "Studio Arsa Digital",
    email: "contact@arsa.digital",
    phone: "+33 6 12 34 56 78",
    address: "Jl. Jambu No 5, Semanding, Sumbersekar, Kec. Dau, Kabupaten Malang, Jawa Timur 65151",
  },
  {
    id: "CUST-002",
    name: "PT Nusantara Digital Solusi",
    email: "hello@nusantara.id",
    phone: "+62 812 3456 7890",
    address: "Jl. Jendral Sudirman No. 45 Jakarta Selatan, DKI Jakarta 12190 Indonesia",
  },
  {
    id: "CUST-003",
    name: "Acme Corp",
    email: "billing@acme.corp",
    phone: "+1 555 123 4567",
    address: "123 Innovation Drive, Tech City",
  },
  {
    id: "CUST-004",
    name: "Tech Solutions",
    email: "finance@techsolutions.com",
    phone: "+44 20 7123 4567",
    address: "45 Business Park, London",
  },
];

export const invoicesData: Invoice[] = [
  {
    id: "INV-0001",
    customerId: "CUST-001",
    issueDate: "2026-01-29",
    dueDate: "2026-02-12",
    paymentTerms: "Net 14",
    status: "paid",
    items: [
      { id: "1", description: "Dashboard UI Design", quantity: 10, price: 750000 },
      { id: "2", description: "Mobile App", quantity: 100, price: 50000 },
    ],
    discount: 500000,
    taxRate: 18,
    notes: "Thank you for your trust. Please complete the payment before the due date. For any questions, feel free to contact us.",
  },
  {
    id: "INV-0002",
    customerId: "CUST-002",
    issueDate: "2026-02-12",
    dueDate: "2026-02-26",
    paymentTerms: "Net 14",
    status: "sent",
    items: [
      { id: "3", description: "Website Development", quantity: 1, price: 5000000 },
    ],
    discount: 0,
    taxRate: 18,
    notes: "Please find the invoice attached.",
  },
  {
    id: "INV-0003",
    customerId: "CUST-003",
    issueDate: "2026-02-28",
    dueDate: "2026-03-30",
    paymentTerms: "Net 30",
    status: "draft",
    items: [
      { id: "4", description: "Consulting", quantity: 5, price: 50000 },
    ],
    discount: 0,
    taxRate: 18,
    notes: "",
  },
  {
    id: "INV-0004",
    customerId: "CUST-004",
    issueDate: "2025-12-15",
    dueDate: "2025-12-30",
    paymentTerms: "Net 15",
    status: "overdue",
    items: [
      { id: "5", description: "Server Maintenance", quantity: 3, price: 500000 },
    ],
    discount: 0,
    taxRate: 18,
    notes: "Overdue payment notice.",
  },
];

export const getInvoicesWithTotals = (): Invoice[] => {
  return invoicesData.map(invoice => {
    const customer = customersData.find(c => c.id === invoice.customerId);
    const subtotal = invoice.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const afterDiscount = Math.max(0, subtotal - invoice.discount);
    const taxAmount = afterDiscount * (invoice.taxRate / 100);
    const total = afterDiscount + taxAmount;
    
    return {
      ...invoice,
      customer,
      subtotal,
      taxAmount,
      total
    };
  });
};

export const statsData = [
  {
    title: "Chiffre d'affaires",
    value: 12500000,
    change: "+15% par rapport au mois dernier",
    icon: "Wallet",
  },
  {
    title: "En attente",
    value: 3500000,
    change: "5 factures en attente de paiement",
    icon: "Hourglass",
  },
  {
    title: "En retard",
    value: 750000,
    change: "2 factures en retard",
    icon: "AlertCircle",
  },
  {
    title: "Total Clients",
    value: 42,
    change: "+3 nouveaux ce mois",
    icon: "Users",
  },
];

export const getRecentInvoices = () => {
  return getInvoicesWithTotals().map(inv => ({
    id: inv.id,
    customer: inv.customer?.name || "Client inconnu",
    amount: inv.total || 0,
    date: inv.issueDate,
    status: inv.status,
  }));
};
