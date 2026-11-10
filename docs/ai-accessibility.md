# AI accessibility and crawler diagnostics

The public site is built with Astro and hosted on Vercel. These changes improve discoverability, but cannot guarantee access by every AI tool.

## Public machine-readable entry points
- `/robots.txt`: explicit permissions for OAI-SearchBot and ChatGPT-User; GPTBot is not explicitly allowed or denied beyond the general wildcard policy. If model-training opt-out is desired, add a separate GPTBot Disallow rule.
- `/llms.txt`: optional index for AI readers; not a universal standard.
- `/llms-full.txt`: public professional summary sourced from site pages.
- `/sitemap-index.xml`: Astro sitemap.
- `/about`: canonical public biography and experience.

## Deployment checks (perform after preview deployment and after merge)
Run these from an external network, not only a local browser:

```sh
curl -IL https://christaeloranta.fi/
curl -IL https://www.christaeloranta.fi/
curl -i https://christaeloranta.fi/robots.txt
curl -i https://christaeloranta.fi/llms.txt
curl -i https://christaeloranta.fi/llms-full.txt
curl -i https://christaeloranta.fi/sitemap-index.xml
curl -I -A 'OAI-SearchBot' https://christaeloranta.fi/
curl -I -A 'ChatGPT-User' https://christaeloranta.fi/
```

Expected: public 200 responses on canonical URLs and a stable redirect (prefer 308) from the alternate www host to the canonical apex host; content-type text/plain for llms files, XML for sitemap. Verify with GET if HEAD is unsupported. Check robots rules, response headers and HTML canonical links. Do not infer successful crawling from a 200 response alone.

## If bots still cannot access the site
1. Inspect Vercel Firewall / Bot Protection logs and any CDN/WAF rules for 403, 429, challenges, geoblocking, or managed bot rules.
2. Compare response to normal browser, curl and declared bot user agents. User-Agent alone is not authentication; validate published bot IP ranges before allowlisting.
3. Check DNS, IPv4/IPv6, TLS certificate and redirects for both hostnames; eliminate redirect loops.
4. If a protection rule blocks legitimate traffic, narrowly exempt verified crawler IP ranges or the specific public paths. Never disable all security controls or expose protected endpoints.
5. Retry with an independent external client. Some AI tools may still restrict a URL independently of site configuration.

No Vercel project settings are modified by this pull request: firewall configuration and live HTTP responses require external access and separate verification.
