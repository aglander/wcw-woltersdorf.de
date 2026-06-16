# Offene To-dos vor dem Livegang

Stand: 2026-06-15. Diese Liste sammelt alles, was noch erledigt werden muss,
bevor die Website rechtssicher und vollständig online gehen kann. Die Datei
liegt unter `docs/` und wird **nicht** mit der Website veröffentlicht.

---

## 1. Rechtlich (Pflicht vor Livegang)

### 1.1 USt-IdNr. ins Impressum eintragen — ✅ erledigt
- **Status:** USt-IdNr. `DE436698602` ist im Impressum eingetragen
  (`src/pages/impressum.astro`).

### 1.2 AVV mit Vercel — ✅ archiviert
- **Status:** DPA gespeichert unter
  [`docs/legal/2026-06-16_Vercel_DPA.pdf`](legal/2026-06-16_Vercel_DPA.pdf)
  (Quelle: `vercel.com/legal/dpa`). Wird laut Vercel automatisch mit dem
  Vertrag rechtsverbindlich – keine separate Unterschrift nötig.
- **Drittland-Hinweis:** Vercel Inc. sitzt in den USA. Datenübermittlung ist in
  der Datenschutzerklärung über die EU-Standardvertragsklauseln (SCC)
  abgedeckt.

### 1.3 AVV mit Form.taxi anfordern / archivieren
- **Warum:** Pflicht nach Art. 28 DSGVO; die Datenschutzerklärung sagt diesen
  AVV bereits zu.
- **Anbieter:** wrkt*biz Reinhard Söllradl, 4070 Eferding, Österreich (EU).
- **Wo bekommt man ihn:** Kein dokumentierter Self-Service-Download → kurz an
  **support@form.taxi** schreiben und den AVV anfordern.
- **Drittland-Hinweis:** Anbieter sitzt in der EU (Österreich) → keine
  USA-Drittlandproblematik.

> Hinweis: Solange beide AVV nicht vorliegen, ist die entsprechende Aussage in
> der Datenschutzerklärung noch nicht gedeckt. Sobald sie abgelegt sind, stimmt
> der Text – am Wording muss nichts mehr geändert werden.

### 1.4 Rechtstexte fachlich prüfen lassen (empfohlen)
- Impressum und Datenschutzerklärung sind solide Mustertexte, aber keine
  Rechtsberatung. Gerade wegen der Kunden aus dem Gesundheitsbereich empfiehlt
  sich eine Endkontrolle durch Anwalt oder einen Generator (eRecht24,
  Dr. DSGVO o. Ä.).

---

## 2. Inhalte

> Alle Inhaltspunkte erledigt. Beide Fotos sind eingebunden und über Astros
> `<Image>` automatisch zu WebP optimiert:
> - Hero: `src/assets/christian-hero.jpg`
> - Über mich: `src/assets/christian-lieferung.jpg`

---

## 3. Bereits erledigt (zur Übersicht)

- [x] Website-Grundgerüst in Astro (Variante B) umgesetzt
- [x] Beide Fotos eingebunden (Hero + Über mich), als WebP optimiert
- [x] Kontaktformular an Form.taxi angebunden (AJAX, Erfolgs-/Fehlermeldung,
      Honeypot)
- [x] Simple Analytics eingebaut (privacy-first, DNT respektiert)
- [x] Google Fonts lokal gehostet (keine Datenübertragung an Google)
- [x] Impressum-Seite (`/impressum`)
- [x] Datenschutzerklärung (`/datenschutz`) mit korrekten Diensten/Anbietern
- [x] Footer-Links zu Impressum & Datenschutz
- [x] robots.txt (Impressum/Datenschutz von Indexierung ausgenommen)
- [x] Sitemap (`sitemap-index.xml`, ohne Rechtsseiten)

---

## 4. Technische Hinweise (nicht blockierend)

- **Form.taxi Honeypot:** Das versteckte Feld `_gotcha` ist im Formular
  vorhanden. Ggf. im Form.taxi-Dashboard unter Spamschutz aktivieren, damit es
  ausgewertet wird.
- **Form.taxi API-Key** (`…`): wird vom Formular **nicht** benötigt (nur für die
  Management-API) und ist bewusst **nicht** im Code hinterlegt.
- **@astrojs/sitemap** ist auf Version `3.2.1` gepinnt – neuere 3.7.x sind mit
  der aktuellen Astro-Version (4.16.x) inkompatibel (Build-Fehler). Bei einem
  späteren Astro-Update kann die Sitemap-Version wieder angehoben werden.
