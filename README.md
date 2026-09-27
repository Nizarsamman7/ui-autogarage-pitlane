# Pitlane Service

Full garage website: inspection, tyres, maintenance, diagnostics, prices, fleet work, and bay booking.

This is a full sample website, not a single landing page. Navigation, footer, and colours are already wired. Names, prices, and addresses are placeholders for a fictional business.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Page |
| --- | --- |
| `/` | Floor |
| `/services` | Book |
| `/apk` | Inspection |
| `/maintenance` | Maintenance |
| `/tyres` | Tyres |
| `/diagnostics` | Diagnostics |
| `/prices` | Prices |
| `/about` | About |
| `/team` | Team |
| `/fleet` | Fleet |
| `/warranty` | Warranty |
| `/hours` | Hours |
| `/faq` | FAQ |
| `/contact` | Contact |

Home is `app/page.tsx`. Every other route is a folder under `app/`. The menu that links them is `components/SiteChrome.tsx`. Colours and type are in `app/globals.css` and `app/layout.tsx`.

## Forms

Booking and contact forms confirm in the browser only. They do not send email and they do not save to a database. Replace `components/InquiryForm.tsx` when you connect a real inbox.

## Before a client launch

1. Replace the sample business name, address, hours, and prices.
2. Point the form at email or your own API.
3. Swap the placeholder staff and listings for real ones.
