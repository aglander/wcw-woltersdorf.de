# Offene To-dos vor dem Livegang

Stand: 2026-06-15. Diese Liste sammelt alles, was noch erledigt werden muss,
bevor die Website rechtssicher und vollständig online gehen kann. Die Datei
liegt unter `docs/` und wird **nicht** mit der Website veröffentlicht.

---

## 1. Rechtlich (Pflicht vor Livegang)

### 1.1 USt-IdNr. ins Impressum eintragen
- **Wo:** `src/pages/impressum.astro`, Abschnitt „Umsatzsteuer-Identifikationsnummer"
- **Aktuell:** Platzhalter `[USt-IdNr. bitte eintragen]`
- **Was tun:** Die echte USt-IdNr. einsetzen.
  - Falls **keine** USt-IdNr. vorhanden ist (z. B. Kleinunternehmer nach § 19 UStG):
    Bescheid geben → der ganze Abschnitt wird entfernt.

### 1.2 AVV mit Netlify abschließen / archivieren
- **Warum:** Pflicht nach Art. 28 DSGVO; die Datenschutzerklärung sagt diesen
  AVV bereits zu.
- **Wo bekommt man ihn:** Netlify stellt ein standardisiertes DPA bereit
  (`netlify.com/pdf/netlify-dpa.pdf` bzw. über das Account-Dashboard). Bei
  vielen Plänen gilt es durch Nutzung als akzeptiert.
- **Was tun:** DPA herunterladen und in den eigenen Unterlagen ablegen.
- **Drittland-Hinweis:** Netlify sitzt in den USA. Datenübermittlung ist in der
  Datenschutzerklärung über die EU-Standardvertragsklauseln (SCC) abgedeckt.

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
