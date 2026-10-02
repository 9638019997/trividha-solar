-- Migration: Link profiles to auth.users and create on_auth_user_created trigger
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_id_fkey;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_id_fkey
  FOREIGN KEY (id)
  REFERENCES auth.users(id)
  ON DELETE CASCADE;

ALTER TABLE public.profiles
  ALTER COLUMN id DROP DEFAULT;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  assigned_role text;
  assigned_name text;
BEGIN
  assigned_role := COALESCE(new.raw_user_meta_data->>'role', 'customer');
  assigned_name := COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1));

  INSERT INTO public.profiles (id, email, full_name, role, created_at, updated_at)
  VALUES (
    new.id,
    new.email,
    assigned_name,
    assigned_role,
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE
  SET
    email = EXCLUDED.email,
    full_name = EXCLUDED.full_name,
    updated_at = NOW();

  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view and manage all profiles" ON public.profiles;

CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view and manage all profiles"
  ON public.profiles FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );
