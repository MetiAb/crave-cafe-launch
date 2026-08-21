DROP POLICY IF EXISTS "Anyone can submit a reservation request" ON public.reservations;

CREATE POLICY "Anyone can submit a reservation request"
ON public.reservations FOR INSERT TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 2 AND 80
  AND length(trim(phone)) BETWEEN 7 AND 25
  AND guests BETWEEN 1 AND 40
  AND (request IS NULL OR length(request) <= 500)
  AND reservation_date >= (CURRENT_TIMESTAMP AT TIME ZONE 'Africa/Addis_Ababa')::date
  AND status = 'pending'
);