# Alcalde Books

The storefront for **alcaldebooks.com** — a curated shop of Californian &
Western Americana history. The site showcases the catalogue; buying happens
on eBay (each book links to its listing). No cart, no monthly fees.

Plain static site: HTML + CSS + a little JavaScript. No build step, no
framework, no dependencies. Same free-hosting model as archivesofcalifornia.com.

## Files

| File | What it is |
|------|------------|
| `index.html` | The page structure (masthead, intro, catalogue, about). |
| `styles.css` | All styling. Light + dark themes. |
| `app.js` | Renders the book grid; search + subject filter. |
| `books.js` | **The catalogue.** This is the only file you edit to add/remove books. |
| `images/` | Book photos (optional per book). |
| `favicon.svg` `_headers` `robots.txt` | Site plumbing. |

## Adding or editing a book

Open `books.js` and copy one of the blocks. Every field is documented at the
top of that file. The essentials:

```js
{
  title: "The Annals of San Francisco",
  author: "Soulé, Gihon & Nisbet",
  year: 1855,
  subject: "California",          // or "Western Americana"
  antiquarian: true,              // optional: also shows under "Rare & Antiquarian"
  cond: "Good, rebound",
  price: 220,
  ebay: "https://www.ebay.com/itm/XXXXXXXX",  // the real listing URL
  img: "annals.jpg",              // optional; omit for a drawn placeholder
  blurb: "First edition of the foundational chronicle of Gold-Rush San Francisco."
}
```

Workflow: create the eBay listing → copy its URL into `ebay` → add the block →
save. If a listing isn't up yet, use `ebay: "#"` and the button shows greyed
until you paste the real link.

## Preview it locally

Just double-click `index.html` — it opens in your browser and works, because
the catalogue is a plain script (no server needed). To preview exactly as it
will deploy, you can instead run a tiny local server from this folder:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy (Cloudflare Pages + Porkbun — same as archivesofcalifornia.com)

1. **Push this folder to a new GitHub repo** (e.g. `alcaldebooks`).
2. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.**
   Pick the repo. Build settings: **no build command**, **output directory `/`
   (root)**. Deploy — you get a `*.pages.dev` URL.
3. **Add the custom domain:** in the Pages project → *Custom domains* → add
   `alcaldebooks.com` (and `www.alcaldebooks.com`). Cloudflare shows the DNS
   target.
4. **Point the domain at it in Porkbun** → *DNS records*:
   - Root: an `ALIAS`/`ANAME` record for `alcaldebooks.com` → the Pages
     target (or move the domain's nameservers to Cloudflare and let Pages set
     it automatically — simplest).
   - `www`: a `CNAME` → `alcaldebooks.com` (or the `pages.dev` target).
5. Wait for DNS to propagate (minutes to a couple hours). HTTPS is automatic.

After that, every `git push` redeploys the site automatically.

## Notes

- The "View on eBay" links currently point at eBay *searches*. Replace each
  with the real listing URL as you create it.
- Covers are drawn placeholders until you add real photos (see `images/`).
- Contact email in `index.html` is `hello@alcaldebooks.com` — set up that
  forwarding in Porkbun (free) or change it to whatever address you prefer.
