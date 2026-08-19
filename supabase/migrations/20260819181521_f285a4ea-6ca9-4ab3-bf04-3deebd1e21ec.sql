CREATE TABLE public.reservations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  reservation_date DATE NOT NULL,
  reservation_time TIME NOT NULL,
  guests INTEGER NOT NULL,
  request TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.reservations TO anon;
GRANT SELECT, INSERT ON public.reservations TO authenticated;
GRANT ALL ON public.reservations TO service_role;

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a reservation request"
ON public.reservations FOR INSERT TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 2 AND 80
  AND length(trim(phone)) BETWEEN 7 AND 25
  AND guests BETWEEN 1 AND 40
  AND (request IS NULL OR length(request) <= 500)
  AND reservation_date >= (now() AT TIME ZONE 'UTC')::date - 1
  AND status = 'pending'
);