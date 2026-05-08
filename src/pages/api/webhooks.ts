// src/pages/api/webhooks.ts
import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-03-25.dahlia",
});

const endpointSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

export const POST: APIRoute = async ({ request }) => {
  // Webhook-validaatio vaatii raa'an request bodyn (stringinä)
  const payload = await request.text();
  const sig = request.headers.get("stripe-signature");

  let event;

  try {
    // Validoi, että pyyntö on oikeasti tullut Stripeltä
    event = stripe.webhooks.constructEvent(payload, sig!, endpointSecret);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown webhook error";
    console.error(`Webhook Error: ${message}`);
    return new Response(`Webhook Error: ${message}`, { status: 400 });
  }

  // Käsittele itse tapahtuma
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Tässä vaiheessa tilaus on maksettu onnistuneesti.
    // Koska käytät toistaiseksi Stripen tuotekatalogia backendinä,
    // voit hakea tästä session.id:n perusteella tiedot siitä, mitä ostettiin
    // ja kuka osti (toimitusosoite).

    console.log("✅ Maksu onnistui!", session.customer_details?.email);
    // TODO: Vähennä varastosaldoa tai kirjaa tilaus ylös
  }

  // Stripe vaatii aina 200 OK -vastauksen, jotta se tietää viestin menneen perille
  return new Response(JSON.stringify({ received: true }), { status: 200 });
};
