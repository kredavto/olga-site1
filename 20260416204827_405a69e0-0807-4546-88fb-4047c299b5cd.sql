-- 1. Fix profiles role self-escalation
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

CREATE POLICY "Users can update own profile (no role change)"
ON public.profiles
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (
  auth.uid() = user_id
  AND role = (SELECT role FROM public.profiles WHERE user_id = auth.uid())
);

-- 2. Remove user SELECT on verification_codes (codes should not be readable)
DROP POLICY IF EXISTS "Users can read their own codes" ON public.verification_codes;

-- 3. Hash existing plaintext codes so storage is no longer plaintext
CREATE EXTENSION IF NOT EXISTS pgcrypto;

UPDATE public.verification_codes
SET code = encode(digest(code, 'sha256'), 'hex')
WHERE length(code) <> 64;