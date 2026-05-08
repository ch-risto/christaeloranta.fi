// src/store/cartStore.ts
import { map } from "nanostores";

export type CartItem = {
  priceId: string; // Esim. price_1Nxyz... (Löydät tämän Stripen Dashboardista)
  quantity: number;
};

const STORAGE_KEY = "cart:items";

function sanitizeCart(value: unknown): Record<string, CartItem> {
  if (!value || typeof value !== "object") return {};

  const result: Record<string, CartItem> = {};
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (!item || typeof item !== "object") continue;

    const maybe = item as Partial<CartItem>;
    const quantity = Number(maybe.quantity);
    if (
      typeof maybe.priceId === "string" &&
      Number.isFinite(quantity) &&
      quantity > 0
    ) {
      result[key] = { priceId: maybe.priceId, quantity: Math.floor(quantity) };
    }
  }

  return result;
}

function syncStorage(value: Record<string, CartItem>) {
  if (typeof globalThis.localStorage === "undefined") return;

  try {
    globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Ignore quota/access errors to keep cart usable in memory.
  }
}

function getInitialCart(): Record<string, CartItem> {
  if (typeof globalThis.localStorage === "undefined") return {};

  try {
    const storedCart = globalThis.localStorage.getItem(STORAGE_KEY);
    if (!storedCart) return {};

    const parsed = JSON.parse(storedCart) as unknown;
    return sanitizeCart(parsed);
  } catch {
    return {};
  }
}

export const cartItems = map<Record<string, CartItem>>(getInitialCart());

if (typeof globalThis.localStorage !== "undefined") {
  cartItems.listen((value) => {
    syncStorage(value);
  });
}

export function addCartItem(priceId: string, maxQuantity?: number) {
  const existingItem = cartItems.get()[priceId];

  // Prevent exceeding inventory if a max is provided.
  if (typeof maxQuantity === "number" && maxQuantity >= 0) {
    const currentQuantity = existingItem?.quantity ?? 0;
    if (currentQuantity >= maxQuantity) {
      return false;
    }
  }

  if (existingItem) {
    cartItems.setKey(priceId, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  } else {
    cartItems.setKey(priceId, { priceId, quantity: 1 });
  }

  syncStorage(cartItems.get());

  return true;
}

export function removeCartItem(priceId: string) {
  const current = cartItems.get();
  if (priceId in current) {
    const rest = { ...current };
    delete rest[priceId];
    cartItems.set(rest);
    syncStorage(rest);
  }
}

export function updateCartItemQuantity(
  priceId: string,
  quantity: number,
  maxQuantity?: number,
) {
  const current = cartItems.get();

  const nextQuantity =
    typeof maxQuantity === "number" && maxQuantity >= 0
      ? Math.min(quantity, maxQuantity)
      : quantity;

  if (nextQuantity <= 0) {
    removeCartItem(priceId);
  } else if (priceId in current) {
    cartItems.setKey(priceId, { priceId, quantity: nextQuantity });
    syncStorage(cartItems.get());
  }
}

export function getCartItemQuantity(priceId: string): number {
  return cartItems.get()[priceId]?.quantity ?? 0;
}
