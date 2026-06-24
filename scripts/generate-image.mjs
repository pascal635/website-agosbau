#!/usr/bin/env node
/*
  generate-image.mjs — KI-Web-Stills via Gemini (Imagen).
  Nur für Atmosphäre-/Konzeptbilder ohne echte Personen-Identität
  (siehe references/playbooks/image-generation.md). Echte Personen/Team/Kunden
  NIE generieren (E-E-A-T).

  Voraussetzung: GEMINI_API_KEY in .env (Google AI Studio Key).
  Aufruf:
    node scripts/generate-image.mjs --prompt "..." --out public/images/hero.png --aspect 16:9 [--n 1]

  Danach in WebP wandeln (Playbook):
    cwebp -q 80 public/images/hero.png -o public/images/hero.webp
*/
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

// .env minimal laden (ohne Dependency)
try {
  const env = await import('node:fs').then((fs) => fs.readFileSync('.env', 'utf8'));
  for (const line of env.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
} catch {}

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith('--')) acc.push([cur.slice(2), arr[i + 1]]);
    return acc;
  }, [])
);

const KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_IMAGE_MODEL || 'imagen-4.0-generate-001';
const prompt = args.prompt;
const out = args.out;
const aspect = args.aspect || '16:9';
const n = Number(args.n || 1);

if (!KEY) {
  console.error('✗ GEMINI_API_KEY fehlt (in .env eintragen). Siehe .env.example.');
  process.exit(1);
}
if (!prompt || !out) {
  console.error('Aufruf: node scripts/generate-image.mjs --prompt "..." --out pfad.png [--aspect 16:9] [--n 1]');
  process.exit(1);
}

const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${KEY}`;
const body = {
  instances: [{ prompt }],
  parameters: { sampleCount: n, aspectRatio: aspect },
};

const res = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

if (!res.ok) {
  console.error(`✗ API-Fehler ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const data = await res.json();
const preds = data.predictions || [];
if (!preds.length) {
  console.error('✗ Keine Bilddaten erhalten:', JSON.stringify(data).slice(0, 400));
  process.exit(1);
}

preds.forEach((p, i) => {
  const b64 = p.bytesBase64Encoded;
  const path = n > 1 ? out.replace(/(\.\w+)?$/, `-${i + 1}$1`) : out;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, Buffer.from(b64, 'base64'));
  console.log(`✓ ${path}`);
});
console.log('→ Nächster Schritt: in WebP wandeln (cwebp) + responsive Varianten, dann mit Alt-Text einbauen.');
