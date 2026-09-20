# Elias Travel and Tour — Website

A classic, fully static website for **Elias Travel and Tour** — a personalized
travel and visa consultation service in Qatar (TikTok: @eliastravel_tour).

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home — hero, welcome, services overview, featured tours, how it works, why choose us, CTA |
| `about.html` | About — who we are, approach, values |
| `services.html` | Services — visa & documentation, flights & bookings, private tours + FAQ |
| `tours.html` | Tours — 4 tour experiences, sample city & desert routes, photo gallery |
| `contact.html` | Contact — phone +974 3997 1400, TikTok, email, enquiry form |

No build step, no dependencies, no external fonts/CDNs — it works offline as-is.

## Brand
- Logo: the official Elias Travel and Tour logo (see `assets/logo/`)
- Colors sampled from the logo: navy `#0B3C6B`, dark navy `#072A4D`,
  orange `#F26F1D`, green `#4E8C2B`

## Logos (`assets/logo/`)
- `logo-hd.png` — **HD logo, 2560×2560** (4× upscale + sharpening of the original)
- `logo-transparent.png` — 1440×1440 with white background removed
- `logo-mark.png` — tight-cropped transparent mark used in the header
- `logo-400.png`, `logo-480.png` — smaller variants

## Contact details used
- Phone: **+974 3997 1400** (tap-to-call `tel:` links everywhere)
- TikTok: **@eliastravel_tour**
- Email: `hello@eliastraveltour.com` — **placeholder, replace if different**

## ⚠️ Placeholders to check before publishing
1. **Email** — `hello@eliastraveltour.com` in every HTML file and in `js/main.js`
   (search `hello@eliastraveltour.com`).
2. **Working hours** — "Daily 9:00 AM – 9:00 PM" is an assumption (top bar, footer,
   contact page).
3. **WhatsApp** — if the business also has a WhatsApp number, the floating
   "Call" button (class `wa-float`) can be switched to a `wa.me/` link.

## Photos
All photos in `assets/img/` are free CC-licensed Doha/Qatar landmark photos
from Wikimedia Commons (credit shown in the footer):
Doha Corniche Skyline View 2, Doha Skyline 09, Sunset on a Qatari dune,
Museum of Islamic Art Doha, Souq Waqif Doha, Katara village, Khor al-Udeid,
Desert Meets Sea, The Pearl-Qatar, Msheireb Downtown, Msheireb tram at night,
Traditional dhows on Doha Corniche.

## Run locally
```bash
cd eliastravel
python3 -m http.server 8080
# open http://localhost:8080
```
