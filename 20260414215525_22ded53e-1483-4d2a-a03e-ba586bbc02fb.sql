
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sheet_row_id TEXT UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  company_name TEXT,
  target_amount NUMERIC NOT NULL DEFAULT 0,
  current_amount NUMERIC NOT NULL DEFAULT 0,
  interest_rate NUMERIC NOT NULL DEFAULT 0,
  duration_months INTEGER NOT NULL DEFAULT 12,
  risk_level TEXT DEFAULT 'средний',
  status TEXT DEFAULT 'активный',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON public.projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Service role can manage projects"
  ON public.projects FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
