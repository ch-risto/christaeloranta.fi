// src/pages/api/checkout.ts
import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-03-25.dahlia",
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { items } = (await request.json()) as {
      items: Record<string, { priceId: string; quantity: number }>;
    }; // { "price_1N...": { priceId: "...", quantity: 1 } }

    // Muunnetaan Nano Storesin data Stripen vaatimaan line_items-muotoon
    const lineItems = Object.values(items).map((item) => ({
      price: item.priceId,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      // Mihin käyttäjä ohjataan maksun jälkeen.
      // Lokaalissa kehityksessä tämä on esim. http://localhost:4321/success
      success_url: `${import.meta.env.PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${import.meta.env.PUBLIC_SITE_URL}/cart`,

      // Koska kyseessä on fyysinen tuote, pyydetään toimitusosoite
      shipping_address_collection: {
        allowed_countries: ["FI"],
      },
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error: unknown) {
    console.error("Stripe Error:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
};
