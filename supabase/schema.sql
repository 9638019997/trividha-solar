create extension if not exists "pgcrypto";

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  phone text,
  role text not null default 'customer' check (role in ('customer','partner','agent','admin')),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references profiles(id) on delete cascade,
  company_name text,
  address text,
  city text,
  state text default 'Gujarat',
  monthly_bill numeric(12,2) default 0,
  roof_area_sqm numeric(8,2) default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists partners (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references profiles(id) on delete cascade,
  partner_name text not null,
  channel_type text default 'dealer',
  region text,
  commission_rate numeric(5,2) default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists agents (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null unique references profiles(id) on delete cascade,
  agent_code text unique,
  region text,
  target_value numeric(12,2) default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id) on delete set null,
  customer_name text not null,
  phone text not null,
  email text,
  source text,
  status text default 'new',
  property_type text default 'residential',
  monthly_bill numeric(12,2) default 0,
  city text default 'Gujarat',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete set null,
  customer_id uuid references customers(id) on delete set null,
  partner_id uuid references partners(id) on delete set null,
  project_name text not null,
  project_type text default 'rooftop',
  system_size_kw numeric(8,2) default 0,
  expected_generation_kwh numeric(12,2) default 0,
  status text default 'in_progress',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists quotations (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  quote_number text not null unique,
  total_amount numeric(12,2) default 0,
  subsidy_amount numeric(12,2) default 0,
  net_amount numeric(12,2) default 0,
  status text default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  doc_type text not null,
  file_name text not null,
  file_url text not null,
  uploaded_by uuid references profiles(id) on delete set null,
  verification_status text default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists service_requests (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id) on delete cascade,
  project_id uuid references projects(id) on delete set null,
  request_type text not null,
  priority text default 'normal',
  status text default 'open',
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
before update on profiles
for each row execute function update_updated_at();

create trigger customers_updated_at
before update on customers
for each row execute function set_updated_at();

create trigger partners_updated_at
before update on partners
for each row execute function set_updated_at();

create trigger agents_updated_at
before update on agents
for each row execute function set_updated_at();

create trigger leads_updated_at
before update on leads
for each row execute function set_updated_at();

create trigger projects_updated_at
before update on projects
for each row execute function set_updated_at();

create trigger quotations_updated_at
before update on quotations
for each row execute function set_updated_at();

create trigger service_requests_updated_at
before update on service_requests
for each row execute function set_updated_at();

alter table profiles enable row level security;
alter table customers enable row level security;
alter table partners enable row level security;
alter table agents enable row level security;
alter table leads enable row level security;
alter table projects enable row level security;
alter table quotations enable row level security;
alter table documents enable row level security;
alter table service_requests enable row level security;

create policy "profiles_select_own" on profiles
for select using (auth.uid() = id);

create policy "profiles_update_own" on profiles
for update using (auth.uid() = id) with check (auth.uid() = id);

create policy "customers_select_own" on customers
for select using (
  auth.uid() = profile_id or exists (
    select 1 from profiles where profiles.id = auth.uid() and profiles.role = 'admin'
  )
);

create policy "customers_manage_own" on customers
for all using (
  auth.uid() = profile_id or exists (
    select 1 from profiles where profiles.id = auth.uid() and profiles.role = 'admin'
  )
)
with check (
  auth.uid() = profile_id or exists (
    select 1 from profiles where profiles.id = auth.uid() and profiles.role = 'admin'
  )
);

create policy "partners_select_access" on partners
for select using (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','partner'))
);

create policy "agents_select_access" on agents
for select using (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','agent'))
);

create policy "leads_manage_access" on leads
for all using (
  auth.uid() = owner_id or exists (
    select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','agent','partner')
  )
)
with check (
  auth.uid() = owner_id or exists (
    select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','agent','partner')
  )
);

create policy "projects_manage_access" on projects
for all using (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','partner','agent'))
)
with check (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','partner','agent'))
);

create policy "quotations_manage_access" on quotations
for all using (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','partner','agent'))
)
with check (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','partner','agent'))
);

create policy "documents_manage_access" on documents
for all using (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','partner','agent','customer'))
)
with check (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','partner','agent','customer'))
);

create policy "service_requests_manage_access" on service_requests
for all using (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','customer','partner','agent'))
)
with check (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role in ('admin','customer','partner','agent'))
);
