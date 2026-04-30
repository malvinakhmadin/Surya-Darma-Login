# Hartono Rent Car (HARENT) — PT Surya Darma Perkasa

A simple landing page for PT Surya Darma Perkasa (Hartono Rent Car), a Jakarta-based car rental company.

## Artifacts

- **harent** (`artifacts/harent`, served at `/`): React + Vite single-page homepage. Displays the company cover image and a "Masuk (Login)" button that opens the company's Google Apps Script web app in a new tab.
- **api-server** (`artifacts/api-server`, served at `/api`): Default Express server scaffold (not used by the homepage).
- **mockup-sandbox** (`artifacts/mockup-sandbox`, served at `/__mockup`): Default canvas mockup sandbox.

## Key behavior

- The login button on the homepage links to the company's Google Apps Script Web App URL (`target="_blank"`).
- Cover image is sourced from `attached_assets/8e7798fa-7452-4433-afdb-1a2ed472b374_1777514305016.jpg` via the Vite `@assets` alias.
- Theme uses a navy/blue palette derived from the HARENT brand identity.
