# WCW – Weischnors Consulting Woltersdorf

Website für WCW – Weischnors Consulting Woltersdorf: persönlicher Partner für
Praxis- und Sprechstundenbedarf in Berlin, Brandenburg und deutschlandweit.

Gebaut mit [Astro](https://astro.build/).

## Entwicklung

```sh
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server starten
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Struktur

- `src/pages/` – Seiten: Startseite (`index`), `impressum`, `datenschutz`
- `src/components/` – Sektions-Komponenten der Startseite
- `src/layouts/Base.astro` – gemeinsames HTML-Grundgerüst, Fonts, Analytics
- `src/styles/global.css` – Design-Tokens und globale Styles
- `public/` – statische Assets (Logo, Fotos, lokale Fonts, robots.txt)

## Eingesetzte Dienste

- **Kontaktformular:** [Form.taxi](https://form.taxi/) (AJAX-Versand)
- **Analyse:** [Simple Analytics](https://simpleanalytics.com/) (cookie- und
  personenbezugsfrei, respektiert Do-Not-Track)
- **Schriften:** Space Grotesk & Hanken Grotesk, lokal gehostet (keine
  Verbindung zu Google Fonts)
- **Hosting:** Netlify

## Offene Punkte

Vor dem Livegang noch zu erledigen — siehe
[`docs/TODO-vor-livegang.md`](docs/TODO-vor-livegang.md)
(u. a. USt-IdNr., AVV, zweites Foto).
