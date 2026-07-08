# CEOTECA Landing

Landing page en Next.js para captar founders por correo o WhatsApp.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS + componentes estilo shadcn/ui
- Framer Motion
- Supabase para guardar leads
- Preparado para Vercel

## Desarrollo

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_LEADS_TABLE=leads
```

## Tabla Supabase

Ejecuta este SQL en Supabase:

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  contact text not null,
  contact_type text not null check (contact_type in ('email', 'whatsapp')),
  source text not null default 'landing',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
```

La ruta `/api/leads` usa `SUPABASE_SERVICE_ROLE_KEY`, así que no expone permisos de escritura al navegador.
