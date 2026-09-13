-- Enable RLS
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoice_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_settings ENABLE ROW LEVEL SECURITY;

-- Create Permissive Policies
CREATE POLICY "Enable all for anon on customers" ON public.customers FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all for anon on invoices" ON public.invoices FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all for anon on invoice_items" ON public.invoice_items FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all for anon on services" ON public.services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all for anon on company_settings" ON public.company_settings FOR ALL USING (true) WITH CHECK (true);
