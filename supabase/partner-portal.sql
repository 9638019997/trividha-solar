create extension if not exists "pgcrypto";

create table if not exists partner_profiles (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references profiles(id) on delete cascade,
  partner_name text not null,
  business_type text not null default 'Proprietorship',
  firm_name text,
  gst_number text,
  pan text,
  cin_or_llpin text,
  address text,
  account_holder_name text,
  account_number text,
  ifsc_code text,
  bank_name text,
  kyc_status text not null default 'in_progress',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists partner_leads (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_profiles(id) on delete cascade,
  customer_name text not null,
  phone text not null,
  email text,
  city text,
  status text not null default 'new',
  source text,
  estimated_value numeric(12,2) default 0,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists partner_customers (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_profiles(id) on delete cascade,
  customer_name text not null,
  phone text not null,
  email text,
  project_name text,
  site_address text,
  project_status text not null default 'lead',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists partner_quotations (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_profiles(id) on delete cascade,
  customer_id uuid references partner_customers(id) on delete set null,
  quote_number text not null unique,
  title text not null,
  total_amount numeric(12,2) default 0,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists partner_projects (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_profiles(id) on delete cascade,
  customer_id uuid references partner_customers(id) on delete set null,
  project_name text not null,
  stage text not null default 'survey',
  timeline text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists partner_commissions (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_profiles(id) on delete cascade,
  project_id uuid references partner_projects(id) on delete set null,
  total_commission numeric(12,2) default 0,
  pending_commission numeric(12,2) default 0,
  paid_commission numeric(12,2) default 0,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists partner_documents (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_profiles(id) on delete cascade,
  document_type text not null,
  file_name text not null,
  file_url text not null,
  verification_status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists partner_notifications (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_profiles(id) on delete cascade,
  title text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function partner_update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger partner_profiles_updated_at
before update on partner_profiles
for each row execute function partner_update_updated_at();

create trigger partner_leads_updated_at
before update on partner_leads
for each row execute function partner_update_updated_at();

create trigger partner_customers_updated_at
before update on partner_customers
for each row execute function partner_update_updated_at();

create trigger partner_quotations_updated_at
before update on partner_quotations
for each row execute function partner_update_updated_at();

create trigger partner_projects_updated_at
before update on partner_projects
for each row execute function partner_update_updated_at();

create trigger partner_commissions_updated_at
before update on partner_commissions
for each row execute function partner_update_updated_at();

alter table partner_profiles enable row level security;
alter table partner_leads enable row level security;
alter table partner_customers enable row level security;
alter table partner_quotations enable row level security;
alter table partner_projects enable row level security;
alter table partner_commissions enable row level security;
alter table partner_documents enable row level security;
alter table partner_notifications enable row level security;

create policy "partner_profiles_select_own" on partner_profiles
for select using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('partner','admin')));

create policy "partner_profiles_manage_own" on partner_profiles
for all using (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('partner','admin')))
with check (exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('partner','admin')));

create policy "partner_leads_manage" on partner_leads
for all using (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_leads.partner_id))
with check (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_leads.partner_id));

create policy "partner_customers_manage" on partner_customers
for all using (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_customers.partner_id))
with check (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_customers.partner_id));

create policy "partner_quotations_manage" on partner_quotations
for all using (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_quotations.partner_id))
with check (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_quotations.partner_id));

create policy "partner_projects_manage" on partner_projects
for all using (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_projects.partner_id))
with check (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_projects.partner_id));

create policy "partner_commissions_manage" on partner_commissions
for all using (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_commissions.partner_id))
with check (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_commissions.partner_id));

create policy "partner_documents_manage" on partner_documents
for all using (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_documents.partner_id))
with check (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_documents.partner_id));

create policy "partner_notifications_manage" on partner_notifications
for all using (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_notifications.partner_id))
with check (exists (select 1 from partner_profiles where partner_profiles.profile_id = auth.uid() and partner_profiles.id = partner_notifications.partner_id));
