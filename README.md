# markmullins.dev

The root domain only redirects to https://github.com/markbmullins.

- `public/_redirects`: HTTP 301 for every path.
- `public/index.html`: fallback (meta refresh + JS) if the redirect rules are ever bypassed.
- `wrangler.jsonc`: Cloudflare Worker (static assets only) bound to the `markmullins.dev` custom domain.

```sh
npx wrangler deploy
```

## Subdomains

| Host | What | Source |
| --- | --- | --- |
| `stripe.markmullins.dev` | Paid charging presentation + presenter sync backend | `../stripe-presentation` (`npm run deploy`) |

DNS and the domain's zone live in Cloudflare.
