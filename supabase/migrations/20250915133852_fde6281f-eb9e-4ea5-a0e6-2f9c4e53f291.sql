-- Create counters table
create table if not exists public.counters (
  id bigserial primary key,
  type text not null unique,
  count bigint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS
alter table public.counters enable row level security;

-- Allow public reads
create policy if not exists "Counters are readable by anyone"
  on public.counters
  for select
  using (true);

-- Timestamp update function
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql set search_path = public;

-- Trigger for updated_at
create or replace trigger update_counters_updated_at
before update on public.counters
for each row
execute function public.update_updated_at_column();

-- Increment function (security definer to bypass RLS for controlled updates)
create or replace function public.increment_counter(counter_type text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count bigint;
begin
  insert into public.counters (type, count)
  values (counter_type, 1)
  on conflict (type)
  do update set count = public.counters.count + 1, updated_at = now()
  returning count into new_count;

  return new_count;
end;
$$;

-- Grant execute to anon and authenticated
grant execute on function public.increment_counter(text) to anon, authenticated;

-- Seed default rows
insert into public.counters (type, count) values ('views', 0) on conflict do nothing;
insert into public.counters (type, count) values ('likes', 0) on conflict do nothing;