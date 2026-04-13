import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RECIPIENT_EMAIL = "devbajaj2004@gmail.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Use Lovable AI Gateway to format and send via a simple notification approach
    // Since we don't have a dedicated email service, we'll use Supabase's built-in
    // We'll store messages and notify via the AI gateway as a workaround
    
    // For now, let's use the Resend-compatible approach or a simple fetch to a mail API
    // The simplest reliable approach: use a mailto link on the frontend + store in DB
    // But since user wants actual email delivery, let's use the Web3Forms free API

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: Deno.env.get("WEB3FORMS_KEY"),
        name,
        email,
        message,
        to: RECIPIENT_EMAIL,
        subject: `Portfolio Contact: ${name}`,
        from_name: "Portfolio Website",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error("Web3Forms error:", result);
      return new Response(
        JSON.stringify({ error: "Failed to send message" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("send-contact error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
