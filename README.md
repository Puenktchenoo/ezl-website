# EzL Website

Website des Vereins **EzL, Erforschung zukunftsfähiger Landnutzungsformen**.
Astro, rein statisch, ohne Cookies und ohne Tracking. Schriften liegen lokal.

## Lokal starten

```
npm install
npm run dev        # Entwicklung auf http://localhost:4321
npm run build      # baut nach dist/
npm run check:texte  # prüft auf Gedankenstriche und Semikolons
```

## Hosting: Cloudflare Workers Builds

Repository in Cloudflare unter Workers & Pages mit Git verbinden.

* Build-Befehl: `npm run build`
* Deploy-Befehl: `npx wrangler deploy`

Die Einstellungen stehen in `wrangler.jsonc`. Die Seite läuft zuerst auf einer workers.dev Adresse.
Wenn die Domain da ist: Domain im Worker hinterlegen und `site` in `astro.config.mjs` anpassen.

## Offene Punkte

Alle Angaben, die noch mit Sebastian geklärt werden müssen, stehen gesammelt in
`src/data/verein.ts`: Anschrift fürs Impressum, Gemeinnützigkeit, Bankverbindung,
Kontakt-E-Mail, Video und Gründungsjahr.

## Seiten

| Seite | Datei |
|---|---|
| Start | `src/pages/index.astro` |
| Was ist Permakultur | `src/pages/permakultur.astro` |
| Flächen | `src/pages/flaechen.astro` |
| Muttergarten | `src/pages/muttergarten.astro` |
| Vision | `src/pages/vision.astro` |
| Lohnt sich das | `src/pages/wirtschaft.astro` |
| Spenden | `src/pages/spenden.astro` |
| Kontakt mit „Du hast Land?“ | `src/pages/kontakt.astro` |
| Mitmachen und Beitrittserklärung | `src/pages/mitmachen/` |
| Über uns, Impressum, Datenschutz | `src/pages/` |

Textregeln: wissenschaftlich ehrlich, keine Heilsversprechen, keine Gedankenstriche, keine Semikolons.
Fremde Grafiken werden nicht übernommen, sondern im eigenen Stil neu gezeichnet (`src/components/grafik/`).
