import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "npm:zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RECIPIENT_EMAIL = "devbajaj2004@gmail.com";
const WEB3FORMS_KEY_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

const jsonResponse = (body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const createMailtoUrl = ({ name, email, message }: z.infer<typeof ContactSchema>) => {
  const params = new URLSearchParams({
    subject: `Portfolio Contact: ${name}`,
    body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  return `mailto:${RECIPIENT_EMAIL}?${params.toString()}`;
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const parsed = ContactSchema.safeParse(await req.json());

    if (!parsed.success) {
      return jsonResponse({
        ok: false,
        error: "INVALID_INPUT",
        message: "Please fill in all fields correctly.",
      });
    }

    const payload = parsed.data;
    const accessKey = Deno.env.get("WEB3FORMS_KEY")?.trim() ?? "";
    const mailtoUrl = createMailtoUrl(payload);

    if (!WEB3FORMS_KEY_REGEX.test(accessKey)) {
      return jsonResponse({
        ok: false,
        error: "EMAIL_NOT_CONFIGURED",
        message: "Direct email sending is not configured yet.",
        fallback: true,
        mailtoUrl,
      });
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name: payload.name,
        email: payload.email,
        message: payload.message,
        to: RECIPIENT_EMAIL,
        subject: `Portfolio Contact: ${payload.name}`,
        from_name: "Portfolio Website",
      }),
    });

    const rawResult = await response.text();
    const result = rawResult ? JSON.parse(rawResult) : null;

    if (!response.ok || !result?.success) {
      console.error("Web3Forms error:", result ?? rawResult);
      return jsonResponse({
        ok: false,
        error: "SERVICE_UNAVAILABLE",
        message: "Message could not be sent automatically right now.",
        fallback: true,
        mailtoUrl,
      });
    }

    return jsonResponse({
      ok: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("send-contact error:", error);
    return jsonResponse({
      ok: false,
      error: "UNEXPECTED_ERROR",
      message: "Something went wrong while sending your message.",
      fallback: true,
    });
  }
});
