import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase-admin";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d][\d\s().-]{7,}$/;

function detectContactType(value: string) {
  if (emailRegex.test(value)) return "email";
  if (phoneRegex.test(value)) return "whatsapp";
  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { contact?: string; source?: string };
    const contact = body.contact?.trim();

    if (!contact) {
      return NextResponse.json(
        { message: "Escribe tu correo o WhatsApp." },
        { status: 400 },
      );
    }

    const contactType = detectContactType(contact);

    if (!contactType) {
      return NextResponse.json(
        { message: "Usa un correo válido o un número de WhatsApp." },
        { status: 400 },
      );
    }

    const supabase = createSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json(
        {
          message:
            "Lead recibido en modo local. Configura Supabase para guardarlo en producción.",
        },
        { status: 202 },
      );
    }

    const table = process.env.SUPABASE_LEADS_TABLE || "leads";
    const { error } = await supabase.from(table).insert({
      contact,
      contact_type: contactType,
      source: body.source || "landing",
    });

    if (error) {
      return NextResponse.json(
        { message: "No pudimos guardar tu acceso. Intenta de nuevo." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Listo. Te avisaremos apenas abra CEOTECA Founders.",
    });
  } catch {
    return NextResponse.json(
      { message: "No pudimos procesar tu solicitud." },
      { status: 500 },
    );
  }
}
