import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = (context, next) => {
  // 1. OHITUS LOKAALISSA KEHITYKSESSÄ
  if (import.meta.env.DEV) {
    return next();
  }

  // 2. TUOTANNON/VERCELIN LOKIIKKA
  const USERNAME = import.meta.env.BASIC_USERNAME;
  const PASSWORD = import.meta.env.BASIC_PASSWORD;

  const basicAuth = context.request.headers.get("authorization");

  if (basicAuth && basicAuth.startsWith("Basic ")) {
    try {
      const authValue = basicAuth.split(" ")[1] ?? "";
      const decodedValue = atob(authValue);
      const firstColonIndex = decodedValue.indexOf(":");

      if (firstColonIndex !== -1) {
        const user = decodedValue.substring(0, firstColonIndex).trim();
        const pwd = decodedValue.substring(firstColonIndex + 1).trim();

        if (user === USERNAME && pwd === PASSWORD) {
          return next();
        }
      }
    } catch (e) {
      console.error("Virhe dekoodauksessa:", e);
    }
  }

  return new Response("Luvaton pääsy", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected"',
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      Vary: "Authorization",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
